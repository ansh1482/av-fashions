import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.jsx';
import Shop from './pages/shop/shop.jsx';

function App() {
  return (
    <div>
    <switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ Shop } />
      </switch>
    </div>
  );
}

export default App;
