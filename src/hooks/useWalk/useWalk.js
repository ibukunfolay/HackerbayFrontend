import {useState} from 'react'

export default function useWalk ({maxSteps, size}){
    const {height, width} = size
    const [position, setPosition] = useState({x: (width/2) + 1, y: (height/2) + 1})
    const [dir, setDir] = useState(0)
    const [step, setStep] = useState(0)

    const directions = {
        up: 3,
        down: 0,
        left: 1, 
        right: 2,
    }

    const stepSize = 32

    const modifier = {
        down: {x: 0, y: stepSize},
        left: {x: -stepSize, y: 0},
       right: {x: stepSize, y: 0},
        up: {x: 0, y: -stepSize},
    }

    function walk (dir){
        setDir(prev =>{
            if (directions[dir] === prev) move(dir)
            return directions[dir]
        })
        setStep(prev=> (prev < maxSteps -1 ? prev + 1 : 0))
    }

    function move(dir){
        setPosition(prev =>({
            x: prev.x + modifier[dir].x,
            y: prev.y + modifier[dir].y
        }))
    }

    return {
        walk,
        position,
        dir,
        step,
    }
}