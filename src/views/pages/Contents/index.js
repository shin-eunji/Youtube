import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import axios from 'axios';
import {pxToRem} from "../../../common/Text/Text.Styled";

function Contents (props) {

    const {} = props;


    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/videos')
            .then(res => {
                const data = res.data;
                console.log("data", data);
            })
    }, [])

    return (
        <Container>
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    top: ${pxToRem(56)};
    left: ${pxToRem(240)};
    width: 100%;
    height: 100%;
`
const Item = styled.div`
    
`;
export default Contents;