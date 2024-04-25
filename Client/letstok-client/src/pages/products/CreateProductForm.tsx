import { Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { observer } from 'mobx-react';
import { Product } from "./interfaces";
import { useProductsForm } from "./hooks/useProductsForm";

type Inputs = {
  name: string
  brand: string
  price: string
}

interface Props {
  selectedProduct?: Product;
}

export const CreateProductForm: React.FC<Props> = ({ selectedProduct }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const { onSubmit } = useProductsForm(selectedProduct, reset);


  return (
    <div className="product-form">
      <form onSubmit={handleSubmit(onSubmit)} className="create-product-form">
        <span className="form-title">{selectedProduct ? 'Edit product': 'Create product'}</span>
        <div className="input-wrapper">
          <label>Name</label>
          <input {...register("name", { required: true })} />
          {errors.name && <span className="error-validation">This field is required</span>}
        </div>
        <div className="input-wrapper">
          <label>Brand</label>
          <input {...register("brand", { required: true })} />
          {errors.brand && <span className="error-validation">This field is required</span>}
        </div>
        <div className="input-wrapper">
          <label>Price</label>
          <input {...register("price", { required: true })} />
          {errors.price && <span className="error-validation">This field is required</span>}
        </div>
        <Button variant="contained" className="submit-btn" type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default observer(CreateProductForm);