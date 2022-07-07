import { useEffect, useState } from "react";
import useShopContext from "../contexts/ShopContext";

export default function ProductsItem({ name, price, image }) {
  const { products, addToCart } = useShopContext();
  const [productInCart, setProductInCart] = useState();

  useEffect(() => {
    const productIsInCart = products.find(product => product.name === name);

    if(productIsInCart) {
      setProductInCart(true)
    } else {
      setProductInCart(false)
    }
  }, [products, name]);

  const handleClick = () => {
    const product = { name, price, image };

    if(!productInCart) {
      addToCart(product);
    }
  }

  return (
    <div className='products_card'>
      <img className='image' src={image} alt={name} />
      <div className="bottom">
        <div className='info'>
          <span className='name'>{name}</span>
          <span className='price'>&#8369;{price}</span>
        </div>
        <button onClick={handleClick} className={productInCart ? "product-in-cart_btn" : "add-to-cart_btn"} type="button">{productInCart ? "added to cart ✔" : "add to cart"}</button>
      </div>
    </div>
  )
}
