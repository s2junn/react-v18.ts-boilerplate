import * as React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

type NavigationProps = {
  children?: React.ReactNode
  className?: string
}

function Navigation(props: NavigationProps = {}) {
  const [message, setMessage] = useState('Hello, World!')
  const [variable, setVariable] = useState('Test Variable')

  useEffect(() => {
    //TODO: componentDidMount
    return () => {
      //TODO: componentWillUnmount
    }
  }, [])

  const navigate = useNavigate()

  useEffect(() => {
    //TODO: shouldComponent Update? componentDidUpdate? 둘 중에 하나
    return () => {
      //TODO: componentWillUpdate
    }
  }, [variable])

  function handleEvents(e: React.MouseEvent<HTMLButtonElement>) {
    switch ((e.target as HTMLButtonElement).value) {
      case 'root':
        navigate('/')
        break
      case 'home':
        navigate('/home')
        break
      case 'about':
        navigate('/about')
        break
      case 'locales':
        navigate('/examples/locales')
        break
      default:
    }
  }

  return (
    <StyledNavigation className={['navigation', props.className || ''].join(' ')}>
      <button value='root' onClick={handleEvents}>
        root
      </button>
      <button value='home' onClick={handleEvents}>
        home
      </button>
      <button value='about' onClick={handleEvents}>
        about
      </button>
      <button value='locales' onClick={handleEvents}>
        locales
      </button>
    </StyledNavigation>
  )
}

Navigation.defaultProps = {}

export default React.memo(Navigation)

const StyledNavigation = styled.div`
  &.navigation {
    display: flex;
    flex-direction: row;
  }
`
