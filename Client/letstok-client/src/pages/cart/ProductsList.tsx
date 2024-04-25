import { observer } from "mobx-react";
import store from '../../mobx/store';
import { Product } from "../products/interfaces";

interface Props {
  onProductSelect: (product: Product) => void;
}
const ProductsList: React.FC<Props> = ({ onProductSelect }) => {
  const { products } = store;
  return (
    <div className="products-shelf">
      <h3>Products List:</h3>
    {
      products.map((product: Product) => {
        return (
          <div className="cart-product" onClick={() => onProductSelect(product)} key={product.id}>
            <div className="product-row">
              <span className="p-name">{product.name}</span>
              <span className="p-brand">{product.brand}</span>
              <span className="p-price">{product.price}$</span>
            </div>
          </div>
        )
      })
    }
  </div>
  )
}

export default observer(ProductsList);