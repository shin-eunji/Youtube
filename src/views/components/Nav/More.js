import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";

function More (props) {

    const {} = props;

    return (
        <Container>
            <Title>YOUTUBE 더보기</Title>
        </Container>
    )
}

const Container = styled.div`
`
const Title = styled.div`
    padding: ${pxToRem(8)} ${pxToRem(24)};
    font-size: ${pxToRem(14)};
    font-weight: 500;
    color: #606060;
`;
export default More;