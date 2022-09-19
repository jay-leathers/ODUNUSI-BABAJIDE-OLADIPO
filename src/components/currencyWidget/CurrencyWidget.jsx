import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeCurrency } from '../../redux/slices/currencySlice';

import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

import classes from './CurrencyWidget.module.css';

class CurrencyWidget extends Component {

   render() {
      const { currencies, changeCurrency, onToggleCurrency } = this.props;
      const options = currencies.currencies;
      const items = currencies.currencyToggleStatus ? (
         <ul className={classes.list}>
            {options.map(value => {
               if (String(value.symbol).trim() === String(currencies.currentCurrencies).trim()) console.log(currencies.currentCurrencies)
               return <li className={classes.item}
                  onClick={() => {
                  onToggleCurrency()
                     changeCurrency(value.symbol)
                  }}
                  key={value.symbol}> {value.symbol} {value.label}</li>
            })}
         </ul>
      ) : null;

      return (
         <div className={classes.select}>
            <div className={classes.input} onClick={() => { onToggleCurrency() }}>
               <span className={classes.current}>{currencies.currentCurrency}</span>
               <Arrow className={currencies.currencyToggleStatus ? `${classes.arrow} ${classes.active}` : `${classes.arrow}`} />
            </div>
            <div className={classes.dropdown}>
               {items}
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   currencies: state.currencies
})

export default connect(mapStateToProps, {
   changeCurrency
})(CurrencyWidget);

CurrencyWidget.propTypes = {
   currencies: PropTypes.object.isRequired,
   changeCurrency: PropTypes.func.isRequired,
}