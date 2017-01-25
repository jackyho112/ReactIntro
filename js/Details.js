import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getOMDBDetails } from './actionCreators'
const { shape, string, func } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      year: string,
      poster: string,
      trailer: string,
      description: string,
      imdbID: string
    }),

    omdbData: shape({
      imdbID: string
    }),

    dispatchGetOMDBDetails: func
  },

  componentDidMount () {
    if (!this.props.omdbData.imdbRating) {
      this.props.dispatchGetOMDBDetails(this.props.show.imdbID)
    }
  },

  render () {
    const { title, description, year, poster, trailer } = this.props.show

    let rating

    if (this.props.omdbData.imdbRating) {
      rating = <h3>{this.props.omdbData.imdbRating}</h3>
    } else {
      rating = <img src='/public/img/loading.png' alt='loading' />
    }

    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>

        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;showinfo=0`}
            frameBorder='0'
            allowFullScreen />
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    omdbData: state.omdbData[ownProps.show.imdbID] || {}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetOMDBDetails (imdbID) {
      dispatch(getOMDBDetails(imdbID))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
