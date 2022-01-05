import React from 'react';
import MaterialToolTip from '@material-ui/core/Tooltip'
const teenagersData = (props) => {
  const navy = {
    width: "25%",
    backgroundColor: "#092961"
};
const grey =  {
  width: "25%",
  backgroundColor: "#a4b2c8"
}
const blue = {
  width: "50%",
  backgroundColor: "#4199d2"
}
  
  return (
    <div className='container'> 
    <MaterialToolTip title="26% of Food Consumption dedicated to Fruits/Vegetables">
      <div style={navy}></div>
    </MaterialToolTip>
    <MaterialToolTip title='26% of Food Consumption to Grains'>
    <div style={grey}></div>
    </MaterialToolTip>
    <MaterialToolTip title='48% of Food Consumption dedicated to Protein'>
    <div style={blue}></div>
    </MaterialToolTip>
      
      
      
    </div>

    );
}

export default teenagersData;