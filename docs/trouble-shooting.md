#

```
ERROR in ...tsx 1:0-38
Module not found: Error: Can't resolve 'core-js/modules/es...js' in '...'
```

core-js 의 default 값이 2인데, 3으로 셋팅하여 발생하는 오류로 core-js 3 버전대를 설치해주면 해결된다.

```
> yarn add core-js@3
```

#

```
Cannot read properties of undefined (reading 'displayName')
TypeError: Cannot read properties of undefined (reading 'displayName')
    at displayName (http://localhost:6006/vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js-node_modules_storybook-67d044.iframe.bundle.js:20550:22)
    at parseReactElement (http://localhost:6006/vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js-node_modules_storybook-67d044.iframe.bundle.js:126105:21)
    at reactElementToJsxString (http://localhost:6006/vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js-node_modules_storybook-67d044.iframe.bundle.js:126588:21)
    at http://localhost:6006/vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js-node_modules_storybook-67d044.iframe.bundle.js:20562:108
    at http://localhost:6006/vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js-node_modules_storybook-67d044.iframe.bundle.js:129599:17
    at mapIntoArray (http://localhost:6006/vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js-node_modules_storybook-67d044.iframe.bundle.js:129490:23)
    at Object.mapChildren [as map] (http://localhost:6006/vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js-node_modules_storybook-67d044.iframe.bundle.js:129598:3)
    at renderJsx (http://localhost:6006/vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js-node_modules_storybook-67d044.iframe.bundle.js:20559:71)
    at jsxDecorator (http://localhost:6006/vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js-node_modules_storybook-67d044.iframe.bundle.js:20644:18)
    at http://localhost:6006/vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js-node_modules_storybook-67d044.iframe.bundle.js:8869:21
```

export / import 의 형식이 안맞아서 생기는 오류로 형식을 맞춰주어야 한다.

```
// A.tsx
export default A

// A.stories.tsx
import A from 'A.tsx'
```

or

```
// B.tsx
export const B

// A.stories.tsx
import { B } from 'B.tsx'
```

#
