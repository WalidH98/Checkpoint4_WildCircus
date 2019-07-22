import React, { Component } from 'react'
import Header from '../header/Header';
import Product from './Product';

export default class Panier extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <h1>Shop</h1>
                </div>
                <div>
                <Product/>
                </div>
            </div>

        )
    }
}
