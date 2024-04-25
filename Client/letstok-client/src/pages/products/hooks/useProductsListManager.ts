import store from "../../../mobx/store";
import axiosInstance from '../../../axios.config';
import { useEffect } from "react";

export const useProductsListManager = () => {
  
  const initialProductsLoad = async () => {
    const response = await axiosInstance.get('products');
    store.products = response.data;
  }

  const handleDeleteProduct = async (productId: number) => {
    const response = await axiosInstance.delete(`/products/${productId}`);
    if (response.status === 200) {
      store.deleteProduct(productId);
    }
  }

  useEffect(() => {
    initialProductsLoad();
  }, []);

  return {
    handleDeleteProduct
  }
}