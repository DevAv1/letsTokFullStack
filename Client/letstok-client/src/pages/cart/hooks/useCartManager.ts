import { useEffect, useRef, useState } from "react"
import { Product } from "../../products/interfaces";
import axiosInstance from '../../../axios.config';
import store from '../../../mobx/store';
import { useNavigate, useParams } from "react-router-dom";

export const useCartManager = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const { userId } = useParams();
  const navigate = useNavigate();
  const activeOrderId = store.activeOrderId;
  const sideEffectExecute = useRef(false);

  const onProductSelect = async (product: Product) => {
    if (activeOrderId) {
      const response = await axiosInstance.post('/users-products', {
        userId,
        orderId: activeOrderId,
        productId: product.id
      })
      if (response.status === 201) {
        setSelectedProducts((prevState: Product[]) => {
          return [
            ...prevState,
            product
          ]
        })
      }
    }
  }


  const onProductsLoad = async () => {
    const response = await axiosInstance.get('products');
    store.products = response.data;
  }

  const onInitOrder = async () => {
      const response = await axiosInstance.post('/orders');
      if (response.status === 201) {
        store.setActiveOrderId(response.data.id);
      }
  }

  const onCheckoutClick = async () => {
    const response = await axiosInstance.put(`/orders/${activeOrderId}`);
    if (response.status === 200) {
      navigate('/users')
    } 
  }

  useEffect(() => {
    if (!sideEffectExecute.current) {
      onInitOrder();
      onProductsLoad();
      sideEffectExecute.current = true;
    }
  }, [])
  
  return {
    cartData: {},
    selectedProducts,
    onProductSelect,
    onCheckoutClick
  }
}