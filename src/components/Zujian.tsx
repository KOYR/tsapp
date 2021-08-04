import React from 'react'

interface IZujianProps {
    name?: string
}
const defaultProps = {
    name: 'pipi'
}

const Zujian: React.FC<IZujianProps> = ({ name }: any) => {
    return <h2>{name}</h2>
}

Zujian.defaultProps = defaultProps

export default Zujian