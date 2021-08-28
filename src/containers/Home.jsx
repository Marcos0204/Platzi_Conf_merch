import React from 'react';
import Products from '../components/Products';
import InitialState from '../hooks/InitialState';

const Home = () => {
    return (
        <Products products={InitialState.products} />
    )
}

export default Home
