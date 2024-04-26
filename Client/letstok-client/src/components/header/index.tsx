import { Link, useNavigate } from "react-router-dom";
import './style.scss';
import store from '../../mobx/store';
import { observer } from "mobx-react";
import { useEffect } from "react";

export const Header = observer(() => {
  const isAuth = store.isAuthenticated;
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the current URL is not the sign-in path
    if (window.location.pathname !== '/sign-in' && window.location.pathname !== '/sign-up' && !isAuth) {
      // Redirect to the sign-in path
      navigate('/sign-in');
    }
  }, [navigate]);
  
  return (
    <div className="header">
      <div className="logo">
        LetsTok G-Store
      </div>
      {
        isAuth && 
          <div className="nav-items">
            <ul>
              <Link to="/users">
                <li>Users</li>
              </Link>
              <Link to="/products">
                <li>Products</li>
              </Link>
            </ul>
          </div>
      }
      <div className="login-actions">
        <ul>
            <Link to="/sign-up">
              <li>SignUp</li>
            </Link>
            <Link to="/sign-in">
              <li>SignIn</li>
            </Link>
          </ul>
      </div>
    </div>
  )
})
