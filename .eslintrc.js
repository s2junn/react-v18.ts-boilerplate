module.exports = {
  // root 설정을 하면 부모 폴더의 설정파일을 더 찾으러 올라가지 않는다.
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2022: true
  },
  // 기본값은 espree. ECMAScript 표준 지원
  // experimental한 최신 문법을 위해서는 @babel/eslint-parser' 등의 추가가 필요
  // 타입스크립트용으로는 아래와 같이 써야하지만, plugin:@typescript-eslint/recommended 내부에 포함되어있음
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    }
  },
  // eslint-plugin | config- 표기는 생략 가능하며, 다른곳에서 plugin:XXX으로 사용 가능하다.
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks', 'testing-library'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx']
      }
    }
  },
  // extends 에 적을 경우 전체 프로젝트에 적용되고, 나중에 들어갈수록 규칙을 덮어쓰므로 우선순위가 높음
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:react/recommended', 'prettier/@typescript-eslint', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  rules: {
    // "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
    // "no-var": "off",
    'no-console': 'warn',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'vars-on-top': 'off',
    // var _foo;
    'no-underscore-dangle': 'off',
    'comma-dangle': 'off',
    // setTimeout(function () {}, 0);
    'func-names': 'off',
    'prefer-template': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',
    'consistent-return': 'off',
    // disallow specified syntax(ex. WithStatement)
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    // Require using arrow functions for callbacks
    'prefer-arrow-callback': 'error',
    'require-await': 'error',
    // a => {}
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', {
      props: false
    }],
    'no-unused-expressions': ['error', {
      // a || b
      allowTernary: true,
      // a ? b : 0
      allowShortCircuit: true,
      allowTaggedTemplates: true
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true
    }],
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
      tsx: 'never'
    }],
    'max-len': ['error', {
      // prettier의 printWidth 옵션 대신 사용
      code: 120,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    'no-undef': 'warn',
    eqeqeq: 'warn',
    '@typescript-eslint/strict-boolean-expressions': [2, {
      allowString: false,
      allowNumber: false
    }],
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: true
    }],
    'jest-dom/prefer-checked': 'error'
  },
  // 특정 파일에 대해서만 적용하고싶은 경우 - 예) ts, test, storybook 등
  // 이곳에 override해도 되지만, 특정 폴더에 대해서만 적용하고싶을때 해당 폴더 내에 .eslintrc 파일을 또 만들어도 됨
  overrides: [{
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    excludedFiles: '제외할 파일 또는 파일패턴',
    extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended']
  }]
};