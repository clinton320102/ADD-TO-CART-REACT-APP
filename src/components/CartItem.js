import { BsFillTrashFill } from "react-icons/bs";
import useShopContext from '../contexts/ShopContext';

export default function CartItem({ name, price, image }) {
  const { removeFromCart } = useShopContext(); 
  const product = { name, price, image };

  const handleClick = () => {
    removeFromCart(product);
  }

  return (
    <div className='cart_item'>
      <div className='cart_item_info'>
        <img className="image" src={image} alt={name} />
        <div className='info'>
          <span className='name'>{name}</span>
          <span className='price'>&#8369;{price}</span>
        </div>
      </div>
      <div className='remove_btn' onClick={handleClick}>
        <BsFillTrashFill />
      </div>
    </div>
  )
}
