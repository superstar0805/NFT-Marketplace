import { createStore, combineReducers, applyMiddleware } from 'redux';
import shoppingCartReducer from '../reducers/shoppingcart';
import authenticationReducer from '../reducers/authentication';
import wishlistReducer from '../reducers/wishlist';
import headerTitleReducer from '../reducers/headertitle';
import activeMenuItem from '../reducers/activeMenuItem';
import isBackBtn from '../reducers/isBackBtn';
import setBottomMenu from '../reducers/setBottomMenu';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    authentication: authenticationReducer,
    wishlist: wishlistReducer,

    headerTitle: headerTitleReducer,
    activeMenuItem: activeMenuItem,
    isBackBtn: isBackBtn,
    setBottomMenu: setBottomMenu,
});

export default () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    return store;
};