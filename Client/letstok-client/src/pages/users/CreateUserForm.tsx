import { Button } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { observer } from 'mobx-react';
import { useCreateUserForm } from "./hooks/useCreateUserSubmit";
import { User } from "./interfaces";

type Inputs = {
  fullName: string
  address: string
  paymentMethod: 'CC' | 'Cash' | ''
  password: string;
}

interface Props {
  selectedUser?: User;
  deleteUserId?: number;
  onFormSubmitCallback?: () => void;
}

export const CreateUserForm: React.FC<Props> = ({ selectedUser, onFormSubmitCallback, deleteUserId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const { handleCreateUser, handleEditUser } = useCreateUserForm(selectedUser, reset, onFormSubmitCallback, deleteUserId);
  
  const onSubmit: SubmitHandler<Inputs> = (formValues: any) => {
    if (selectedUser) {
      handleEditUser(formValues);
    } else {
      handleCreateUser(formValues)
    }
  }

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit(onSubmit)} className="create-user-form">
        <span className="form-title">{selectedUser ? 'Edit user': 'Create User'}</span>
        <div className="input-wrapper">
          <label>FullName</label>
          <input {...register("fullName", { required: true })} />
          {errors.fullName && <span className="error-validation">This field is required</span>}
        </div>
        <div className="input-wrapper">
          <label>Address</label>
          <input {...register("address", { required: true })} />
          {errors.address && <span className="error-validation">This field is required</span>}
        </div>
        <div className="input-wrapper">
          <label>Password</label>
          <input {...register("password", { required: true })} />
          {errors.password && <span className="error-validation">This field is required</span>}
        </div>
        <div className="input-wrapper">
          <label>PaymentMethod</label>
          <input {...register("paymentMethod", { required: true })} />
          {errors.paymentMethod && <span className="error-validation">This field is required</span>}
        </div>
        <Button variant="contained" className="submit-btn" type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default observer(CreateUserForm);