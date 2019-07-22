import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    money: 100,
    eatenSushis: []
  }

  addSushis = (sushis) => {
    const newSushis = this.state.sushis.slice(4)
    this.setState({
      sushis: newSushis.concat(sushis)
    })
  }

  addMoney = (money) => {
    this.setState ({
      money: (this.state.money + parseInt(money))
    })
  }

  eatSushi = (sushi) => {
    if (this.state.eatenSushis.includes(sushi)) return
    if (this.state.money - sushi.price < 0) { alert('You have not enough money')}
    else {
    this.setState({ money: this.state.money - sushi.price})
    this.setState({
      eatenSushis: [...this.state.eatenSushis, sushi]
    })}
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({ sushis }))
  }

  render() {
    
    const renderSushis = this.state.sushis.slice(0,4)
    const eatenSushis = renderSushis.filter(sushi => this.state.eatenSushis.includes(sushi))
    
    return (
      <div className="app">
        <SushiContainer  addMoney={this.addMoney} addSushis={this.addSushis} eatSushi={this.eatSushi} sushis={renderSushis} eatenSushis={eatenSushis}/>
        <Table money={this.state.money} eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;