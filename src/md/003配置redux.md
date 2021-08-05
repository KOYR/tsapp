# 配置 redux

1. 安装依赖
   `yarn add react-redux redux redux-thunk immutable history --save`
   `yarn add redux-devtools --dev`
2. 装饰器配置 @connect
   ` yarn add @babel/plugin-proposal-decorators --save`

3. 在 package.json 里面的 plugins 添加配置
   ["@babel/plugin-proposal-decorators", { "legacy": true }]

# 配置路由

1. 使用 connected-react-router 绑定 react-router 到 redux

`yarn add connected-react-router`
`yarn add react-router`
`yarn add react-router-dom`

# 按需加载

1. bundle-loader
   `yarn add bundle-loader --save`

# 暴露 config

1. 安装依赖`yarn add eject`

2. 运行 yarn eject
    > 第一次

```Bash
pipi:tsapp xfn-pp$ yarn eject
yarn run v1.22.4
$ react-scripts eject
NOTE: Create React App 2+ supports TypeScript, Sass, CSS Modules and more without ejecting: https://reactjs.org/blog/2018/10/01/create-react-app-v2.html

✔ Are you sure you want to eject? This action is permanent. … no //选否
Close one! Eject aborted.//被禁止了

pipi:tsapp xfn-pp$ yarn eject
yarn run v1.22.4
$ react-scripts eject
NOTE: Create React App 2+ supports TypeScript, Sass, CSS Modules and more without ejecting: https://reactjs.org/blog/2018/10/01/create-react-app-v2.html

✔ Are you sure you want to eject? This action is permanent. … yes //选是
This git repository has untracked files or uncommitted changes: //提醒文件有改动 需要先上传到远程

package.json
M tsconfig.json
M yarn.lock
package-lock.json
src/md/

Remove untracked files, stash or commit any changes, and try again.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

//又运行了
pipi:tsapp xfn-pp$ git add .
pipi:tsapp xfn-pp$ git commit -m 'before yarn add eject'
// 再启动并且选y就不会报错了
pipi:tsapp xfn-pp$ yarn eject
yarn run v1.22.4
$ react-scripts eject
NOTE: Create React App 2+ supports TypeScript, Sass, CSS Modules and more without ejecting: https://reactjs.org/blog/2018/10/01/create-react-app-v2.html

✔ Are you sure you want to eject? This action is permanent. … yes
Ejecting...
......
....
...
success Saved lockfile.
Ejected successfully!

Staged ejected files for commit.

Please consider sharing why you ejected in this survey:
  http://goo.gl/forms/Bi6CZjk1EqsdelXk1

✨  Done in 14.61s.
```
