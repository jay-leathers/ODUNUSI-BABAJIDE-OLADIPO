import { filterReducer } from './productsFilterSlice';
import { cartReducer } from './cartSlice';
import { categoryReducer } from './categoriesSlice';
import { currenciesReducer } from './currencySlice';
import { productsReducer } from './productsSlice';

const reducer = {
    filters: filterReducer,
    cart: cartReducer,
    categories: categoryReducer,
    products: productsReducer,
    currencies: currenciesReducer,
}

export default reducer