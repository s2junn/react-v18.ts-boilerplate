import * as React from 'react'
import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

import { Layout } from '@/components'

import Root from '@/pages'
import Home from '@/pages/home'
import About from '@/pages/about'

import { examples } from '@/routes/examples'

function Router(): React.ReactElement | null {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        ...examples,
        { index: true, element: <Root /> },
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
      ],
    },
  ]

  return useRoutes(routes)
}

export default Router
