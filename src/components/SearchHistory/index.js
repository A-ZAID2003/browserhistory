import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class SearchHistory extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
  }

  updateSearchHistory = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({historyList: updatedHistoryList})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchResults = initialHistoryList.filter(eachItem =>
      eachItem.id.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              type="search"
              placeholder="Search History"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>

        <ul>
          {searchResults.map(eachItem => (
            <HistoryItem
              key={eachItem.id}
              historyDetails={eachItem}
              updateSearchHistory={this.updateSearchHistory}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchHistory
