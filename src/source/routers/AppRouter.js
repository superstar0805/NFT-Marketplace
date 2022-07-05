import React from 'react';
import { createBrowserHistory } from 'history'
import { useSelector } from 'react-redux';

import Header from '../layouts/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Marketplace from '../pages/Marketplace';
import Collection from '../pages/Collection';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Creator from '../pages/Creator';
import ConnectWallet from '../pages/ConnectWallet';
import ItemDetail from '../pages/ItemDetail';
import CreateType from '../pages/CreateType';
import Upload from '../pages/Upload';
import CreateCollection from '../pages/CreateCollection';
import NotFoundPage from '../pages/NotFoundPage';
import Items from '../pages/Items';

var history = createBrowserHistory();

function appRouter() {
    const header_title = useSelector(state => state.headerTitle);

    return (
        <Router history={history}>
            <Switch>
                <Header>
                    {/* <Route component={({ match }) =>
                        <div> */}
                            <Route path="/" component={HomePage} exact={true} />
                            {/* <Route path="*" component={NotFoundPage} /> */}
                            <Route path="/marketplace" component={Marketplace} exact={true} />
                            <Route path="/collections" component={Collection} exact={true} />
                            <Route path="/profile" component={Profile} exact={true} />
                            <Route path="/edit-profile" component={EditProfile} exact={true} />
                            <Route path="/creators" component={Creator} exact={true} />
                            <Route path="/connect-wallet" component={ConnectWallet} exact={true} />
                            <Route path="/item-detail" component={ItemDetail} />
                            <Route path="/create-type" component={CreateType} exact={true} />
                            <Route path="/upload" component={Upload} exact={true} />
                            <Route path="/create-collection" component={CreateCollection} exact={true} />
                            <Route path="/items" component={Items} exact={true} />
                        {/* </div>
                    }/> */}
                </Header>
            </Switch>
        </Router>
    )
}

export default appRouter;