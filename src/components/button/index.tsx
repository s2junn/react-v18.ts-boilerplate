import React from 'react'

import styled from '@emotion/styled'

export interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

function Button({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'

  return (
    <StyledButton
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}>
      {label}
    </StyledButton>
  )
}

Button.defaultProps = {}

export default React.memo(Button)

const StyledButton = styled.button`
  &.storybook-button {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

    &--primary {
      color: white;
      background-color: #1ea7fd;
    }
    &--secondary {
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    }
    &--small {
      font-size: 12px;
      padding: 10px 16px;
    }
    &--medium {
      font-size: 14px;
      padding: 11px 20px;
    }
    &--large {
      font-size: 16px;
      padding: 12px 24px;
    }
  }
`
