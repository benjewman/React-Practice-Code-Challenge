import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushi: [],
      sliceStart: 0,
      sliceEnd: 4,
      moneyLeft: 100,
      emptyPlates: []
    }
  }

  setSushiState = (sushiArray) => {
    this.setState({sushi: sushiArray})
  }

  eaten = (id) => {
    const sushiIndex = this.state.sushi.findIndex(sushi => sushi.id === id)
    let sushiArray = this.state.sushi.slice()
    if (sushiArray[sushiIndex]['price'] <= this.state.moneyLeft) {
      sushiArray[sushiIndex]['eaten'] = true
      let currentMoney = this.state.moneyLeft - sushiArray[sushiIndex]['price']
      let addedPlate = this.state.emptyPlates.slice()
      addedPlate.push('empty')
      this.setState({
        sushi: sushiArray,
        moneyLeft: currentMoney,
        emptyPlates: addedPlate
      })
    } else {
      return null
    }
  }

  addMoney = (event) => {
    event.preventDefault()
    const currentMoney = this.state.moneyLeft + parseInt(event.target.children[0].value, 10)
    event.target.reset()
    this.setState({moneyLeft: currentMoney})
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushi => {
      this.setSushiState(sushi)
    })
  }

  handleMoreSushi = () => {
    if (this.state.sliceStart < 96) {
      this.setState({
        sliceStart: (this.state.sliceStart + 4),
        sliceEnd: (this.state.sliceEnd + 4)
      })
    } else {
      this.setState({
        sliceStart: 0,
        sliceEnd: 4
      })
    }
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer  eaten={this.eaten} handleMoreSushi={this.handleMoreSushi} sliceStart={this.state.sliceStart} sliceEnd={this.state.sliceEnd} allSushi={this.state.sushi}/>
        <Table addMoney={this.addMoney} emptyPlates={this.state.emptyPlates} moneyLeft={this.state.moneyLeft}/>
      </div>
    );
  }
}

export default App;