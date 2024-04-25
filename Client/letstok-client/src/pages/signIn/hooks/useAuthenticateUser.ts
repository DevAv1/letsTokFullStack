import { AdminUser } from "../interfaces"
import axiosInstance from '../../../axios.config';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import store from '../../../mobx/store';

export const useAuthenticateUser = () => {
  const [authMessage, setAuthMessage] = useState<string>('');
  const navigate = useNavigate();

  const authCredentials = async (userCredentials: AdminUser) => {
    const adminUserResponse = await axiosInstance.post('/admin-users/auth-user', userCredentials);
    if (adminUserResponse.status === 201 && adminUserResponse.data) {
      if (adminUserResponse.data) console.log(adminUserResponse.data);
      setAuthMessage(`Welcome ${adminUserResponse.data.username}, You are being forwarded to the system`);
      setTimeout(() => {
        navigate('/users')
        store.isAuthenticated = !!adminUserResponse.data
      }, 2000);
    } else {
      setAuthMessage('Possible wrong credentials, try again.')
    }
  }


  return {
    authCredentials,
    authMessage
  }
}