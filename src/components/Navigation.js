import { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import useShopContext from '../contexts/ShopContext';
import Cart from './Cart';
import "./styles/Navigation.css";

export default function Navigation() {
  const { products } = useShopContext();

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='container navbar_container'>
        <span className='logo'>Shopping</span>
        <button type='button' className='cart_button' onClick={() => setIsCartOpen(true)}>
          <BsCart2 />
          <div className='notification'>{products.length}</div>
        </button>
      </div>
      <Cart isOpen={isCartOpen} setStatus={setIsCartOpen} />
    </div>
  )
}
