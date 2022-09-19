import { Component } from 'react';

import ProductsList from '../components/productsList/ProductsList';

class HomePage extends Component {
   render() {
      return (
         <>
            <ProductsList />
         </>
      );
   }
}

export default HomePage;