import { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {
  ApolloProvider,
} from '@apollo/client';

import client from './apollo/client'

import HomePage from './pages/HomePage';
import CartPage from './pages/cartPage/CartPage.jsx';
import ProductPage from './pages/productPage/ProductPage.jsx';
import CartModal from './components/cartModal/CartModal.jsx';
import Header from './components/Header/Header';
import { connect } from 'react-redux'
import classes from './App.module.css';
import { changeCartToggleStatus } from './redux/slices/cartSlice'
import { changeCurrencyToggleStatus } from './redux/slices/currencySlice'

export class App extends Component {

  //if the primary state is true and the other one is false then leave it like that, else if it is true then make it false
  onToggleCart = () => {
    this.props.changeCartToggleStatus(!this.props.cart.cartToggleStatus)
    this.props.changeCurrencyToggleStatus(false)
  }
  onToggleCurrency = () => {
    this.props.changeCartToggleStatus(false)
    this.props.changeCurrencyToggleStatus(!this.props.currencies.currencyToggleStatus)
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className={classes.App}>
          <BrowserRouter>
            <Header cartToggleStatus={this.props.cart.cartToggleStatus} currencyToggleStatus={this.props.currencies.currencyToggleStatus} onToggleCurrency={this.onToggleCurrency} onToggleCart={this.onToggleCart} />
            <CartModal onToggleCart={this.onToggleCart} cartToggleStatus={this.props.cart.cartToggleStatus} />
            <main>
              <Routes>
                <Route path="/cart" element={<CartPage />} />
                <Route path="/products/:productId" element={<ProductPage />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      </ApolloProvider>
    );
  }
}



export const mapStateToProps = (state) => ({
  cart: state.cart,
  currencies: state.currencies
})

export default connect(mapStateToProps, {
  changeCartToggleStatus,
  changeCurrencyToggleStatus
})(App)