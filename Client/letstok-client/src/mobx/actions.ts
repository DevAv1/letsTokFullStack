import { Product } from "../pages/products/interfaces";
import { User } from "../pages/users/interfaces"

export const addUser = (users: User[], user: User) => {
  return [
    ...users,
    user
  ]
}

export const editUser = (users: User[], editedUser: User) => {
  const updatedUsers = users.map((user: User) => {
    if (user.id === editedUser.id) return editedUser
    return user;
  });
  return updatedUsers;
}

export const deleteUser = (users: User[], id: number) => {
  return users.filter((user: User) => user.id !== id);
}

export const addProduct = (products: Product[], newProduct: Product) => {
  return [
    ...products,
    newProduct
  ]
}

export const editProduct = (products: Product[], updatedProduct: Product) => {
  const updatedProducts = products.map((product: Product) => {
    if (product.id === updatedProduct.id) return updatedProduct
    return product;
  });
  return updatedProducts;
}

export const deleteProduct = (products: Product[], productId: number) => {
  return products.filter((product: Product) => product.id !== productId)
}