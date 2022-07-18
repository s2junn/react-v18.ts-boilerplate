import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

export type Option = {
  label: string
  value: string
}

type SelectBoxProps = {
  children?: React.ReactNode
  className?: string
  options: Array<Option>
  default?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

function SelectBox(props: SelectBoxProps = { options: [] }) {
  const [message, setMessage] = useState('Hello, World!')
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

  const onSelectChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //TODO: to do something
    console.log(e.target.value)
    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <StyledSelectBox className={['select-box', props.className || ''].join(' ')} onChange={onSelectChanged}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value} selected={props.default === option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelectBox>
  )
}

SelectBox.defaultProps = {}

export default React.memo(SelectBox)

const StyledSelectBox = styled.select`
  &.select-box {
  }
`
