import {HEADER_TITLE} from "../api/strings";

export const dispatch_headerTitle = (title) => {
    return async dispatch => {
        dispatch({
            type: HEADER_TITLE,
            title: title
        })
    }
}
