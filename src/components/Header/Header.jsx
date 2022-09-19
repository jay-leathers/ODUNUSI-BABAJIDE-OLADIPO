import { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CurrencyWidget from '../currencyWidget/CurrencyWidget';
import ProductsFilter from '../productsFilter/ProductsFilter';
import CartButton from '../cartButton/CartButton';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

import classes from './Header.module.css';

class Header extends Component {
   render() {
      return (
         <header className={classes.header}>
            <ProductsFilter />

            <Link to='/'><Logo /></Link>

            <div className={classes.actions}>
               <CurrencyWidget cartToggleStatus={this.props.cartToggleStatus} currencyToggleStatus={this.props.currencyToggleStatus} onToggleCurrency={this.props.onToggleCurrency}/>
               <CartButton onToggleCart={this.props.onToggleCart} />
            </div>
         </header>
      );
   }
}

export default Header;

Header.propTypes = {
   onToggleCart: PropTypes.func.isRequired,
}