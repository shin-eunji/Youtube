import React from 'react';
import styled from 'styled-components';
import Item from "./Item";
import {pxToRem} from "../../../common/Text/Text.Styled";

function Setting (props) {

    const {
        data
    } = props;

    return (
        <Container>
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
const NavItem = styled.div`
    padding: ${pxToRem(12)} 0;
    border-bottom: 1px solid #eee;
`;
export default Setting;