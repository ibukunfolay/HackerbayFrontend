import React from 'react'
import Actor from '../Actor/Actor'
import useKeyPress from '../../hooks/useKeyPress/useKeyPress'
import useWalk from '../../hooks/useWalk/useWalk'

const Player = ({skin, size}) => {
    const data={h: 32, w: 32,}
    const {walk, dir, step, position} = useWalk({maxSteps: 3, size})

    useKeyPress((e)=>{
        walk(e.key.replace('Arrow', "").toLowerCase())
        e.preventDefault()
    })
    return (
        <div>
            <Actor sprite={`/${skin}.png`} data={data} step={step} dir={dir} position={position} />
            
        </div>
    )
}

export default Player
