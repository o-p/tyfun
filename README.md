[![CircleCI](https://circleci.com/gh/o-p/tyfun.svg?style=svg)](https://circleci.com/gh/o-p/tyfun)

# TYFUN

1. 獨立使用

  ```ts
  import compose from 'tyfun/compose'

  compose(
    Math.abs,
    Math.min
  )
  ```

1. 整批匯入 (是否有辦法達成? package main 在 ts 使用 a.index.ts; js 使用 b.index.js )

  ```ts
  import { curry, pipe } from 'tyfun'

  pipe(
    curry(Math.min, ...presets),
    curry(Math.log, 5)
  )
  ```

## Build

1. copy package.json (for publish) ............ 移除相依套件
1. copy src/*.ts -> build/ .................... 複製 .ts
1. 產出 build/tyfun.ts, export all modules ..... 打包 .ts (低優先)
1. tsc src/*.ts -> build/js ................... 轉譯 .js (非必要)
1. pack build/js/*.js -> build/dist/tyfun.js .. 打包 .js (非必要)
