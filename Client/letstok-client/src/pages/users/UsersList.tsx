import { User } from "./interfaces";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import store from '../../mobx/store';
import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

interface Props {
    onUserEditClick: (user: User) => void;
    onUserDeleteClick: (user: User) => void;
}
export const UsersList: React.FC<Props> = observer(
  ({ onUserEditClick, onUserDeleteClick }) => {
    return (
      <div className="users-list-view">
        {store.users?.map((user: User) => {
          return (
            <div className="user-box" key={user.id}>
              <div className="user-details">
                <div className="user-details-row">
                  <span className="detail-label">Username:</span>
                  <span className="detail-value">{user.fullName}</span>
                </div>
                <div className="user-details-row">
                  <span className="detail-label">Address:</span>
                  <span className="detail-value">{user.address}</span>
                </div>
                <div className="user-details-row">
                  <span className="detail-label">Payment Method:</span>
                  <span className="detail-value">{user.paymentMethod}</span>
                </div>
              </div>
              <div className="user-actions">
                <DeleteIcon
                  sx={{ fontSize: 18 }}
                  color="primary"
                  className="action-icon"
                  onClick={() => onUserDeleteClick(user)}
                />
                <EditIcon
                  sx={{ fontSize: 18 }}
                  color="primary"
                  onClick={() => onUserEditClick(user)}
                  className="action-icon"
                />
                <Link to={`/cart/${user.id}`}>
                  <ShoppingCartIcon
                    sx={{ fontSize: 18 }}
                    color="primary"
                    className="action-icon"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);
