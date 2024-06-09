// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amt: 2000}

  onClickAmt = value => {
    this.setState(prevState => ({amt: prevState.amt + value}))
  }

  render() {
    const {amt} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="logo-name-container">
            <p className="logo">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="bal-con">
            <h1 className="bal-heading">Your Balance</h1>
            <h1 className="bal-content">
              {amt} <br /> <p className="bal-para">In Rupess</p>
            </h1>
          </div>
          <h1 className="withdraw-heading">Withdraw</h1>
          <h1 className="sum-heading">CHOOSE SUM(IN RUPEES)</h1>
          <ul className="ul-con">
            {denominationsList.map(each => (
              <DenominationItem onClickAmt={this.onClickAmt} item={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
