import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SHOW_ALERT, REMOVE_ALERT } from '../type';

const AlertState = props => {
    const initialState = {
        showAlert : false
    };

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = () => {
        dispatch({
            type: SHOW_ALERT
        });

        setTimeout(() => dispatch({ type : REMOVE_ALERT}), 4000)
    }

    return (
        <AlertContext.Provider 
            value={{
                showAlert : state.showAlert, 
                setAlert
            }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;