import React, {useContext} from 'react';
import GithubContext from '../../contexts/github/githubContext';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = () => {
    const githubContext = useContext(GithubContext);
    const {users, loading} = githubContext;
    if(loading){
        return <Spinner />
    }else{
        return (
            <div className="displayUserItem">
                {users.map( user => (<UserItem key={user.id} user={user} />))}
            </div> 
        )
    }
}

export default Users;