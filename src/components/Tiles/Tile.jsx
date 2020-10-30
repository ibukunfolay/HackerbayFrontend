import React from 'react'
import Player from '../Player/Player'
import Sprites from '../Sprites/Sprites'

const Tile = ({size}) => {

    const {height, width} = size
    const tiles =[]
    let id = 0

    for(let y = 0; y < height; y = y + 32){
        const row = []
        for(let x = 0; x < width; x = x + 32){
            row.push({
                x,y, id: id++
            })
        }
        tiles.push(row)
    }

    const getRandomCordinates = () =>{
        let min = 0
        let max = 320
        let x = Math.floor((Math.random()*(max-min + 1 ) + min )/2)*2
        let y = Math.floor((Math.random()*(max-min + 1 ) + min )/2)*2
        return [x,y]
    }

    const position = getRandomCordinates()


    return (
        <div>
            {
                tiles.map((row,y)=> (
                    <div style={{display: 'flex'}}>
                        {
                            row.map((tile, x) => (
                                <div 
                                    style={{
                                        borderTop: '1px solid black',
                                        borderRight: '1px solid black',
                                        borderBottom: '1px solid black',
                                        borderLeft: '1px solid black',
                                        backgroundColor: 'white',
                                        boxSizing: 'border-box',
                                        height: 32,
                                        width: 32,
                                    }}
                                >
                                    <Player skin={'m2'} size={size} />
                                    <Sprites skin={'e1'} position={position}/>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
            
        </div>
    )
}

export default Tile
