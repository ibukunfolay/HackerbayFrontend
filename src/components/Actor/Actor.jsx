import React from 'react'
import Sprite from '../Sprite/Sprite'

const Actor = ({sprite, data, step = 0, dir = 0, position={x:0, y:0}}) => {
    const {h, w} = data
    return (
        <div>
            <Sprite image={sprite} position={position} data={{
                x: step * w,
                y: dir * h,
                h,
                w,
            }} />
        </div>
    )
}

export default Actor
