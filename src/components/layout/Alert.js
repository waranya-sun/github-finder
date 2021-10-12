import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import AlertContext from '../../contexts/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    return (
        <>
        { alertContext.showAlert === true && (
        <div className="alertComp">
            <p><FontAwesomeIcon icon={faExclamationCircle}/><span style={{paddingLeft: "10px"}}>Please enter something</span></p>
        </div>)
        }
        </>
    )
}

export default Alert;