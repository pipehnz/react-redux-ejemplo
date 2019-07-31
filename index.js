import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './style.css'

import Visualizador from './Visualizador'

import { store } from './store'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
      <div className="container">
        <div className="row">
          <div className="col">
            <Visualizador />
          </div>
        </div>
      </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'))