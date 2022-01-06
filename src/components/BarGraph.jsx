import React from 'react'
import styled, { css } from 'styled-components'
import {Tooltip} from '@material-ui/core'

const Segment = styled.div`${({color, width}) => {
  return css`
    width: ${width * 100}%;
    background: ${color};
  `
}}`

const Label = styled.div`
  width: 10ch;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-100%, -50%);
`

function BarGraph({data, label}) {
  const {fruits, grains, proteins} = data

  return (
    <div className="container">
      <Label>{label}</Label>
      <Tooltip title={`${fruits*100} % of Food Consumption dedicated to Fruits/Veggies`}>
        <Segment color="#092961" width={fruits} />
      </Tooltip>
      <Tooltip title={`${grains*100} % of Food Consumption dedicated to Grains`} >
        <Segment color="#a4b2c8" width={grains} />
      </Tooltip>
      <Tooltip title={`${proteins*100} % of Food Consumption dedicated to Proteins`} >
        <Segment color="#4199d2" width={proteins} />
      </Tooltip>
    </div>
  );
}

export default BarGraph;