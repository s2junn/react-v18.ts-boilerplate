import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

// import Layout from '@/components/layout/layout'
import Layout from '../components/layout/layout'
import Root from '../pages';
import Home from '../pages/home/home'
import About from '../pages/about/about'

type BSLRouterProps = {
	children?: React.ReactNode;
	classNames?: string;
};

function BSLRouter(props: BSLRouterProps = {}) {
	return (
		<Routes>
			<Route path="/" element={ <Layout /> }>
				<Route index element={ <Root /> } />
				<Route path="/home" element={ <Home /> } />
				<Route path="/about" element={ <About /> } />
			</Route>
		</Routes>
	);
}

BSLRouter.defaultProps = {};

export default React.memo(BSLRouter);
