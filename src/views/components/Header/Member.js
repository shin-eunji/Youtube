import React from 'react';
import styled from 'styled-components';
import {FaUserCircle} from "react-icons/all";
import {pxToRem} from "../../../common/Text/Text.Styled";

function Member (props) {

    const {} = props;

    return (
        <Container>
            <LoginButton>
                <Icon/>
                <Text>로그인</Text>
            </LoginButton>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`
const LoginButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    width: ${pxToRem(94)};
    height: ${pxToRem(40)};
    background: #fff;
    border: 1px solid #065fd4;
    color: #065fd4;
`;
const Icon = styled(FaUserCircle)`
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
`;
const Text = styled.div`
    font-size: ${pxToRem(14)};
    font-weight: 400;
    margin-left: ${pxToRem(8)};
`;
export default Member;