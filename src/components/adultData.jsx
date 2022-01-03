import React from 'react';

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
      <div className='container'>
        <div style={navy}></div>
        <div style={grey}></div>
        <div style={blue}></div>
      </div>
    );
}

export default adultBar;