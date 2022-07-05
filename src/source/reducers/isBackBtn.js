// default state
import {IS_BACK_BTN} from "../api/strings";

// for only invoice, bulling indecidents, violation detail
const backBtnState = {
    status: 0
};

// reducer which is a pure function
export default (state = backBtnState, action) => {
    switch (action.type) {
        case IS_BACK_BTN:
            return {
                ...state,
                status: action.status
            };    
        default:
            return state;
    }
};