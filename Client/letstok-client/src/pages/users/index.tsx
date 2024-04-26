import './style.scss';
import { useUsersListManager } from "./hooks/useUsersListManager";
import { CreateUserForm } from './CreateUserForm';
import { User } from './interfaces';
import { useState } from 'react';
import { UsersList } from './UsersList';

export const Users = () => {
    const [selectedUser, setSelectedUser] = useState<User | undefined>();
    const { handleDeleteUser } = useUsersListManager();

    return (
        <div className="users-page">
            <CreateUserForm
                selectedUser={selectedUser}
                onFormSubmitCallback={() => setSelectedUser(undefined)}
            />
            <UsersList
                onUserEditClick={(user: User) => setSelectedUser(user)}
                onUserDeleteClick={(user: User) => handleDeleteUser(user.id)}
            />
        </div>
    )
}   