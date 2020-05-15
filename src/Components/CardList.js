import React from 'react';

import Card from '../Components/Card';

const CardList =  ({Dogs}) => {
    return (
        <div>
        {
    Dogs.map((user, i) => {
        return (
          <Card 
        key={i} 
        id={Dogs[i].id}
         name={Dogs[i].name} 
         email={Dogs[i].email} />
    )
    })
}
</div>
)
}

export default CardList;