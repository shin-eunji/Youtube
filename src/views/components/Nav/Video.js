import React from 'react';
import styled from 'styled-components';

import {NavContainer} from "../../../common/Layout/Components.Styled";
import {navRoute} from './NavRoute';

import VideoItem from "./VideoItem";

function Video (props) {

    const {} = props;

    return (
        <Container>
            <LNavContainer>
                {
                    navRoute.map((item, index) => <VideoItem key={index} {...item} />)
                }
            </LNavContainer>
        </Container>
    )
}

const Container = styled.div`
`
const LNavContainer = styled(NavContainer)`
    
`;
export default Video;