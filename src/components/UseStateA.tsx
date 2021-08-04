import React from "react"

// interface IUseStateAProps {
//     count?: number
// }
// const defaultProps = {
//     count: 0
// }

export default function UseStateA() {

    const [count, setCount] = React.useState<number>(0);
    return (
        <div>
            <h4>数量: {count}</h4>
            <button onClick={() => { setCount(count + 1) }}>增加</button>
        </div>
    )
}
