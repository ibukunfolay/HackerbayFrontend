import React from 'react'
import Enemy from '../Enemy/Enemy'

const Sprites = ({skin, position}) => {
    const data={h: 32, w: 32,}
    

    return (
        <div>
            <Enemy sprite={`/${skin}.png`} data={data}  position={position} />
            
        </div>
    )
}

export default Sprites