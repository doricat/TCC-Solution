import React from 'react';
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { PetItem } from './pages/PetItem';
import { ShoppingCar } from './pages/ShoppingCar';
import { Order } from './pages/Order';
import { Bill } from './pages/Bill';
import { NotFound } from './pages/NotFound';
import { AuthorizeRoute } from './components/AuthorizeRoute';
import { ApiAuthorizationRoutes } from './components/ApiAuthorizationRoutes';
import { ApplicationPaths } from './services/ApiAuthorizationConstants';

function App({ history }) {
    return (
        <ConnectedRouter history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/item" component={PetItem} />
                    <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
                    <AuthorizeRoute path='/shopping_car' component={ShoppingCar} />
                    <AuthorizeRoute path='/order' component={Order} />
                    <AuthorizeRoute path='/bill' component={Bill} />
                    <Route path="/404" component={NotFound} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </ConnectedRouter>
    );
}

export default App;
