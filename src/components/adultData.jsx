import React from 'react';
import MaterialTooltip from '@material-ui/core/Tooltip';


const adultBar = () => {
  const navy = {
    width: "24%",
    backgroundColor: "#092961"
    };
  const grey =  {
    width: "25%",
    backgroundColor: "#a4b2c8"
    }
  const blue = {
    width: "51%",
    backgroundColor: "#4199d2"
    }
  return (
    <>
    <div className='container'>
    {/* <p className='adultContainer'>Adult</p> */}
      <MaterialTooltip title='25% of Food Consumption dedicated to Fruits/Veggies'>
      <div style={navy}></div>
      </MaterialTooltip>
      <MaterialTooltip title='25% of Food Consumption dedicated to Grains'>
      <div style={grey}></div>
      </MaterialTooltip>
      <MaterialTooltip title='50% of Food Consumption dedicated to Proteins'>
      <div style={blue}></div>
      </MaterialTooltip>
    </div>
    </>
  );
}

export default adultBar;