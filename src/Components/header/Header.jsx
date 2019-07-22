import React from 'react';
import './Header.css';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'


export default class Header extends React.Component {

  render() {
    return (


      <div id="navbar-container">

        <div>


          <div id="logo">
            <img onDoubleClick={() => window.open("https://codepen.io/walid-hamici/full/maQJGK")} src="https://i.ya-webdesign.com/images/pennywise-the-clown-drawing-png-vector.png" width="100" height="100  " alt="Logo" />
            <Link to="/"> <h1>WILD CIRCUS</h1></Link>
            <Link to="/Panier"><img className="cart" src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/cart512x512.png" width="100" height="100  " alt="Logo" /></Link>
          </div>

        </div>

      </div>


    );
  }
}
