import React from 'react';

const World = ({world,handleCard}) => {
    
    return (
        <div className='card'>
            <img  src={world.image} alt="" />
            <h4>Name: {world.name}</h4>
            <p>Color: {world.color}</p>
            <p>Matrial: {world.material}</p>
            <button onClick={()=>handleCard(world)}>Buy Now</button>
        </div>
    );
};

export default World;