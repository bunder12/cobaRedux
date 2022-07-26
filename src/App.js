import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './counter/counter'
import Component from './counter/component'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter/>
        <Component/>
      </div>
    </Provider>
  )
}

export default App