import React from 'react';
import { Link } from 'react-router-dom';
import SimpleTileCard from 'Components/core/SimpleTileCard';
import IconsMapping from 'Components/IconsMapping';

const Icon1 = IconsMapping.FaCloud
const Icon2 = IconsMapping.FaThermometerHalf
const Icon3 = IconsMapping.FaWater
const Icon4 = IconsMapping.FaWind


const HomePage = () => {
  return (
    <div className="h-[90vh] bg-gray-100 flex flex-col justify-center items-center my-12">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Climate Data Dashboard</h1>
        <p className="text-lg text-gray-600 mt-4">Explore the latest climate data on CO2, Methane, NO2, and Polar Ice.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/co2">
          <SimpleTileCard 
            Icon={Icon1} 
            iconSize={40} 
            iconColor="#1D4ED8" 
            title="CO2 Data" 
            subtitle="Explore data on carbon dioxide levels." 
          />
        </Link>

        <Link to="/methane">
          <SimpleTileCard 
            Icon={Icon2} 
            iconSize={40} 
            iconColor="#10B981" 
            title="Methane Data" 
            subtitle="Explore data on methane levels." 
          />
        </Link>

        <Link to="/no2">
          <SimpleTileCard
            Icon={Icon3}
            iconSize={40} 
            iconColor="#DC2626" 
            title="NO2 Data" 
            subtitle="Explore data on nitrogen dioxide levels." 
          />
        </Link>

         <Link to="/ghiaccio-polare">
          <SimpleTileCard 
            Icon={Icon2} 
            iconSize={40} 
            iconColor="#6366F1" 
            title="Polar Ice Data" 
            subtitle="Explore data on polar ice levels." 
          />
        </Link>

        <Link to="/temperature">
          <SimpleTileCard 
            Icon={Icon4}
            iconSize={40} 
            iconColor="#F59E0B" 
            title="Temperature Data" 
            subtitle="Explore data on global temperatures." 
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
