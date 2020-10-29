import React from 'react';
import styled from 'styled-components';

import {CgMenuGridR, FiMoreVertical, RiVideoAddFill} from "react-icons/all";
import {pxToRem} from "../../../common/Text/Text.Styled";

function More(props) {

    const {} = props;

    return (
        <Container>
            <Video/>
            <App/>
            <Setting/>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    & > * {
        width: ${pxToRem(24)};
        height: ${pxToRem(24)};
        margin: ${pxToRem(8)} ${pxToRem(14)};
        color: #666;
    }
`;
const Video = styled(RiVideoAddFill)`
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
`;
const App = styled(CgMenuGridR)`
`;
const Setting = styled(FiMoreVertical)`
`;
export default More;