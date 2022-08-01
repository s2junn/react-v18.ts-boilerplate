import * as React from 'react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import styled from '@emotion/styled'

import { Button, SelectBox } from '@/components'

function LanguageSelectBox(): React.ReactElement {
  const languages = [
    { label: '독일어', value: 'de' },
    { label: 'English', value: 'en' },
    { label: 'Français', value: 'fr' },
    { label: '日本語', value: 'ja' },
    { label: '한국어', value: 'ko' },
  ]

  const [language, setLanguage] = useState('ko') // default language

  const { t, i18n } = useTranslation()

  const handleChangeLocale = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const lang = e.target.value

    setLanguage(lang)

    i18n.changeLanguage(lang)
  }

  return (
    <div className='switcher'>
      <span>Languages: </span>
      <SelectBox options={languages} default='ko' onChange={handleChangeLocale} />
    </div>
  )
}

type LocalesProps = {
  children?: React.ReactNode
  className?: string
}

function Locales(props: LocalesProps = {}): React.ReactElement {
  const { t, i18n } = useTranslation()
  const [message, setMessage] = useState('Hello, Locales!')
  const [variable, setVariable] = useState('Test Variable')

  useEffect(() => {
    // TODO: componentDidMount
    return () => {
      // TODO: componentWillUnmount
    }
  }, [])

  useEffect(() => {
    // TODO: shouldComponent Update? componentDidUpdate? 둘 중에 하나
    return () => {
      // TODO: componentWillUpdate
    }
  }, [variable])

  return (
    <StyledLocales className={classNames('locales', props.className)}>
      <LanguageSelectBox />
      {t('Welcome to React')}
      {props.children}
    </StyledLocales>
  )
}

Locales.defaultProps = {}

export default React.memo(Locales)

const StyledLocales = styled.div`
  &.locales {
  }
`
