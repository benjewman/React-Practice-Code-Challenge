import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let sushiComponentArray = props.allSushi.map(sushi => {
    return <Sushi details={sushi} eaten={props.eaten}/>
  })

  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
          sushiComponentArray.slice(props.sliceStart, props.sliceEnd)
        }
        <MoreButton handleMoreSushi={props.handleMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer