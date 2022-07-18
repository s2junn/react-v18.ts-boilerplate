import * as React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type RootProps = {
  children?: React.ReactNode
  className?: string
}

function Root(props: RootProps = {}) {
  const { t, i18n } = useTranslation()

  const [message, setMessage] = useState('Hello, Root!')
  const [variable, setVariable] = useState('Test Variable')

  const navigate = useNavigate()

  useEffect(() => {
    //TODO: componentDidMount
    // navigate('/home')
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
    <div className={`root-element ${props.className || ''}`}>
      {message}
      <br />
      {t('Welcome to React')}
      <br />
      {props.children}
    </div>
  )
}

Root.defaultProps = {}

// export default React.memo(Root);
export default Root
