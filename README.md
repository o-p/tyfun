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

5. Use it in browser

  The bundle file for browser usage is under `<tyfun>/dist/tyfun.js`, load it and it generate a global `TyFun` contains TyFun functions.

## Try it Out

Instead of installing the package and bootstrap an environment for only testing, you can directly clone the repository and try the functions in the example folder.

```bash
$ git clone https://github.com/o-p/tyfun.git test-tyfun

# Go to the folder where env files are already prepared
$ cd test-tyfun/example

# Install Packages
$ yarn
```

Then choose a topic folder you like to try and edit.

After editing, choose a tool to transpile the sources:

```bash
## For your application case, if prefer Webpack:
$ yarn webpack && cd build/webpack

## Or prefer to transpile by tsc(typescript) directly:
$ yarn tsc && cd build/tsc
```

## TODO

- [ ] Document
