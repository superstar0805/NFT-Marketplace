import {ACTIVE_MENU_ITEM} from "../api/strings";

export const activeMenuItem = (actived_item) => ({
    type: ACTIVE_MENU_ITEM,
    actived_item: actived_item
});
