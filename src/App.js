import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.jsx';
import Shop from './pages/shop/shop.jsx';
import Header from './components/header/header.jsx';

function App() {
  return (
    <div>
    <Header />
    <switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ Shop } />
      </switch>
    </div>
  );
}

export default App;
