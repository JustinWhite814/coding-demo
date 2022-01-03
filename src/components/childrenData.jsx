import React from 'react';

const childrenData = () => {
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
    <div style={navy}></div>
    <div style={grey}></div>
    <div style={blue}></div>
  </div>
  );
}

export default childrenData;