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
   `npm i bundle-loader --save`
