import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from '../lib/promiseMiddleware';

import './App.scss';
import Header from '../Header';
import Filters from '../Filters';
import Footer from '../Footer';
import reducer from '../../reducers';

const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <Filters />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
