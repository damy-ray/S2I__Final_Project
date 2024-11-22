import DataPage from "Components/core/DataPage";
import { Helmet } from "react-helmet";

const no2Mapper = (data) => {
  return data.map(item => ({
    date: item.date,
    average: item.average,
    averageUnc: item.averageUnc,
    trend: item.trend,
    trendUnc: item.trendUnc,
  }));
};

const NO2Page = () => {
  const columns = [
    { header: 'Average', accessor: 'average' },
    { header: 'Average Uncertainty', accessor: 'averageUnc' },
    { header: 'Date', accessor: 'date' },
    { header: 'Trend', accessor: 'trend' },
    { header: 'Trend Uncertainty', accessor: 'trendUnc' },
  ];

  return (
    <div>
      <Helmet>
        <title>NO2 Data</title>
      </Helmet>
      <DataPage 
      title="Nitrous Oxide (NO2) Data" 
      apiUrl="https://global-warming.org/api/nitrous-oxide-api" 
      columns={columns} 
      dataLabel="NO2 Levels" 
      dataMapper={no2Mapper} 
    />
    </div>
  );
};

export default NO2Page;
