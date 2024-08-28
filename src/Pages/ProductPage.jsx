import React, { Fragment } from 'react';
import NavBar from '../Components/NavBar';
import NewProducts from '../Components/NewProducts';

const ProductPage = () => {
    return (
        <Fragment>
            <NavBar />
            <NewProducts />
        </Fragment>
    );
}

export default ProductPage;