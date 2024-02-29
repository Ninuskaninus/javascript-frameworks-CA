import React, { useState, useEffect } from 'react';
import navCartIcon from '../../img/shopping_bag.png';
import { CartBtnNav } from './index.styles';

function CartIconNav() {
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        updateCartItemCount();
    }, []);

    const updateCartItemCount = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cartItems.length;
        setItemCount(count);
    };

    return (
        <CartBtnNav className='cart-icon-nav'>
            {itemCount > 0 && (
                <div className='cart-icon-counter'>
                    <p id='cartCounter'>{itemCount}</p>
                </div>
            )}
            <img src={navCartIcon} alt='Cart icon' />
        </CartBtnNav>
    );
}

export default CartIconNav;
