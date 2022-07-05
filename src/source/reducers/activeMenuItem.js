// default state
import {ACTIVE_MENU_ITEM} from "../api/strings";

const activeMenuReducerDefaultState = {
    actived_item: [false, false, false, false]
};

// reducer which is a pure function
export default (state = activeMenuReducerDefaultState, action) => {
    switch (action.type) {
        case ACTIVE_MENU_ITEM:
            return {
                ...state,
                actived_item: action.actived_item
            };    
        default:
            return state;
    }
};