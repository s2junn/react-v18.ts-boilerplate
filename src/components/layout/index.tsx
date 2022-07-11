import * as React from 'react'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from '../navigation'

import styled from '@emotion/styled'

type LayoutProps = {
  children?: React.ReactNode
  className?: string
}

function Layout(props: LayoutProps = {}) {
  const [message, setMessage] = useState('Hello, Layout!')
  const [variable, setVariable] = useState('Test Variable')

  useEffect(() => {
    //TODO: componentDidMount
    console.log('props.children = ', props.children)

    return () => {
      //TODO: componentWillUnmount
    }
  }, [])

  useEffect(() => {
    //TODO: shouldComponent Update? componentDidUpdate? 둘 중에 하나
    return () => {
      //TODO: componentWillUpdate
    }
  }, [variable])

  return (
    <StyledLayout className={`layout ${props.className || ''}`}>
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
  }
`
