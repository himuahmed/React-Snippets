import React from 'react';
import useResources from './useResources';


const UserList =() => {

    const userList = useResources('users')

    return(
    <div> 
        <ul>{userList.map(user => (<li key={user.id}>{user.username}</li>))}</ul>
    </div>
    );
    
}

export default UserList;