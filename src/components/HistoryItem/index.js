import './index.css'

const HistoryItem = props => {
  const {historyDetails, updateSearchHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    updateSearchHistory(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <div>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button data-testid="delete" type="button" onClick={onClickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
