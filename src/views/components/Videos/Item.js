import React from 'react';
import styled from 'styled-components';
import Video from "./Video";

function Item (props) {

    const {
        snippet = {}
    } = props;

    return (
        <Container>
            <Video/>
            <Thumb>
                <img src={snippet.thumbnails?.medium?.url} alt=""/>
            </Thumb>
            <Text>
                <Title>{snippet.title}</Title>
                <Description>{snippet.description}</Description>
            </Text>
        </Container>
    )
}

const Container = styled.div`
`
const Thumb = styled.div`
    
`;
const Text = styled.div`
    
`;
const Title = styled.div`
    
`;
const Description = styled.div`
    
`;



export default Item;