import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ReactComponent as Cart } from '../../assets/icons/cart.svg';

import classes from './cartButton.module.css';

class CartButton extends Component {   
   render() {
      const { onToggleCart, cart } = this.props;

      return (
         <div className={classes.cart} onClick={() => onToggleCart()}>
            <Cart /> 

            <span className={classes.counter}>
               {cart.totalCartQuantity}
            </span>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   cart: state.cart
});
export default connect(mapStateToProps)(CartButton);

CartButton.propTypes = {
   onToggleCart: PropTypes.func.isRequired,
   cart: PropTypes.object.isRequired,
}