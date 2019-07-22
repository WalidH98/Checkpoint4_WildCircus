import React, { Component } from 'react'
import Header from '../header/Header';
import {Route, BrowserRouter,Switch,Link} from 'react-router-dom'
import './Acceuil.css';
 
 

export default class Acceuil extends Component {
    render() {
        return (
            <div>
                <div><Header />
                <Link  to="/WildCircus"><h1>ENTER</h1></Link>
                <img height='100%' width="100%" src="https://images5.alphacoders.com/947/947062.jpg"/>



                </div>

            </div>
        )
    }
}
