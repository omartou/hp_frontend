import React from 'react';
import { Card, NameOnCard } from '../styled_components/index'

const Character = (props) => {
    const { name, charId, species  } = props;
    const url = "/character/" + charId
    
    // console.log(props);
    return (
        <Card to={url}>
            <NameOnCard>{name}</NameOnCard>
            <p>{species}</p>
        </Card>
    )
}

export default Character;
