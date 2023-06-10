// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(previousState => {
      if (previousState.count < 200) {
        return {count: previousState.count + 10}
      }
      return {count: previousState.count}
    })
  }

  onDecrement = () => {
    this.setState(previousState => {
      if (previousState.count > 0) {
        return {count: previousState.count - 10}
      }
      return {count: previousState.count}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image"
          />
          <h1 className="sub-heading">Speed is {count}mph</h1>
          <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              onClick={this.onIncrement}
              type="button"
              className="button-1"
            >
              Accelerate
            </button>
            <button
              onClick={this.onDecrement}
              type="button"
              className="button-2"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
