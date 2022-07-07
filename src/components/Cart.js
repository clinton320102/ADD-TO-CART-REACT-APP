import { FaTimes } from "react-icons/fa";
import useShopContext from '../contexts/ShopContext';
import CartItem from './CartItem';
import "./styles/Cart.css";

export default function Cart({isOpen, setStatus}) {
  const { products, total } = useShopContext();

  return (
    <div className={isOpen? "cart active" : "cart"}>
      <div className='cart_container'>
        <div className="close_cart_btn" onClick={() => setStatus(false)}>
          <FaTimes />
        </div>
        <header>
          <span className='cart_msg'>Your cart total is &#8369;{total}.00</span>
        </header>
        <hr></hr>
        {
          products.length > 0 ? 
            <div className='cart_list'>
              {products.map((item, index) => (
                <CartItem key={index} { ...item } />
              ))}
            </div> 
            : 
            <span>Your cart is empty!</span>
        }
      </div>
    </div>
  )
}
