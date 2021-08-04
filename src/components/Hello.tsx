import React from 'react'

//基本
// const Hello = (props: any) => {
//     return <div>{props.nameStr}</div>
// }
// export default Hello

//优化  一些共用的属性
interface IHelloProps {
    nameStr?: string;
}

const Hello: React.FC<IHelloProps> = (props: any)  => {
    return <div>{props.nameStr}</div>
}

//设置默认值 如果props中没有传进来 默认使用defaultProps的数据
Hello.defaultProps = {
    nameStr: 'default Texgt'
}
export default Hello