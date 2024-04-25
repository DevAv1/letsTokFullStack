import { useMemo } from 'react';
import { Product } from '../products/interfaces';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

interface Props {
  selectedProducts: Product[];
  onCheckoutClick: () => void;
}

export const CartSummary: React.FC<Props> = ({ selectedProducts, onCheckoutClick }) => {
  const totalSum = useMemo(() => {
    return selectedProducts.reduce((acc: any, item: Product) => {
      return acc + +item.price;
    }, 0);
  }, [selectedProducts]);

  return (
    <div className="cart-summary">
      <div className="sum-row">
        <span className="cart-sum-label">Total price:</span>
        <span>{totalSum.toLocaleString()}</span>
      </div>
      <div className="checkout-btn" onClick={() => onCheckoutClick()}>
        Checkout
        <ShoppingCartCheckoutIcon sx={{ fontSize: 22 }}/>
      </div>
    </div>
  )
}