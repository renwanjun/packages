# npm 包 `hello`

## 功能

提供一个 sum 函数

## 发布 hello 模块

npm publish --access=public

## 使用 hello 包

npm install --save @renwanjun/hello@1.0.0 --registry=https://npm.pkg.github.com/

#github
https://github.com/renwanjun/pacakges/npm/hello

### 使用方法

```javascript
let formatter = require("./index");
hello.sum(1, 2);
console.info(hello.sum(1, 2));
```

## 已发布版本 version

- 1.0.0
- 1.0.1
