import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import Dexplorer from './components/Main.js'

import configureStore from './reducers/main.js'
import { Provider } from 'react-redux'

let store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Dexplorer />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
