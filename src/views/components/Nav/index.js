import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

import {pxToRem} from "../../../common/Text/Text.Styled";

import Subscribe from "./Subscribe";
import More from "./More";
import Setting from "./Setting";
import Info from "./Info";
import Feed from "./Feed";

function Nav (props) {

    const {} = props;

    return (
        <Container>
            <Feed/>
            <Subscribe/>
            <More/>
            <Setting/>
            <Info/>
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    top: ${pxToRem(56)};
    left: 0;
    width: ${pxToRem(240)};
    height: calc(100% - ${pxToRem(56)});
    background: #fff;
    
`
export default withRouter(Nav);