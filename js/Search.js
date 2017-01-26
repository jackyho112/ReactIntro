import React from 'react'
import { connect } from 'react-redux'
import ShowCard from './ShowCard'
import Header from './Header'
import { matchShowWithSearchTerm } from './searchHelpers'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    })),

    searchTerm: string
  },

  render () {
    const matchShow = (show) => matchShowWithSearchTerm(this.props.searchTerm, show)

    return (
      <div className='search'>
        <Header showSearch />

        <div>
          {
            this.props.shows
              .filter(matchShow)
              .map((show) => {
                return (
                  <ShowCard key={show.imdbID} {...show} />
                )
              })
          }
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export const Unwrapped = Search

export default connect(mapStateToProps)(Search)
