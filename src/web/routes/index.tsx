import React from 'react';
import { Route, Switch, RouteProps, Redirect } from 'react-router-dom';
const { lazy, Suspense } = React;

import NotFound from '@components/NotFound/NotFound.tsx';
import Loading from '@components/Loading';

const Home = lazy(() => import(/* webpackChunkName:"home" */ '@components/Home/home.tsx'));
const About = lazy(() => import(/* webpackChunkName:"about" */ '@components/About/about.tsx'));

const routes: RouteProps[] = [
    { path: '/', exact: true, component: Home },
    { path: '/about', exact: true, component: About },
];

const Routes = () => (
    <Suspense fallback={<Loading />}>
        <Switch>
            {routes.map((route, index) => {
                const {path, exact, component} = route;
                const LazyCom = component;
                return (
                    <Route
                        key={index}
                        path={path}
                        exact={exact}
                        render={(props) => (
                            // 这里可以根据用户权限等过滤重定向
                            <LazyCom {...props}/>
                        )}
                    />
                )
            })}
            <Route component={NotFound}/>
        </Switch>
    </Suspense>
)

export default Routes;