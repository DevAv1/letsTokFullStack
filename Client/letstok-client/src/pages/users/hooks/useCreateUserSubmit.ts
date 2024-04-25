import { User } from "../interfaces"
import axiosInstance from '../../../axios.config';
import store from '../../../mobx/store';
import { useEffect } from "react";

export const useCreateUserForm = (selectedUser?: User, reset?: (formValues?: any) => void, onFormSubmitCallback?: () => void, deleteUserId?: number) => {

  const handleCreateUser = async (user: User) => {
    const response = await axiosInstance.post('/users', user);
    if (response.status === 201) {
      store.addUser(response.data);
      onFormSubmitCallback?.();
      reset?.();
    }
  }

  const handleEditUser = async (user: User) => {
    const response = await axiosInstance.put('/users', user);
    if (response.status === 200) {
      store.editUser(response.data);
      onFormSubmitCallback?.();
      reset?.({ fullName: '', password: '', address: '', paymentMethod: '' });
    }
  }

  const handleDeleteUser = async (userId: number) => {
    const response = await axiosInstance.delete(`/users/${userId}`);
    if (response.status === 200) {
      store.deleteUser(+userId);
    }
  }

  useEffect(() => {
    if (selectedUser) {
      reset?.(selectedUser);
    }
  }, [selectedUser, reset]);

  useEffect(() => {
    if (deleteUserId) handleDeleteUser(deleteUserId);
  }, [deleteUserId])

  return {
    handleCreateUser,
    handleEditUser,
    handleDeleteUser
  }
}