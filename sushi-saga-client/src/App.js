import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
const SUSHI_NUM = 4

class App extends Component {

  state = {
    sushis: [],
    money: 100,
    eatenSushis: [],
    sushiPosition: 0
  }

  addSushis = () => {
    let newSushiPosition = this.state.sushiPosition + SUSHI_NUM
    if (newSushiPosition >= this.state.sushis.length) {
      newSushiPosition = newSushiPosition - this.state.sushis.length
    }
    this.setState({
      sushiPosition: newSushiPosition
    })
  }

  addMoney = (money) => {
    this.setState ({
      money: (this.state.money + parseInt(money, 10))
    })
  }

  eatSushi = (sushi) => {
    if (this.state.eatenSushis.includes(sushi.id)) return
    if (this.state.money - sushi.price < 0) { alert('You have not enough money')}
    else {
    this.setState({ money: this.state.money - sushi.price})
    sushi['price'] = 'SOLD OUT'
    this.setState({
      eatenSushis: [...this.state.eatenSushis, sushi.id]
    })}
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({ sushis }))
  }

  render() {
    
    const renderSushis = this.state.sushis.slice(this.state.sushiPosition, this.state.sushiPosition + SUSHI_NUM)
    const eatenSushis = renderSushis.filter(sushi => this.state.eatenSushis.includes(sushi.id))
    
    return (
      <div className="app">
        <SushiContainer  addMoney={this.addMoney} 
        addSushis={this.addSushis} 
        eatSushi={this.eatSushi} 
        sushis={renderSushis} 
        eatenSushis={eatenSushis}/>
        <Table money={this.state.money} 
        eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;