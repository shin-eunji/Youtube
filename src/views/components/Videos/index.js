import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import {pxToRem} from "../../../common/Text/Text.Styled";
import {videoActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";
import List from "./List";
import Item from "./Item";

function Videos (props) {

    const {} = props;

    const {list} = useSelector(state => state.video)

    useEffect(() => {
        videoActions.playList({
            q: '슈카월드',
            part: 'snippet',
            maxResult: 10
        })
    }, [])

    const renderItem = ({snippet}, index) => {
        return <Item snippet={snippet}/>
    }

    return (
        <Container>
            <List data={list} render={renderItem}/>
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