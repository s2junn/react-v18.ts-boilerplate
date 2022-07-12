import * as React from 'react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import styled from '@emotion/styled'

type HomeProps = {
  children?: React.ReactNode
  className?: string
}

function Home(props: HomeProps = {}) {
  const { t, i18n } = useTranslation()
  const [message, setMessage] = useState(t('Welcome to React') + ', Home!')
  const [variable, setVariable] = useState('Test Variable')

  useEffect(() => {
    //TODO: componentDidMount
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
    <StyledHome className={`home ${props.className || ''}`}>
      {message}
      {props.children}
    </StyledHome>
  )
}

Home.defaultProps = {}

export default React.memo(Home)

const StyledHome = styled.div`
  &.home {
  }
`
