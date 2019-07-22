import React, { Component } from 'react'
import Header from '../header/Header';
import ProductList from './ProductList';
import { Provider } from 'react-redux'
import store from '../../store'

export default class Panier extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <h1>Shop</h1>
                </div>
                <div>

                    <Provider store={store}>
                        <ProductList />
                    </Provider>
                </div>

            </div>

        )
    }
}
