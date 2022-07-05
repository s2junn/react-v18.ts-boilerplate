#

```
ERROR in ...tsx 1:0-38
Module not found: Error: Can't resolve 'core-js/modules/es...js' in '...'
```

core-js 의 default 값이 2인데, 3으로 셋팅하여 발생하는 오류로 core-js 3 버전대를 설치해주면 해결된다.

```
> yarn add core-js@3
```
