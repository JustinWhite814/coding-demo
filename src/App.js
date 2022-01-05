import React, {useState} from 'react'
import './App.css';
import Legend from './components/legend'
import {Select, MenuItem, FormControl, InputLabel, makeStyles} from "@material-ui/core"
import BarGraph from './components/BarGraph'

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 500,
  }
}))

const fakeData = {
  Adults: {
    fruits: .25,
    grains: .25,
    proteins: .5
  },
  Teenagers: {
    fruits: .26,
    grains: .26,
    proteins: .48
  },
  Children: {
    fruits: .27,
    grains: .27,
    proteins: .46
  },
}

const App = () => {
  const classes = useStyles()
  const [value, setValue] = useState('All')
  const handleChange = e => setValue(e.target.value)
  const data = fakeData[value]
  
  return (
    <div>
      <div className='displayBar'>
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
      <div>
        {value === 'All' ? (
          <>
            <BarGraph label="Adults" data={fakeData.Adults} />
            <BarGraph label="Teenagers" data={fakeData.Teenagers} />
            <BarGraph label="Children" data={fakeData.Children} />
          </>
        ) : <BarGraph label={value} data={data} />}
      </div>
    </div>
  );
}

export default App;
