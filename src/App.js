import React, { Component } from 'react';
// import JSON from './db.json'; // JSON dh alias
import { BrowserRouter , Route } from 'react-router-dom';
// components
import Home from './components/home'; 
import Artist from './components/artist';


class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
            <Route exact path='/' component={Home}></Route>
            <Route path='/artist/:artistid' component={Artist}></Route>
        </div>
      </BrowserRouter>
    )
  }

}

export default App;
