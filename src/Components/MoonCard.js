import React from 'react';
import './MoonCard.scss';
import{ Card, Image } from 'semantic-ui-react';
import styled from 'styled-components';

const Title = styled.h2`
color:red;
`


function MoonCard(props) {
    console.log(props);
    return (
        <Card id="moon-card">
            <Image src={props.url}/>
            <Card.Content>
                <Title>{props.title}</Title>
                <div>{props.date}</div>
                <Card.Description className='content'>
                    {props.explanation}
                </Card.Description>
            </Card.Content>    
        </Card>
    );
}

export default MoonCard;