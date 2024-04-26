import { useState } from "react";
import './style.scss';
import CreateProductForm from "./CreateProductForm"
import { Product } from './interfaces';
import { useProductsListManager } from './hooks/useProductsListManager';
import { ProductList } from './ProductsList';

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