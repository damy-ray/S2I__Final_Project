import React, { useEffect, useState } from 'react';
import Table from 'Components/core/Table';
import ChartComponent from './Chart';
import RestHelper from 'Helpers/RestHelper';
import Button from 'Components/core/Button';
import Loader from 'Components/core/Loader';
import IconsMapping from 'Components/IconsMapping';

const PreviousIcon = IconsMapping["GrFormPrevious"]
const NextIcon = IconsMapping["MdNavigateNext"]
const LastIcon = IconsMapping["FiChevronsRight"]
const FirstIcon = IconsMapping["FiChevronsLeft"]

const DataPage = ({ title, apiUrl, columns, dataLabel, dataMapper }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(15);
  const [type, setType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestHelper.authenticated('GET', apiUrl);
        const fetchedData = response.data.co2 || response.data.methane || response.data.nitrous || response.data.result || [];
        if (response.data.co2) {
          setType('co2')
        } else if (response.data.methane) {
          setType("methane")
        } else if (response.data.nitrous) {
          setType("nitrous")
        } else if (response.data.result) {
          setType("temperature")
        }

        const mappedData = dataMapper(fetchedData);

        setData(mappedData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        // setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, dataMapper]);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

 
  return (
    <div className="container mx-auto p-4 h-full">
      { loading ? <Loader /> :  <div>
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <ChartComponent type={type} data={data} dataLabel={dataLabel} title={`${dataLabel} Comparison`} />

        <Table columns={columns} data={currentData} />

        <div className="flex justify-end items-center mt-4">
          <Button onClick={handleFirstPage} variant='warning' className='m-2'>
            <FirstIcon />
          </Button>
          <Button onClick={handlePreviousPage} variant='success' className='m-2'>
            <PreviousIcon />
          </Button>
          <p className="text-gray-700 text-xs">
            Page {currentPage} of {totalPages}
          </p>
          <Button onClick={handleNextPage} variant='success' className='m-2'>
            <NextIcon />
          </Button>
          <Button onClick={handleLastPage} variant='warning' className='m-2'>
            <LastIcon />
          </Button>
        </div>
      </div>}
    </div>
  );
};

export default DataPage;
