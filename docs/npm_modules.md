# react-v18.ts-boilertemplate

React v18 에서는 다음과 같은 기능이 추가되었다.

- Autumatic Batching
- Concurrent Features
  - startTransition
  - suspense
- RSC(React Server Component)
  - Zero-Bundle-Size Components
  - Full Access to the Backend
  - Automatic Code Splitting
  - No Waterfalls
  - Avoiding the Abstraction Tax
- New Hooks
  - useId
  - useSyncExternalStore
  - useDeferredValue
  - useInsertionEffect

> References:
>
> - <https://reactjs.org/>
> - <https://ko.reactjs.org/docs/hello-world.html>

## <br />

# **React**

```
> yarn add react react-dom
```

## <br />

# Webpack(Bundler)

```
> yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin copy-webpack-plugin clean-webpack-plugin webpack-manifest-plugin webpack-merge webpack-bundle-analyzer
```

- webpack
  - bundler
- webpack-cli
  - webpack commands 를 CLI 에서 사용할 수 있도록 해주는 모듈
- webpack-dev-server
  - 개발용 Live Server
- html-webpack-plugin
  - 최초 실행될 HTML 파일에 번들링된 파일을 연결해주는 모듈
- copy-webpack-plugin
  - static files 를 빌드 산출물에 복사해주는 모듈
- clean-webpack-plugin
  - 번들링된 파일을 정리하여 빌드시 충돌을 최소화해주는 모듈
- webpack-manifest-plugin
  - webpack 으로 번들링된 파일명을 최종 산출물인 HTML 에서 사용할 수 있도록 alias 같은 형태로 관리해주는 manifest.json 파일 생성 모듈
- webpack-merge
  - webpack config 객체를 병합하기 위해 사용하는 모듈로 stage 별 config 설정을 따로 셋팅하기위해 사용
- webpack-bundle-analyzer
  - 번들링된 chunk 의 사이즈를 도식화하여 확인시켜주는 모듈

> References:
>
> - <https://webpack.js.org/configuration/>
> - <https://velog.io/@rickyhj1994/Webpack-%ED%8C%8C%ED%97%A4%EC%B9%98%EA%B8%B0-4-Plugin>
> - <https://blog.naver.com/thdbsgh3443/222034686070>
> - <https://triplexlab.gitbook.io/webpack/webpack-webpack>
> - <https://yamoo9.gitbook.io/webpack/>
> - <https://syaku.tistory.com/365>
> - <https://studyingych.tistory.com/50>

## <br />

# Babel(Transpiler)

ES6 이상으로 작성된 코드를 ES5 버전으로 변환(브라우저 호환성을 고려하여)하기 위해 사용한다.

```
> yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader core-js@3
```

- @babel/core
- @babel/preset-env
- @babel/preset-react
  - JSX 문법을 Javascript 로 변환해주는 모듈
- babel-loader
- core-js@3

```
.babelrc
{
  "presets": [
      [
        "@babel/preset-env",
        {
          "targets": { "browsers": ["last 2 versions", ">= 5% in KR"]},
          "modules": false,
          /**
            useBuiltIns('usage' | 'entry' | false, 기본값은 false.)
            'usage': 실제 소스코드에서 사용하여 필요한 폴리필만 포함하도록 트랜스폼한다.
            'entry': 지정된 환경에서 필요한 폴리필은 일단 포함하도록 트랜스폼한다.
          */
          "useBuiltIns": "usage",
          "corejs": 3
        }
      ],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ]
}
```

> References:
>
> - <https://blog.cometkim.kr/posts/start-modern-javascript-with-babel/>
> - <https://tech.kakao.com/2020/12/01/frontend-growth-02/>
> - <https://blinders.tistory.com/95>

## <br />

# Typescript

```
> yarn add -D typescript ts-node @types/node @types/react @types/react-dom @babel/preset-typescript
> tsc --init
```

- typescript
- @types/node
- @types/react
- @types/react-dom
- @babel/preset-typescript

> References:
>
> - <https://smoh.tistory.com/323?category=880444>
> - <https://react.vlpt.us/using-typescript/>

## <br />

# ESLint

Javascript, JSX 의 정적 분석 도구

```
> npx install-peerdeps --dev eslint-config-airbnb
> yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

or

> yarn add -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

- eslint
- eslint-config-airbnb
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react
  - ESLint 에서 Check 할 수 있는 React 전용 Rule 정의
- eslint-plugin-react-hooks
  - React 함수 최상위에서만 Hooks 를 정의할 수 있도록 Rule 정의
- @typescript-eslint/eslint-plugin
  - Typescript 문법에 대해 Check 할 수 있도록 Rule 정의
- @typescript-eslint/parser

> References:
>
> - <https://tech.kakao.com/2019/12/05/make-better-use-of-eslint/>

## <br />

# Prettier(Formatter)

Formatting Rules 를 검사하여 일관된 코드를 작성할 수 있도록 도움을 준다.

```
> yarn add -DE prettier eslint-config-prettier eslint-plugin-prettier
```

- prettier
- eslint-config-prettier
  - ESLint 와 Prettier 의 규칙 충돌을 방지해주는 모듈
- eslint-plugin-prettier

> References:
>
> - <https://hj-blog.github.io/frontend/Prettier/>

## <br />

# React Router

```
> yarn add react-router-dom
```

> References:
>
> - <https://reactrouter.com/docs/en/v6/getting-started/overview>
> - <https://velog.io/@yiyb0603/React-Router-dom%EC%9D%98-%EC%9C%A0%EC%9A%A9%ED%95%9C-hooks%EB%93%A4>

## <br />

# Styling

## Emotion

CSS-in-JS 종류의 하나로 Javascript 안에서 Style 을 작성할 수 있게 해주어 동적인 스타일링이 가능하다.
CSS-in-JS 라이브러리들 중에서 SSR 설정이 따로 필요하지 않고, ESLint Plugin 설정이 되어 있다.

```
> yarn add @emotion/styled @emotion/react
> yarn add -D @emotion/babel-plugin
```

## <br />

## SCSS

```
> yarn add -D sass sass-loader css-loader postcss postcss-loader autoprefixer style-loader
```

- sass
  - SCSS(SASS) 문법 해석기(SCSS 전처리기)
- sass-loader
  - SCSS(SASS) 파일 로더
- css-loader
  - CSS 파일 로더
- postcss
- postcss-loader
- autoprefixer
  - 스타일에 자동으로 브라우저 공급업체 접두사(Vendor prefix)를 적용하는 PostCSS 플러그인
- style-loader
  - 로딩된 스타일을 `<style>` 태그 형태로 `<head>` 영역에 삽입해주는 모듈

## <br />

# Storybook

```
> npx -p @storybook/cli sb init
```
