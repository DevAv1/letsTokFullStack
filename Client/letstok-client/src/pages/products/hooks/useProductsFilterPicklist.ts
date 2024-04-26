import { useEffect, useMemo, useState } from "react";
import { Product } from "../interfaces";

export const useProductsFilterPicklist = (productsFromStore?: Product[]) => {
  const [filteredProducts, setFilteredProduct] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([400, 800]);
  const [range, setRange] = useState<number[]>([]);
  const [brandNameFilterValue, setBrandNameFilterValue] = useState<string>('');
  const [productNameFilterValue, setProductNameFilterValue] =
    useState<string>('');

  const getInitialPriceRange = () => {
    const priceList = productsFromStore?.map((item: any) => +item.price) || [];
    const minValue = Math.min(...priceList);
    const maxValue = Math.max(...priceList);
    return [minValue, maxValue];
  };

  useEffect(() => {
    if (!productsFromStore) return;
    setFilteredProduct(productsFromStore);
    const priceRange = getInitialPriceRange();
    setPriceRange(priceRange);
    setRange(priceRange);
  }, [productsFromStore]);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
    handlePriceRangeFilter(newValue as number[]);
  };

  const formattingPicklistDistinct = (array: any) => {
    const distinctTemp = new Set(array.map((item) => item));
    const picklistFormat = [...distinctTemp].map((item: any) => {
      return {
        productName: item,
        value: item,
      };
    });
    return picklistFormat;
  };

  const productsPicklists = useMemo(() => {
    if (productsFromStore) {
      const productBrands = formattingPicklistDistinct(
        productsFromStore.map((product: Product) => product.brand),
      );

      const productNames = formattingPicklistDistinct(
        productsFromStore.map((product: Product) => product.name),
      );
      return {
        productBrands,
        productNames,
      };
    }
  }, [productsFromStore]);

  const handleBrandFilter = (brandName: string) => {
    const filteredResult = productsFromStore?.filter(
      (p: Product) => p.brand === brandName,
    );
    setBrandNameFilterValue(brandName);
    setFilteredProduct(filteredResult || []);
  };

  const handleProductNameFilter = (productName: string) => {
    const filteredResult = productsFromStore?.filter(
      (p: Product) => p.name === productName,
    );
    setProductNameFilterValue(productName);
    setFilteredProduct(filteredResult || []);
  };

  const handlePriceRangeFilter = (priceRange: number[]) => {
    const filteredResult = productsFromStore?.filter((p: Product) => +p.price > priceRange[0] && +p.price < priceRange[1])
    setFilteredProduct(filteredResult ||[]);
  }

  const handleResetFilter = () => {
    setProductNameFilterValue('');
    setBrandNameFilterValue('');
    setFilteredProduct(productsFromStore || []);
  }

  return {
    productsPicklists,
    priceRange,
    handlePriceChange,
    getInitialPriceRange,
    range,
    handleBrandFilter,
    handleProductNameFilter,
    handlePriceRangeFilter,
    handleResetFilter,
    brandNameFilterValue,
    productNameFilterValue,
    filteredProducts
  }
}