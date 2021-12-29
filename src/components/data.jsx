import React from 'react';
import AdultData from './adultData'
import ChildrenData from './childrenData';
import TeenagersData from './teenagersData';
import Legend from './legend';
function data(props) {
  return (
    <div>
      <Legend />
      <div className='title' >Food group consumption by age</div>
      <div className='numbersAboveLine'>
      <p>0%</p>
      <p>50%</p>
      <p>100%</p>
      </div>
      <hr className='thin'/>
      <AdultData/> 
      <ChildrenData />
      <TeenagersData />
    </div>
  );
}

export default data;