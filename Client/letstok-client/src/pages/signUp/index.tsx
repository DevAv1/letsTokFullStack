import { useForm, SubmitHandler } from "react-hook-form"
import './style.scss';
import { useSignUp } from "./hooks/useSignUp";

type Inputs = {
  username: string
  password: string
  confirmPassword: string
}

export const SignUp = () => {
  const { handleCreateUserAdmin, signUpMessage } = useSignUp();
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm()

  const passwords = watch(['password', 'confirmPassword']);
  const passwordsMatchValidation = passwords[0] === passwords[1];

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const isFormValid = await trigger();
    if (isFormValid && passwordsMatchValidation) {
      handleCreateUserAdmin(data);
    }
  }

  
  return (
    <div className="sign-up">
      <h3>SignUp</h3>
      <form onSubmit={handleSubmit(onSubmit as any)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="input">
          <label>Username</label>
          <input {...register('username')} />
          {errors.username && <span>This field is required</span>}
        </div>
        <div className="input">
          <label>Password</label>
          <input {...register('password', { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className="input">
          <label>Confirm password</label>
          <input {...register('confirmPassword', { required: true })} />
          {errors.confirmPassword && <span>This field is required</span>}
          {!passwordsMatchValidation && <span>Passwords has to match</span>}
        </div>
        <input className="submit-btn" type="submit" />
      </form>
      <span className="sign-up-message">{signUpMessage}</span>
    </div>
  );
}