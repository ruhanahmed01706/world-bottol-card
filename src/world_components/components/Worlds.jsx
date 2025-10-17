import React, { use } from 'react';
import World from './World';

const Worlds = ({bottolsFech}) => {
    const worlds = use(bottolsFech)
    
    
    return (
        <div>
            <h1>Hello World {worlds.length}</h1>
            <div className='grid'>
                {
                worlds.map(world=><World key={world.id} world={world}></World>)
            }
            </div>
        </div>

    );
};

export default Worlds;