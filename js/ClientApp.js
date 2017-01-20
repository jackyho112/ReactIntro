import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div
var myTitleFactory = React.createFactory(MyTitle)

var MyFirstComponet = React.createClass({
  render: function () {
    return (
      div(null,
        myTitleFactory({ title: 'props are the best', color: 'peru' }),
        myTitleFactory({ title: 'props are the best', color: 'mediumaquamarine' }),
        myTitleFactory({ title: 'props are the best', color: 'rebeccapurple' }),
        myTitleFactory({ title: 'props are the best', color: 'violet' })
      )
    )
  }
})

ReactDOM.render(
  React.createElement(MyFirstComponet),
  document.getElementById('app')
)
