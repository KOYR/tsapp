# redux 的处理

-   combineReducers 的作用
    > 给这种 state 结构写 reducer 的方式是分拆成多个 reducer，拆分之后的 reducer 都是相同的结构（state, action），并且每个函数独立负责管理该特定切片 state 的更新。多个拆分之后的 reducer 可以响应一个 action，在需要的情况下独立的更新他们自己的切片 state，最后组合成新的 state。
-   参考
    https://doc.codingdict.com/redux/recipes/reducers/UsingCombineReducers/

# 修改 app 文件内容

配置基本属性
