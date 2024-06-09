// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amt: 2000}

  onClickAmt = value => {
    this.setState(prevState => ({amt: prevState.amt - value}))
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
            <p className="bal-heading">Your Balance</p>
            <p className="bal-content">
              {amt} <br /> <p className="bal-para">In Rupess</p>
            </p>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="sum-heading">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul-con">
            {denominationsList.map(each => (
              <DenominationItem
                onClickAmt={this.onClickAmt}
                key={each.id}
                item={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
