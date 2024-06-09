// Write your code here
import './index.css'

const DenominationItem = props => {
  const {item, onClickAmt} = props
  const {value} = item

  const onClickBtns = () => {
    onClickAmt(value)
  }

  return (
    <li className="list-item-con">
      <button onClick={onClickBtns} className="list-btn" type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
