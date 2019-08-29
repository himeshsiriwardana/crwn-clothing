import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css'
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
  <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
    </Switch>
    
    </div>
  );
}

export default App;
