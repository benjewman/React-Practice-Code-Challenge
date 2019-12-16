import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => {
        props.details.eaten ? null : props.eaten(props.details.id)
      }}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.details.eaten ?
            null
          :
            <img src={props.details.img_url} alt="" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.details.name} - ${props.details.price}
      </h4>
    </div>
  )
}

export default Sushi