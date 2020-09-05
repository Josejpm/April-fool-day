import React from 'react'
import '../../../..//node_modules/react-vis/dist/style.css';
import {XYPlot,XAxis,YAxis,VerticalBarSeries,HorizontalGridLines} from 'react-vis';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

const Chart = () => {
    const {stats} = useContext(AppContext);
    const statsData  = [
        {x:'Purple', y:stats.Purple, color:'#9C27B0'},
        {x:'Blue', y:stats.Blue, color:'#03A9F4'},
        {x:"Green", y:stats.Green, color:'#4CAF50'},
        {x:'Yellow', y:stats.Yellow, color:'#FFEB3B'},
        {x:'Orange', y:stats.Orange, color:'#FF9800'},
        {x:'Red', y:stats.Red, color:'#FF4436'},
        {x:'Grey', y:stats.Grey, color:'#9E9E9E'},
    ]

    return ( 
        <XYPlot margin={{bottom: 70}} colorType="literal" xType="ordinal" width={500} height={500}>
            <HorizontalGridLines />
            <XAxis 
              style={{text: {stroke: 'none', fill: 'red', fontWeight: 'normal'}}}
              tickLabelAngle={-45}
            />
            <YAxis
              style={{text: {stroke: 'none', fill: 'red', fontWeight: 'normal'}}} 
            />
            <VerticalBarSeries data={statsData}/>
          </XYPlot>
     );
}
 
export default Chart;