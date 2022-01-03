import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Data from './components/data';
import ChildrenData from './components/childrenData';
import TeenagersData from './components/teenagersData';
import AdultData from './components/adultData'
import Legend from './components/legend'
import {Select, MenuItem, FormControl, InputLabel, makeStyles} from "@material-ui/core"
const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 100,
  }
}))


function App() {
  const classes = useStyles()
  const [value, setValue] = useState("")
  const handleChange = e => setValue(e.target.value)
  return (
    <div className="App">
      

        {/* <Data/> */}
        <div className='displayBar'>
        <FormControl className = {classes.formControl}>
          <InputLabel>Display</InputLabel>
        <Select onChange={handleChange}>
          <MenuItem value={<Data />}>All</MenuItem>
          <MenuItem value={<AdultData />}>Adults</MenuItem>
          <MenuItem value={<ChildrenData />}>Children</MenuItem>
          <MenuItem value={<TeenagersData />}>Teenagers</MenuItem>
        </Select>
        </FormControl>
        </div>
        <Legend />
      <div className='title' >Food group consumption by age</div>
      <div className='numbersAboveLine'>
      <p>0%</p>
      <p>50%</p>
      <p>100%</p>
      </div>
      <hr className='thin'/>
      <p> {value}</p>
    </div>
  );
}

export default App;
