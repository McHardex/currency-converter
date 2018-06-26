// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import { createStore } from 'redux';
// import { reducers } from './reducers/reducers';

// const store = createStore(reducers)
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import registerServiceWorker from './registerServiceWorker'
// import './index.css'

// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'

// import { reducers } from './reducers/reducers'
// import App from './App'

// const store = createStore(reducers)
// ​
// render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { reducers } from './reducers/reducers'
import App from './App'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
  )
)

render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
