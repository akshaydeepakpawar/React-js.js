import React from 'react'

const Greeting2 = ({timeofDay}) => {
  return (
    <div>
        {timeofDay && `Good ${timeofDay}`}
    </div>
  )
}

export default Greeting2