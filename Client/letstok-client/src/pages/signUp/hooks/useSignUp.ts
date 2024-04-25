import { useState } from 'react';
import axiosInstance from '../../../axios.config';
import { AdminUser } from '../../signIn/interfaces';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
  const [signUpMessage, setSignUpMessage] = useState<string>('');
  
  const navigate = useNavigate();

  const handleCreateUserAdmin = async (newAdminUser: AdminUser) => {
    const createAdminUserResponse = await axiosInstance.post('/admin-users/create-user', newAdminUser);
    if (createAdminUserResponse.status === 201 && createAdminUserResponse.data) {
      setSignUpMessage('Welcome aboard admin...')
      setTimeout(() => {
        navigate('/sign-in')
      }, 2000);
    }
  }

  return {
    handleCreateUserAdmin,
    signUpMessage
  }
}