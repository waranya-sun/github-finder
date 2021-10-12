import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = ({user}) => {
    return (
        <div className="userCard">
            <img src={user.avatar_url} alt={user.login} />
            <h3>{user.login}</h3>
            <div><Link to={`/user/${user.login}`}>More Info</Link></div>
        </div>
    )
}

export default UserItem;