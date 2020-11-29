import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import {pxToRem} from "../../../common/Text/Text.Styled";
import {videoActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";
import List from "./List";

function Videos (props) {

    const {} = props;

    const {list} = useSelector(state => state.video)

    useEffect(() => {
        videoActions.playList()
    }, [])

    return (
        <Container>
            {
                list.map((item, index) => <List key={index} {...item} />)
            }
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
export default Videos;