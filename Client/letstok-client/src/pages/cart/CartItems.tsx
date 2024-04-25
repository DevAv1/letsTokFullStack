import { observer } from "mobx-react"
import { Product } from "../products/interfaces"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

interface Props {
  selectedProducts: Product[]
}

export const CartItems: React.FC<Props> = ({ selectedProducts }) => {
  return (
    <div className="cart-items">
      <h3>Cart:</h3>
      {
        selectedProducts.map((product: Product, index: number) => {
          return (
            <div className="cart-product" key={`${product.id}_${index}`}>
              <div className="cart-row">
                <span className="p-name">{product.name}</span>
                <span className="p-brand">{product.brand}</span>
                <span className="p-price">{product.price}$</span>
              </div>
              <RemoveCircleOutlineIcon sx={{ fontSize: 16 }}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default observer(CartItems)