// default state
import {HEADER_TITLE} from "../api/strings";

const headerTitleReducerDefaultState = {
    headerTitle: 'Home'
};

// reducer which is a pure function
export default (state = headerTitleReducerDefaultState, action) => {
    switch (action.type) {
        case HEADER_TITLE:
            return {
                ...state,
                headerTitle: action.title == -1 ? '' : action.title
            };    
        default:
            return state;
    }
};