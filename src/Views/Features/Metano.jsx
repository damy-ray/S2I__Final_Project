import DataPage from "Components/core/DataPage";
import { Helmet } from "react-helmet";
import Endpoints from "Resources/Endpoints"

const url = `${Endpoints.BASE}${Endpoints.MAIN.METHANE.URL}`;

const methaneMapper = (data) => {
  return data.map(item => ({
    date: item.date,     
    average: item.average,   
    trend: item.trend,   
    averageUnc: item.averageUnc, 
    trendUnc: item.trendUnc, 
  }));
};

const MethanePage = () => {
  const columns = [
    { header: 'Date', accessor: 'date' },
    { header: 'Average', accessor: 'average' },
    { header: 'Trend', accessor: 'trend' },
    { header: 'Average Uncertainty', accessor: 'averageUnc' },
    { header: 'Trend Uncertainty', accessor: 'trendUnc' },
  ];

  return (
    <div>
      <Helmet>
        <title>Methano Data</title>
      </Helmet>
      <DataPage 
      title="Methane Data" 
      apiUrl={url} 
      columns={columns} 
      dataLabel="Methane Levels" 
      dataMapper={methaneMapper} 
    />
    </div>
  );
};

export default MethanePage;
