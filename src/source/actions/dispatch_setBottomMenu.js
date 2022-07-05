import {SET_BOTTOM_MENU} from "../api/strings";

export const dispatch_setBottomMenu = (value) => {
    return async dispatch => {
        dispatch({
            type: SET_BOTTOM_MENU,
            value: value
        })
    }
}
