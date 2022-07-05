// default state
import {SET_BOTTOM_MENU} from "../api/strings";

const setBottomMenuDefaultState = {
    value: 0
};

// reducer which is a pure function
export default (state = setBottomMenuDefaultState, action) => {
    switch (action.type) {
        case SET_BOTTOM_MENU:
            return {
                ...state,
                value: action.value
            };    
        default:
            return state;
    }
};