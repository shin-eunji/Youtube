import React from 'react';
import styled from 'styled-components';
import {navigate} from "../../../lib/History";

function VideoItem (props) {

    const {
        icon,
        to,
        name,
    } = props;

    return (
        <Container onClick={() => navigate(to)}>
            <Icon>{icon}</Icon>
            <Text>{name}</Text>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
`
const Icon = styled.div`
    
`;
const Text = styled.div`
    
`;
export default VideoItem;