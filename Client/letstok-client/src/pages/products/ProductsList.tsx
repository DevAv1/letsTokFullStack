import './style.scss';
import { observer } from "mobx-react";
import Store from '../../mobx/store';
import { Product } from "./interfaces";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, MenuItem, Slider, TextField } from '@mui/material';
import { useProductsFilterPicklist } from './hooks/useProductsFilterPicklist';

interface Props {
  onEditClick: (product: Product) => void;
  onDeleteClick: (productId: number) => void;
}

const ProductList: React.FC<Props> = ({ onDeleteClick, onEditClick }) => {
    const productsFromStore = Store.products;

    const {
        productsPicklists,
        priceRange,
        handlePriceChange,
        range, handleBrandFilter,
        filteredProducts,
        handleProductNameFilter,
        handleResetFilter,
        brandNameFilterValue,
        productNameFilterValue,
    } = useProductsFilterPicklist(productsFromStore);

    return (
        <div className="products-list-view">
            <div className="product-filter-actions">
                <TextField
                    id="outlined-select-currency"
                    select
                    label="ProductNames"
                    helperText="Please select your currency"
                    onChange={(e: any) => handleProductNameFilter(e.target.value)}
                    value={productNameFilterValue}
                >
                {productsPicklists?.productNames?.map((option) => (
                    <MenuItem key={option.productName} value={option.productName}>
                    {option.productName}
                    </MenuItem>
                ))}
                </TextField>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Brands"
                    helperText="Please select your currency"
                    onChange={(e: any) => handleBrandFilter(e.target.value)}
                    value={brandNameFilterValue}

                >
                {productsPicklists?.productBrands?.map((option) => (
                    <MenuItem key={option.productName} value={option.productName}>
                    {option.productName}
                    </MenuItem>
                ))}
                </TextField>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={priceRange}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    min={range[0]}
                    max={range[1]}
                />
                <Button variant="outlined" onClick={() => handleResetFilter()}>
                    Reset Search
                </Button>
            </div>
            <div className="products-list-container">
                {
                    filteredProducts?.map((product: Product) => {
                        return (
                            <div className="product-box" key={product.id}>
                                <div className="product-details">
                                    <div className="product-details-row">
                                        <span className="detail-label">name:</span>
                                        <span className="detail-value">{product.name}</span>
                                    </div>
                                    <div className="product-details-row">
                                        <span className="detail-label">brand:</span>
                                        <span className="detail-value">{product.brand}</span>
                                    </div>
                                    <div className="product-details-row">
                                        <span className="detail-label">Price:</span>
                                        <span className="detail-value">{`${product.price} $`}</span>
                                    </div>
                                </div>
                                <div className="product-actions">
                                    <DeleteIcon sx={{ fontSize: 18 }} color="primary" className="action-icon" onClick={() => onDeleteClick(product.id as number)}/>
                                    <EditIcon sx={{ fontSize: 18 }} color="primary" className="action-icon" onClick={() => onEditClick(product)}/>
                                </div>
                            </div>
                        )
                    })
                }   
            </div>
    </div>
  )
}

export default observer(ProductList);