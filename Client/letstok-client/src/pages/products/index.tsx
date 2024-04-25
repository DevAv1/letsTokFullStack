import { useState } from "react";
import './style.scss';
import CreateProductForm from "./CreateProductForm"
import { Product } from "./interfaces";
import ProductList from './ProductsList';
import { useProductsListManager } from "./hooks/useProductsListManager";

export const Products = () => {
    const [ selectedProduct, setSelectedProduct ] = useState<Product>();
    const { handleDeleteProduct } = useProductsListManager();
    return (
        <div className="products-page">
            <CreateProductForm
                selectedProduct={selectedProduct}
            />
            <ProductList
                onEditClick={(product: Product) => setSelectedProduct(product)}
                onDeleteClick={(productId: number) => handleDeleteProduct(productId)}
            />
        </div>
    )
}