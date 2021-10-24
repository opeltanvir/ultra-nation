import React from 'react';
import Country from '../Country/Country';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation =0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation=totalPopulation +country.population;

        
    }
    return (
        <div>
            <h2>this is Cart: {cart.length}</h2>
            <p>total population : {totalPopulation}</p>
        </div>
    );
};

export default Cart;