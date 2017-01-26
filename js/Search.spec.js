// remember to clear the cache
import React from 'react'
import { Provider } from 'react-redux'
import Search, { Unwrapped as UnwrappedSearch } from './Search'
import ShowCard from './ShowCard'
import preload from '../public/data.json'
import { shallow, render } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import store from './store'
import { setSearchTerm } from './actionCreators'
import { matchShowWithSearchTerm } from './searchHelpers'

test('Search snapshot test', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Search should render a ShowCard for each show', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house'
  store.dispatch(setSearchTerm(searchWord))
  const component = render(
    <Provider store={store}>
      <Search shows={preload.shows} />
    </Provider>
  )

  const matchShow = (show) => matchShowWithSearchTerm(searchWord, show)

  const showCount = preload.shows.filter(matchShow).length

  expect(component.find('.show-card').length).toEqual(showCount)
})
