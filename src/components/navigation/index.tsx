import * as React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import styled from '@emotion/styled'

type NavigationProps = {
  children?: React.ReactNode
  className?: string
}

function Navigation(props: NavigationProps = {}): React.ReactElement {
  const [message, setMessage] = useState('Hello, World!')
  const [variable, setVariable] = useState('Test Variable')

  useEffect(() => {
    // TODO: componentDidMount
    return () => {
      // TODO: componentWillUnmount
    }
  }, [])

  const navigate = useNavigate()

  useEffect(() => {
    // TODO: shouldComponent Update? componentDidUpdate? 둘 중에 하나
    return () => {
      // TODO: componentWillUpdate
    }
  }, [variable])

  function handleEvents(e: React.MouseEvent<HTMLButtonElement>): void {
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
    <StyledNavigation className={classNames('navigation', props.className)}>
      <button type='button' value='root' onClick={handleEvents}>
        root
      </button>
      <button type='button' value='home' onClick={handleEvents}>
        home
      </button>
      <button type='button' value='about' onClick={handleEvents}>
        about
      </button>
      <button type='button' value='locales' onClick={handleEvents}>
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
