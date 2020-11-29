import React from 'react';
import styled from 'styled-components';

function List (props) {

    const {
        snippet,
    } = props;

    const optionParams={
        q:"kakao",
        part:"snippet",
        maxResults:2
    };

    return (
        <Container>
            {optionParams}
            <Video>{snippet.thumbnails.medium}</Video>
            <Text>
                <Title>{snippet.title}</Title>
                <Description>{snippet.description}</Description>
            </Text>
        </Container>
    )
}

const Container = styled.div`
    
`
const Video = styled.div`
`;
const Text = styled.div`
    
`;
const Title = styled.div`
    
`;
const Description = styled.div`
    
`;
export default List;