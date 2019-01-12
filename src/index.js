import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import Dexplorer from './components/Main.js'
import list from './reducers/list.js'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

let store = createStore(
  list,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Dexplorer />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
