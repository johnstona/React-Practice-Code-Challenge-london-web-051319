import React from 'react'

class AddMoney extends React.Component {
  state = {money: 0}

  handleChange = (event) => {
    this.setState({
    [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {

    this.props.addMoney(this.state.money)
    this.setState({ money: 0 })
  }

  render() {
    return<div>
          <h3>Add some cashola!</h3>

          <input type="number" name="money" value={this.state.money} onChange={this.handleChange} placeholder="How much money" className="input-number"/>
          <button onClick={this.handleSubmit} className="button">Add Cash!</button>
          </div>
  }
}


export default AddMoney