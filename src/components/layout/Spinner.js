import React from "react";
import spinner from './spinner.svg';

const Spinner = () => {
    return (
       <div className="spinnerComp">
           <img src={spinner} width="100" alt="spinner" />
       </div>
    )
}

export default Spinner;