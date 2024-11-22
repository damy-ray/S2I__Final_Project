import React, { useEffect, useState } from 'react';
import RestHelper from 'Helpers/RestHelper';
import Table from 'Components/core/Table';
import Button from 'Components/core/Button';
import Loader from 'Components/core/Loader';
import ChartComponent from 'Components/core/Chart';
import Endpoints from "Resources/Endpoints"
import { Helmet } from 'react-helmet';

const url = `${Endpoints.BASE}${Endpoints.MAIN.ARCTIC.URL}`;


const GhiaccioPolarePage = () => {
  const [data, setData] = useState({});
  const [description, setDescription] = useState({});
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(15);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(url)
        const response = await RestHelper.authenticated('GET', url);
         console.log(response)
        setData(response.data.arcticData.data);
        setDescription(response.data.arcticData.description);
      } catch (err) {
        //setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formattedData = Object.keys(data).map(key => ({
    date: key,
    value: data[key].value,
    anom: data[key].anom,
    monthlyMean: data[key].monthlyMean,
  }));

  const chartData = formattedData.map(item => ({
    date: item.date,
    value: item.value,
    anom: item.anom,
    monthlyMean: item.monthlyMean,
  }));

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = formattedData.slice(indexOfFirstRow, indexOfLastRow);

  const columns = [
    { header: 'Date', accessor: 'date' },
    { header: 'Value', accessor: 'value' },
    { header: 'Anomaly (Anom)', accessor: 'anom' },
    { header: 'Monthly Mean', accessor: 'monthlyMean' },
  ];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const totalPages = Math.ceil(formattedData.length / rowsPerPage);

  // if (loading) return <Loader />;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4 h-[100vh] mb-28">
      <Helmet>
        <title>Polar Ice Data</title>
      </Helmet>
      {loading ? <Loader /> : <div>
        <h1 className="text-2xl font-bold mb-4">Global Sea Ice Extent</h1>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">{description.title}</h2>
          <p><strong>Base Period:</strong> {description.basePeriod}</p>
          <p><strong>Units:</strong> {description.units}</p>
          <p><strong>Annual Mean:</strong> {description.annualMean}</p>
          <p><strong>Decadal Trend:</strong> {description.decadalTrend}</p>
        </div>

        <ChartComponent 
          data={chartData} 
          dataLabel="Sea Ice Extent" 
          title="Sea Ice Extent Over Time" 
          chartType="area"  
          type="ice"
          yAxisLabel="Extent (million sq km)"
        />

        <Table columns={columns} data={currentData} />

        <div className="flex justify-between items-center mt-4">
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            variant='success'
          >
            Previous
          </Button>
          <p className="text-gray-700">
            Page {currentPage} of {totalPages}
          </p>
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            variant='success'
          >
            Next
          </Button>
        </div>
      </div>}
    </div>
  );
};

export default GhiaccioPolarePage;
