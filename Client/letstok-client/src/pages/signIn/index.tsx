import { useForm, SubmitHandler } from "react-hook-form"
import './style.scss';
import { useAuthenticateUser } from "./hooks/useAuthenticateUser";

type Inputs = {
  username: string
  password: string
}

export const SignIn = () => {
  const { authCredentials, authMessage } = useAuthenticateUser();
  
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm()
  
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    const isFormValid = await trigger();
    if (isFormValid) {
      console.log(isFormValid);
      authCredentials(data)
    }
  }

  return (
    <div className="sign-in">
      <h3>SignIn</h3>
      <form onSubmit={handleSubmit(onSubmit as any)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="input">
          <label>Username</label>
          <input {...register("username")} />
          {errors.username && <span>This field is required</span>}
        </div>
        <div className="input">
          <label>Password</label>
          <input {...register("password", { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <input className="submit-btn" type="submit" /> 
      </form>
      <span className="auth-message">{authMessage}</span>
    </div>
  )
}