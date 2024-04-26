import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from './pages/products';
import { Users } from './pages/users';
import { SignUp } from './pages/signUp';
import { SignIn } from './pages/signIn';
import { Header } from './components/header';
import { Cart } from './pages/cart';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/cart/:userId" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
