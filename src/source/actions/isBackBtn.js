import {IS_BACK_BTN} from "../api/strings";

export const isBackBtn = (status) => ({
    type: IS_BACK_BTN,
    status: status
});