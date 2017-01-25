import React from 'react'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
import { connect } from 'react-redux'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.props.dispatchSetSearchTerm(event.target.value)
  }

  render () {
    let utilSpace

    if (this.props.showSearch) {
      utilSpace = <input value={this.props.searchTerm} type='text' placeholder='Search'
        onChange={this.handleSearchTermChange} />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }

    return (
      <header>
        <h1>
          <Link to='/'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  dispatchSetSearchTerm: func,
  showSearch: bool,
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
