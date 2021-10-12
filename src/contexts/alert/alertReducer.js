import { SHOW_ALERT, REMOVE_ALERT } from "../type";

export default (state, action) => {
    switch (action.type) {
        case SHOW_ALERT : 
            return {
                ...state,
                showAlert: true
            };
        case REMOVE_ALERT : 
        return {
            ...state,
            showAlert: false
        };
        default: 
            return state;
    }
}