import * as React from 'react'
import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

// import Layout from '@/components/layout/layout'
import Layout from '../components/templates/layout'
import Root from '../pages'
import Home from '../pages/home'
import About from '../pages/about'

function BSLRouter() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Root /> },
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
      ],
    },
  ]

  return useRoutes(routes)
}

export default BSLRouter
