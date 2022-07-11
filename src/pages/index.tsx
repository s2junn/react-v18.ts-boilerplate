import * as React from 'react'
import { useState, useEffect } from 'react'

// import './{{kebab name}}.scss';

type RootProps = {
  children?: React.ReactNode
  className?: string
}

function Root(props: RootProps = {}) {
  const [message, setMessage] = useState('Hello, Root!')
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
    <div className={`root-element ${props.className || ''}`}>
      {message}
      <br />
      {props.children}
    </div>
  )
}

Root.defaultProps = {}

// export default React.memo(Root);
export default Root
