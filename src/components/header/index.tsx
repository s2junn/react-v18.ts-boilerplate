import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'

import { Button, SelectBox } from '@/components'

import type { User } from '@/@types'

const LanguageSelectBox = () => {
  const languages = [
    { label: '독일어', value: 'de' },
    { label: 'English', value: 'en' },
    { label: 'Français', value: 'fr' },
    { label: '日本語', value: 'ja' },
    { label: '한국어', value: 'ko' },
  ]

  const [language, setLanguage] = useState('ko') // default language

  const { t, i18n } = useTranslation()

  const handleChangeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value

    setLanguage(lang)

    i18n.changeLanguage(lang)
  }

  return (
    <div className='switcher'>
      <span>Languages: </span>
      <SelectBox options={languages} default={'ko'} onChange={handleChangeLocale} />
    </div>
  )
}

interface HeaderProps {
  user?: User
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
}

function Header({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) {
  return (
    <StyledHeader>
      <div className='wrapper'>
        <div>
          <svg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <path d='M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z' fill='#FFF' />
              <path d='M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z' fill='#555AB9' />
              <path d='M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z' fill='#91BAF8' />
            </g>
          </svg>
          <h1>Acme</h1>
        </div>
        <LanguageSelectBox />
        <div>
          {user ? (
            <>
              <span className='welcome'>
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size='small' onClick={onLogout} label='Log out' />
            </>
          ) : (
            <>
              <Button size='small' onClick={onLogin} label='Log in' />
              <Button primary size='small' onClick={onCreateAccount} label='Sign up' />
            </>
          )}
        </div>
      </div>
    </StyledHeader>
  )
}

export default React.memo(Header)

const StyledHeader = styled.header`
  .wrapper {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      display: inline-block;
      vertical-align: top;
    }

    h1 {
      font-weight: 900;
      font-size: 20px;
      line-height: 1;
      margin: 6px 0 6px 10px;
      display: inline-block;
      vertical-align: top;
    }

    .welcome {
      color: #333;
      font-size: 14px;
      margin-right: 10px;
    }

    button + button {
      margin-left: 10px;
    }
  }
`
