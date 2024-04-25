import { makeAutoObservable } from "mobx";
import { User } from "../pages/users/interfaces";
import { addUser, deleteUser, editUser, addProduct, deleteProduct, editProduct } from "./actions";
import { Product } from "../pages/products/interfaces";
import { Cart } from "../pages/cart/interfaces";

class Store {
  users: User[] = [];
  products: Product[] = [];
  usersProducts: any[] = [];
  activeOrderId: number | undefined = undefined;
  cart: Cart = {};
  isAuthenticated: boolean = false;

  constructor() {
    makeAutoObservable(this)
  }

  // -- auth BL --//

  authenticateUser(isAuth: boolean) {
    this.isAuthenticated = isAuth;
  }

  // -- users BL -- //

  addUser(newUser: User) {
    this.users = addUser(this.users, newUser)
  }

  editUser(editedUser: User) {
    this.users = editUser(this.users, editedUser);
  }

  deleteUser(id: number) {
    this.users = deleteUser(this.users, id);
  }

  // -- products BL -- //
  addProduct(newProduct: Product) {
    this.products = addProduct(this.products, newProduct);
  }

  editProduct(updatedProduct: Product) {
    this.products = editProduct(this.products, updatedProduct);
  }

  deleteProduct(productId: number) {
    this.products = deleteProduct(this.products, +productId);
  }

  // -- usersProduct BL -- //

  // -- orders BL -- //
  setActiveOrderId(orderId: number) {
    this.activeOrderId = orderId;
  }
}

const store = new Store();

export default store;