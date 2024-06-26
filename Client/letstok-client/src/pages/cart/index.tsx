import './style.scss';
import { useCartManager } from './hooks/useCartManager';
import { Product } from '../products/interfaces';
import { CartSummary } from './CartSummary';
import { observer } from 'mobx-react';
import { CartItems } from './CartItems';
import { ProductsList } from './ProductsList';

export const Cart = observer(() => {
  const { onProductSelect, selectedProducts, onCheckoutClick } =
    useCartManager();

  return (
    <div className="cart-page">
      <div className="cart-shopping-area">
        <ProductsList
          onProductSelect={(product: Product) => onProductSelect(product)}
        />
        <CartItems selectedProducts={selectedProducts} />
      </div>
      <div className="cart-summary-area">
        <CartSummary
          selectedProducts={selectedProducts}
          onCheckoutClick={onCheckoutClick}
        />
      </div>
    </div>
  );
});
