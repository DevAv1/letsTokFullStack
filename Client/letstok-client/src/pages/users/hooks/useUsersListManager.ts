import { useEffect } from "react";
import axiosInstance from '../../../axios.config';
import store from '../../../mobx/store';

export const useUsersListManager = () => {
  
  const initialUsersLoad = async () => {
    const response = await axiosInstance.get('users');
    store.users = response.data;
  }

  const handleDeleteUser = async (userId: number) => {
    const response = await axiosInstance.delete(`/users/${userId}`);
    if (response.status === 200) {
      store.deleteUser(+userId);
    }
  }

  useEffect(() => {
    initialUsersLoad();
  }, []);

  return {
    handleDeleteUser
  }
}