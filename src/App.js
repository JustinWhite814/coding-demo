import React, {useState} from 'react'
import './App.css';
import Data from './components/data';
import ChildrenData from './components/childrenData';
import TeenagersData from './components/teenagersData';
import AdultData from './components/adultData'
import Legend from './components/legend'
import {Select, MenuItem, FormControl, InputLabel, makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 500,
  }
}))

const components = {
  All: Data,
  Adults: AdultData,
  Teenagers: TeenagersData,
  Children: ChildrenData,
}

const App = () => {
  const classes = useStyles()
  const [value, setValue] = useState('All')
  const handleChange = e => setValue(e.target.value)
  const Component = components[value]
  
  return (
    <div>
      <div className='displayBar'>
        <div>Sidebar</div>
        <FormControl className = {classes.formControl}>
          <InputLabel>Display</InputLabel>
          <Select onChange={handleChange} value={value}>
            <MenuItem value="All" >All</MenuItem>
            <MenuItem value="Adults">Adults</MenuItem>
            <MenuItem value="Teenagers">Teenagers</MenuItem>
            <MenuItem value="Children">Children</MenuItem>
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
      <div className='thin'/>
      <div><Component /></div>
    </div>
  );
}

export default App;
