import React from 'react';
import AdultData from './adultData'
import ChildrenData from './childrenData';
import TeenagersData from './teenagersData';

const data = () => {
  return (
    <div>
      <AdultData/> 
      <ChildrenData />
      <TeenagersData />
    </div>
  );
}

export default data;