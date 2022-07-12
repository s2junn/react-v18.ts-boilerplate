import * as React from 'react'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import { Navigation } from '@/components'

const languages = [
  { name: '독일어', code: 'de' },
  { name: 'English', code: 'en' },
  { name: 'Français', code: 'fr' },
  { name: '日本語', code: 'jp' },
  { name: '한국어', code: 'ko' },
]

const currentLocale = 'ko'

type LayoutProps = {
  children?: React.ReactNode
  className?: string
}

function Layout(props: LayoutProps = {}) {
  const [message, setMessage] = useState('Hello, Layout!')
  const [variable, setVariable] = useState('Test Variable')

  const [language, setLanguage] = useState(currentLocale)

  const { t, i18n } = useTranslation()

  const handleChangeLocale = (e) => {
    const lang = e.target.value
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

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
      <div className='switcher'>
        {/* Language switch dropdown here */}
        <span>Languages</span>{' '}
        <select onChange={handleChangeLocale}>
          <option key={'kr'} value={'한국어'}>
            {'----------'}
          </option>
          {languages.map(({ name, code }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        <div>selected language : {language}</div>
      </div>
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
