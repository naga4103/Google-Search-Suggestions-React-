// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {inputText: ''}

  onClickedItem = text => {
    console.log(text)
    this.setState({inputText: text})
  }

  onInputValue = event => {
    console.log(event.target.value)
    this.setState({inputText: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {inputText} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(inputText.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="google-search-container">
          <img
            className="image1"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          />
          <div className="search-container">
            <div className="search-input-container">
              <img
                className="search-image"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-box"
                onChange={this.onInputValue}
                value={inputText}
              />
            </div>
            <div className="search-items-container">
              <ul className="ul-container">
                {searchResults.map(eachSuggestion => (
                  <SuggestionItem
                    key={eachSuggestion.id}
                    text={eachSuggestion.suggestion}
                    onClickedItem={this.onClickedItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
