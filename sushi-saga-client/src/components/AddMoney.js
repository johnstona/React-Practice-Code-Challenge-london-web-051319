import React from 'react'

class AddMoney extends React.Component {
  state = {money: 0}

  handleChange = (event) => {
    this.setState({
    [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addMoney(this.state.money)
  }

  render() {
    return <form onSubmit={this.handleSubmit} className="money-form">
          <h3>Add some cashola!</h3>

          <input type="number" name="money" value={this.state.money} onChange={this.handleChange} placeholder="How much money" className="input-number"/>
          <input type="submit" name="submit" value="add cash" className="submit"/>
          </form>
    
  }
}


export default AddMoney