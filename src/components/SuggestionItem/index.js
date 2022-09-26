// Write your code here
import {Component} from 'react'

import './index.css'

class SuggestionItem extends Component {
  render() {
    const {text, onClickedItem} = this.props

    function onSuggestionClicked() {
      onClickedItem(text)
    }

    return (
      <li className="suggestion-container">
        <p className="text-para">{text}</p>
        <button
          type="button"
          className="button-class"
          onClick={onSuggestionClicked}
        >
          <img
            className="arrow-image"
            alt="Arrow"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          />
        </button>
      </li>
    )
  }
}

export default SuggestionItem
