import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import Item from "./Item";

function More (props) {

    const {
        data
    } = props;

    return (
        <Container>
            <Title>YOUTUBE 더보기</Title>
            <NavItem>
                {
                    data.map((item, index) => <Item key={index} {...item} />)
                }
            </NavItem>
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
const NavItem = styled.div`
    padding: ${pxToRem(12)} 0;
    border-bottom: 1px solid #eee;
`;
export default More;