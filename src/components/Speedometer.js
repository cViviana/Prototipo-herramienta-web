import React from 'react';
import GaugeChart from 'react-gauge-chart';

const Speedometer = ({ value }) => {
  return (
    <div style={{ width: '500px', height: '250px'}}>
      <GaugeChart 
        id="velocimetro-chart" 
        nrOfLevels={20} 
        percent={value / 100} 
        arcsLength={[2, 2, 2,2,2]}
        arcPadding={0.02} 
        arcWidth={0.3} 
        textColor="#000000"
        colors={["#FF0000", "#E45B30", "#FFC000", "#9FD123", "#00D237"]} 
        formatTextValue={(value) => `${value}%`} 
        needleColor="#000000"
        needleBaseColor="#000000"
        needleShadowColor="#000000"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Speedometer;