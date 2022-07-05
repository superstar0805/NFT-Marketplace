import {ACTIVE_MENU_ITEM} from "../api/strings";

export const dispatch_activeMenuItem = (actived_item) => {
    return async dispatch => {
        dispatch({
            type: ACTIVE_MENU_ITEM,
            actived_item: actived_item
        })
    }
}
