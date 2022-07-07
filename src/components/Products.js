import { ProductsData } from "../data/ProductsData"
import ProductsItem from './ProductsItem'
import "./styles/Products.css"

export default function Products() {

  return (
    <div className='products'>
      <div className='container products_container'>
        <header>
          <span className="header_text">Our Products</span>
        </header>
        <hr></hr>
        <div className='products_list'>
          {ProductsData.map((item, index) => (
            <ProductsItem key={index} { ...item } />
          ))}
        </div>
      </div>
    </div>
  )
}
