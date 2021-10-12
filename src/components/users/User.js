import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import GithubContext from '../../contexts/github/githubContext';
import Repos from '../repos/Repos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../layout/Spinner';

const User = ({match}) => {
    const githubContext = useContext(GithubContext);
    const { user, loading ,repos ,getUser,  getRepos} = githubContext;
    useEffect(()=>{
        getUser(match.params.login);
        getRepos(match.params.login);
    },[])
    const { hireable,
        avatar_url,
        name,
        location,
        bio,
        html_url,
        login,
        company,
        blog,
        followers,
        following,
        public_repos,
        public_gists
    } = user;

    if (loading) return <Spinner />;

    return (
    <div className="userComp">
        <div></div>
        <div>
            <div className="backToSearchBth">
                <Link to="/">Back to Search</Link> Hireable :  {hireable ? <FontAwesomeIcon icon={faCheckCircle}/> : <FontAwesomeIcon icon={faTimesCircle}/>}
            </div>

            <div className="userBio borderLight">
                <div className="text-center">
                    <img src={avatar_url} alt={login}/>
                    <h2>{name}</h2>
                    <h4>Location: {location}</h4>
                </div>
                <div className="text-center-small-device">
                    { bio && ( 
                        <>
                            <h2>Bio</h2>
                            <p>{bio}</p>
                        </> )
                    }
                    <a target="_blank" href={html_url}>Visit Github Profile</a>
                    { login && (<p><strong>Username :</strong> {login}</p>)}
                    { company && (<p><strong>Company :</strong> {company}</p>)}
                    { blog && (<p><strong>Website :</strong> {blog}</p>)}
                </div>
            </div>
            
            <div className="showBadge ">
                <div className="badge followers">Followers: {followers}</div>
                <div className="badge following">Following: {following}</div>
                <div className="badge public_repos">Public Repos: {public_repos}</div>
                <div className="badge public_gists">Public Gists: {public_gists}</div>
            </div>
            
            <div>
                <Repos repos={repos} />
            </div>
            
        </div>
        <div></div>
    </div>
    )
}

export default User;