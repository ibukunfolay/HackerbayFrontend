import React from 'react'

const Sprite = ({image, data, position}) => {
    const {x,y,h,w} = data
    return (
        <div style={{
            position: 'absolute',
            top: position.y,
            left: position.x,
            height: `${h}px`,
            width: `${w}px`,
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'norepeat',
            backgroundPosition: ` -${x}px -${y}px`
        }}>
            
        </div>
    )
}

export default Sprite
