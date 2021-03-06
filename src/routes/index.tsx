import * as React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Routes, Route, useRoutes } from 'react-router-dom';

// import Layout from '@/components/layout/layout'
import Layout from '../components/layout'
import Root from '../pages';
import Home from '../pages/home'
import About from '../pages/about'

type BSLRouterProps = {
	children?: React.ReactNode;
	classNames?: string;
};

function BSLRouter(props: BSLRouterProps = {}) {
	const routes: RouteObject[] = [
		{
			path: '/',
			element: <Layout />,
			children: [
				{ index: true, element: <Root /> },
				{ path: '/home', element: <Home /> },
				{ path: '/about', element: <About /> },
			]
		}
	]

	return useRoutes(routes)
}

BSLRouter.defaultProps = {};

export default React.memo(BSLRouter);
