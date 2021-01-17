import React from 'react';
import { Route, Switch, RouteProps, Redirect } from 'react-router-dom';
const { lazy, Suspense } = React;

const Home = lazy(() => import(/* webpackChunkName:"demo" */ '@components/Home/home.tsx'));
const About = lazy(() => import(/* webpackChunkName:"demo" */ '@components/About/about.tsx'));

export const routes: RouteProps[] = [
    { path: '/', exact: true, component: Home },
    { path: '/about', exact: true, component: About },
];
