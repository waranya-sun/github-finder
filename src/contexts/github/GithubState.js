import React, {useReducer} from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {SEARCH_USERS, 
        GET_USER, 
        GET_REPOS, 
        SET_LOADING, 
        CLEAR_USERS
    } from "../type";

const GithubState = (props) => {
    const initialState = {
        users : [],
        user : {},
        repos : [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users
    const searchUsers = (user) => {
        setLoading();
        fetch(`https://api.github.com/search/users?q=${user}`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type : SEARCH_USERS,
                payload : data.items
            })
        });
    }

    //Get User
    const getUser = (user) => {
        setLoading();
        fetch(`https://api.github.com/users/${user}`)
        .then( response => response.json())
        .then( data => {
            dispatch({
                type: GET_USER,
                payload: data
            })
        })
    }
    
    //Get Repos
    const getRepos = (user) => {
        setLoading();
        fetch(`https://api.github.com/users/${user}/repos?per_page=5&sort=created:asc`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            dispatch({
                type: GET_REPOS,
                payload: data
            })
        })
    }

    //Set Loading
    const setLoading = () => {
        dispatch({ type: SET_LOADING})
    }

    const clearUsers = () => {
        dispatch({type: CLEAR_USERS});
    }

    return (
        <GithubContext.Provider 
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                getUser,
                getRepos,
                clearUsers
            }}>
            {props.children}
        </GithubContext.Provider>
    );
}

export default GithubState;