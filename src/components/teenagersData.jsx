import React from 'react';

const teenagersData = (props) => {
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
      <div style={navy}></div>
      <div style={grey}></div>
      <div style={blue}></div>
    </div>

    );
}

export default teenagersData;