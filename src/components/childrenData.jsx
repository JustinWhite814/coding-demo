import React from 'react';
import MaterialTooltip from '@material-ui/core/Tooltip'
const childrenData = () => {
  const navy = {
    width: "26%",
    backgroundColor: "#092961"
  };
  const grey =  {
  width: "26%",
  backgroundColor: "#a4b2c8"
  }
  const blue = {
  width: "49%",
  backgroundColor: "#4199d2"
  }
  return (
    <div className='container'>
       <MaterialTooltip title='27% of Food Consumption dedicated to Fruits/Veggies'>
       <div style={navy}></div>
       </MaterialTooltip>
    <MaterialTooltip title='27% of Food Consumption dedicated to Grains'>
      <div style={grey}></div>
    </MaterialTooltip>
    <MaterialTooltip title='46%% of Food Consumption dedicated to Proteins' >
      <div style={blue}></div>
    </MaterialTooltip>
    
  </div>
  );
}

export default childrenData;