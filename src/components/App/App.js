import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.scss';
import Header from '../Header';
import Filters from '../Filters';
import Footer from '../Footer';
import * as reducers from '../../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Filters />
        <Footer />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
