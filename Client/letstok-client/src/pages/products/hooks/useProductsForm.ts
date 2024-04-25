import { useEffect } from "react";
import { Product } from "../interfaces";
import axiosInstance from '../../../axios.config';
import store from '../../../mobx/store';

export const useProductsForm = (selectedProduct?: Product, reset?: (formValues?: Product) => void) => {
  
  const onCreateProductSubmit = async (newProduct: any) => {
    const response = await axiosInstance.post('/products', newProduct)
    if (response.status === 201) {
      store.addProduct(response.data);
      reset?.();
    }
  };

  const onEditProductSubmit = async (updatedProduct: Product) => {
    const response = await axiosInstance.put('/products', updatedProduct);
    if (response.status === 200) {
      store.editProduct(response.data);
      reset?.({ name: '', brand: '', price: '' } as Product);
    }
  }

  const onSubmit = (formValues: any) => {
    if (selectedProduct) {
      onEditProductSubmit(formValues);
    } else {
      onCreateProductSubmit(formValues);
    }
  
  }

  useEffect(() => {
    if (selectedProduct) reset?.(selectedProduct);
  }, [selectedProduct, reset])


  return {
    onSubmit
  }
}