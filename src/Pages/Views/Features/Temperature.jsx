import DataPage from "Components/core/DataPage";
import { Helmet } from "react-helmet";
import Endpoints from "Resources/Endpoints";

const url = `${Endpoints.BASE}${Endpoints.MAIN.TEMPERATURE.URL}`;

const temperatureMapper = (data) => {
  return data.map(item => ({
    land: item.land,
    time: item.time,
    station: item.station,
  }));
};

const TemperaturePage = () => {
  const columns = [
    { header: 'Time', accessor: 'time' },
    { header: 'Land', accessor: 'land' },
    { header: 'Station', accessor: 'station' },
  ];

  return (
    <div>
      <Helmet>
        <title>Temperature Data</title>
      </Helmet>
      <DataPage 
      title="Global Temperature Data" 
      apiUrl={url} 
      columns={columns} 
      dataLabel="Temperature Levels" 
      dataMapper={temperatureMapper} 
    />
    </div>
  );
};

export default TemperaturePage;
