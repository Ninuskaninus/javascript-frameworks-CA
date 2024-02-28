import navCartIcon from '../../img/shopping_bag.png';


function CartIconNav() {
    return <button className='cart-icon-nav'>
        <div className='cart-icon-counter'>
            <p id='cartCounter'>10</p>
        </div>
        <img src={navCartIcon} alt='Cart icon'></img>
    </button>
    
}

export default CartIconNav;