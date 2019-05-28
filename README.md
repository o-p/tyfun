[![CircleCI](https://circleci.com/gh/o-p/tyfun.svg?style=svg)](https://circleci.com/gh/o-p/tyfun)

# TYFUN

> ### Require a slogan here...
>
> Goals:
>
> 1. TypeScript base, for TypeScript project directly usage.
>
> 1. Also available for plain JavaScript environment.
>
> 1. No dependencies.

## Usage

1. Import single function (TypeScript):

    ```ts
    import compose from 'tyfun/compose' // tyfun/compose.ts

    compose(Math.abs, Math.min)(300, 100, -50) // 50
    ```

2. Import all functions (TypeScript):

    ```ts
    import { compose, reverse } from 'tyfun' // tyfun/index.ts

    compose(reverse, Array.of)([1, 2, 3]) // [3, 2, 1]
    ```

3. Import single function (JavaScript):

    ```js
    import has from 'tyfun/js/has' // tyfun/js/has.js

    has('length')([]) // true
    ```

4. Import all functions (JavaScript)

  ```js
  import { compose, has, reverse } from 'tyfun/js' // tyfun/js/index.js

  const result = compose(reverse, String, has('length'))
  result('') // 'eurt'
  result(Symbol('')) // 'eslaf'
  ```

## TODO

- [ ] Transpile and bundle js/*.js for compatibility
- [ ] Document
