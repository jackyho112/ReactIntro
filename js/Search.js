import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preload.shows.map((show) => {
          return (
            <ShowCard show={show} key={show.imdbID} />
          )
        })}
      </div>
    )
  }
})

export default Search
