import reducers from './reducers'

test('reducers', () => {
  let state
  state = reducers(
    {
      searchTerm: '',
      omdbData: {}
    },
    {
      type: 'SET_SEARCH_TERM',
      searchTerm: 'house'
    }
  )

  expect(state).toEqual({searchTerm: 'house', omdbData: {}})
})

test('SET_SEARCH_TERM', () => {
  let state
  state = reducers(undefined, {})
  expect(state).toEqual({ searchTerm:'', omdbData: {} })
})

test('ADD_OMDB_DATA', () => {
  let state;
  state = reducers({searchTerm:'',omdbData:{}}, {type:'ADD_OMDB_DATA',imdbId:'tt3322312',omdbData:{Title:'Daredevil',Year:'2015–',Rated:'TV-MA',Released:'10 Apr 2015',Runtime:'54 min',Genre:'Action, Crime, Drama',Director:'N/A',Writer:'Drew Goddard',Actors:'Charlie Cox, Deborah Ann Woll, Elden Henson, Vincent D\'Onofrio',Plot:'Matt Murdock, with his other senses superhumanly enhanced, fights crime as a blind lawyer by day, and vigilante by night.',Language:'English',Country:'USA',Awards:'Nominated for 5 Primetime Emmys. Another 2 wins & 12 nominations.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BNzUwMDEyMTIxM15BMl5BanBnXkFtZTgwNDU3OTYyODE@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'8.8',imdbVotes:'234,659',imdbID:'tt3322312',Type:'series',totalSeasons:'2',Response:'True'}});
  expect(state).toEqual({searchTerm:'',omdbData:{tt3322312:{Title:'Daredevil',Year:'2015–',Rated:'TV-MA',Released:'10 Apr 2015',Runtime:'54 min',Genre:'Action, Crime, Drama',Director:'N/A',Writer:'Drew Goddard',Actors:'Charlie Cox, Deborah Ann Woll, Elden Henson, Vincent D\'Onofrio',Plot:'Matt Murdock, with his other senses superhumanly enhanced, fights crime as a blind lawyer by day, and vigilante by night.',Language:'English',Country:'USA',Awards:'Nominated for 5 Primetime Emmys. Another 2 wins & 12 nominations.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BNzUwMDEyMTIxM15BMl5BanBnXkFtZTgwNDU3OTYyODE@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'8.8',imdbVotes:'234,659',imdbID:'tt3322312',Type:'series',totalSeasons:'2',Response:'True'}}});
});
