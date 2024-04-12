import React from 'react';
import { useContext } from 'react';

import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

import { RatioChartContext } from '../../Pages/UserProfile';



function PassRatioChart({ difficulty }) {

  const { easyValue, hardValue, hardestValue, easyPassValue, hardPassValue, hardestPassValue } = useContext(RatioChartContext);
  const value = {
    'easy': easyPassValue,
    'hard': hardPassValue,
    'hardest': hardestPassValue
  }[difficulty];

  const valueMax = {
    'easy': easyValue,
    'hard': hardValue,
    'hardest': hardestValue
  }[difficulty];

  const color = {
    'easy': '#09BCE0',
    'hard': '#9F69D5',
    'hardest': '#6070D4'
  }[difficulty];

  const settings = {
    width: 120,
    height: 120,
    value: value,
    valueMax: valueMax,

    // color: '#9F69D5',
  };
  // const { color } = settings;
  return (
    <div>
      <Gauge
        innerRadius={25}
        outerRadius={38}
        startAngle={-110}
        endAngle={110}
        {...settings}
        cornerRadius="50%"
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 16,
            fontWeight: 500
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: color,
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: theme.palette.text.disabled,
          },
        })}
        text={
          ({ value, valueMax }) => `${value} / ${valueMax}`
        }
      />
    </div>

  );
}

export default PassRatioChart;
