import React from 'react'
import Tile from './components/Tiles/Tile'

const App = () => {
    
        

    let h = window.prompt('please enter value of height')
    let w = window.prompt('please enter width')
    let height = h *32
    let width = w *32

    const size = {height, width}
    


    return (
        <div  className='App'  >
            <Tile size={size} />
        </div>
    )
}

export default App
