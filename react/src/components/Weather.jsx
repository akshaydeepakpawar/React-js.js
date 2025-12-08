import React from 'react'

const Weather = ({temprature}) => {
  return (
    <div>
        {temprature<15 && "It's cold outside"}
        {temprature>15 && temprature<25 && "It's nice outside"}
        {temprature>25 && "It's hot outside"}
    </div>
  )
}

export default Weather