import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navigation';
import Books from './redux/books/Books';
import Categories from './Redux/Categories/Categories';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
