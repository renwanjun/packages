# try-catch-loader

自动为 async-await 函数添加 try-catch 错误捕捉逻辑。

例如：

```javascript
async function func() {
  await asyncFunc();
}
```

编译后

```javascript
async function func() {
  try {
    await asyncFunc();
  } catch (err) {
    console.log(err);
  }
}
```

## 思路

借助 `@babel/parser`和`@babel/traverse`包

- `@babel/parser`： 将接收到文件转成 AST 抽象语法树
- ` @babel/traverse`：通过 `@babel/traverse `可以传入一个 AST 树和一些钩子函数，随后深度遍历传入的 AST 树，当遍历的节点和钩子函数的名字相同时，会执行对应的回调。
- `@babel/types`：可以理解为 babel 版的 loadsh 库，它提供了很多和 AST 的 Node 节点相关的辅助函数，我们需要用到其中的 tryStatement 方法，即创建一个 TryStatement 的 Node 节点
