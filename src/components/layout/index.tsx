import * as React from 'react'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

import { Header } from '@/components'
import { Navigation } from '@/components'

import type { User } from '@/@types'

type LayoutProps = {
  children?: React.ReactNode
  className?: string
}

function Layout(props: LayoutProps = {}) {
  const [message, setMessage] = useState('[Layout]: Hello!')
  const [user, setUser] = useState<User>()

  useEffect(() => {
    //TODO: componentDidMount
    console.log('props.children = ', props.children)

    return () => {
      //TODO: componentWillUnmount
    }
  }, [])

  return (
    <StyledLayout className={`layout ${props.className || ''}`}>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      {message}
      <Navigation />
      <Outlet />
    </StyledLayout>
  )
}

Layout.defaultProps = {}

export default React.memo(Layout)

const StyledLayout = styled.div`
  &.layout {
    background-color: green;
  }
`
