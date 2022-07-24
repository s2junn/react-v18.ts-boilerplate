import * as React from 'react'
import { Global, css } from '@emotion/react'

function Fonts(): React.ReactElement {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Spoqa Han Sans Neo';
          font-weight: 700;
          font-display: swap;
          src: local('Spoqa Han Sans Neo Bold'), url('~@client/assets/fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
            url('~@client/assets/fonts/SpoqaHanSansNeo-Bold.woff') format('woff'),
            url('~@client/assets/fonts/SpoqaHanSansNeo-Bold.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Spoqa Han Sans Neo';
          font-weight: 500;
          font-display: swap;
          src: local('Spoqa Han Sans Neo Medium'),
            url('~@client/assets/fonts/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
            url('~@client/assets/fonts/SpoqaHanSansNeo-Medium.woff') format('woff'),
            url('~@client/assets/fonts/SpoqaHanSansNeo-Medium.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Spoqa Han Sans Neo';
          font-weight: 400;
          font-display: swap;
          src: local('Spoqa Han Sans Neo Regular'),
            url('~@client/assets/fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
            url('~@client/assets/fonts/SpoqaHanSansNeo-Regular.woff') format('woff'),
            url('~@client/assets/fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Spoqa Han Sans Neo';
          font-weight: 300;
          font-display: swap;
          src: local('Spoqa Han Sans Neo Light'),
            url('~@client/assets/fonts/SpoqaHanSansNeo-Light.woff2') format('woff2'),
            url('~@client/assets/fonts/SpoqaHanSansNeo-Light.woff') format('woff'),
            url('~@client/assets/fonts/SpoqaHanSansNeo-Light.ttf') format('truetype');
        }

        $font-family: 'Spoqa Han Sans Neo', '맑은 고딕', '돋음', dotum, sans-serif;
        $font-default-size: 62.5%;
      `}
    />
  )
}

export default Fonts
