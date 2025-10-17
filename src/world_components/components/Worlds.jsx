import React, { use, useState } from 'react';
import World from './World';

const Worlds = ({bottolsFech}) => {
    const [card,setCard] = useState([])

    const worlds = use(bottolsFech)
    const handleCard = (world)=>{
        const newCard =[...card,setCard]
        setCard(newCard)
        
    }
    
    
    return (
        <div>
            <h1>Hello World {worlds.length}</h1>
            <p>Add Cart: {card.length}</p>
            <div className='grid'>
                {
                worlds.map(world=><World key={world.id} world={world} handleCard={handleCard}></World>)
            }
            </div>
        </div>

    );
};

export default Worlds;