import React from 'react'
import Sprite from '../Sprite/Sprite'

const Enemy = ({sprite, data, position}) => {
    return (
        <div>
            <Sprite image={sprite} position={position} data={data} />
            
        </div>
    )
}

export default Enemy
