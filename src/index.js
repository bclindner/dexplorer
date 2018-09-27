import React from 'react'
import ReactDOM from 'react-dom'
import Dexplorer from './components/Main.js'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Dexplorer />
  , document.getElementById('root'))
registerServiceWorker()
