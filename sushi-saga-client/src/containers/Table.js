import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <div className="remaining">
      <h1>
        You have: ${props.moneyLeft} remaining!
      </h1>
      <form className="remaining" onSubmit={props.addMoney}>
        <input type="text" name="addMoney"/>
        <input type="submit" value="Add Money" />
      </form>
      </div>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.emptyPlates)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table