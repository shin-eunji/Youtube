import React from 'react';
import styled from 'styled-components';
import {navigate} from "../../../lib/History";
import {pxToRem} from "../../../common/Text/Text.Styled";
import cn from 'classnames';

function Item (props) {

    const {
        icon,
        to,
        name,
        isActive,
    } = props;

    return (
        <Container onClick={() => navigate(to)}
                   className={cn('isActive', {isActive})}
        >
            <Icon>{icon}</Icon>
            <Text>{name}</Text>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    height: ${pxToRem(40)};
    padding: 0 ${pxToRem(24)};
    cursor: pointer;
`
const Icon = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
    margin-right: ${pxToRem(24)};
    svg {
        width: auto;
        height: auto;
        color: #606060;
        font-size: ${pxToRem(22)};
    }
    &.isActive {
        color: #ff0000;
        background: rgba(0,0,0,.1);
    }
`;
const Text = styled.div`
    color: #030303;
    font-size: ${pxToRem(14)};
    font-weight: 400;
`;
export default Item;