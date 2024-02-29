import navCartIcon from '../../img/shopping_bag.png';
import { CartBtnNav } from './index.styles';

function CartIconNav() {
    return <CartBtnNav className='cart-icon-nav'>
        <div className='cart-icon-counter'>
            <p id='cartCounter'>10</p>
        </div>
        <img src={navCartIcon} alt='Cart icon'></img>
    </CartBtnNav>
    
}

export default CartIconNav;