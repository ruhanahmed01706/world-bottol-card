import React from 'react';

const World = ({world}) => {
    
    return (
        <div className='card'>
            <img  src={world.image} alt="" />
            <h4>Name: {world.name}</h4>
            <p>Color: {world.color}</p>
            <p>Matrial: {world.material}</p>
        </div>
    );
};

export default World;