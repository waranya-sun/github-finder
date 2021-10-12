import React, {useState, useContext} from 'react';
import githubContext from '../../contexts/github/githubContext';
import alertContext from '../../contexts/alert/alertContext';
import Alert from '../layout/Alert';

const Search = () => {
    const GithubContext = useContext(githubContext);
    const AlertContext = useContext(alertContext);

    const [inputText, setInputText] = useState("");

    const inputChange = (e) => {
        setInputText(e.target.value);
    } 

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputText === ''){
            AlertContext.setAlert('Please enter something');
        }else{
            GithubContext.searchUsers(inputText);
            setInputText("");
        }
    }

    return (
        <div className="searchComp">
            <div></div>
            <div>
                <Alert />
                <form onSubmit={onSubmit}>
                    <input type="text" onChange={inputChange} value={inputText} />
                    <input type="submit" value="Search" />
                </form>
                { GithubContext.users.length > 0 ? <div><button onClick={GithubContext.clearUsers} className="clearBtn">Clear</button></div> : null}
            </div>
            <div></div>
        </div>
    )
}

export default Search;