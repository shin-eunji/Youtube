import React from 'react';
import styled from 'styled-components';
import {BiSearchAlt2, RiKeyboardBoxFill} from "react-icons/all";
import {pxToRem} from "../../../common/Text/Text.Styled";

function Search (props) {

    const {} = props;

    return (
        <Container>
            <Input type="text" placeholder={'검색'} />
            <Keyboard/>
            <Button>
                <Icon/>
            </Button>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: ${pxToRem(640)};
    height: ${pxToRem(30)};
    border: 1px solid #ccc;
    border-radius: ${pxToRem(1)};
`
const Input = styled.input`
    flex: 1;
    border: none;
    background: #fff;
    padding: ${pxToRem(2)} ${pxToRem(6)};
    &:focus {
        outline: none;
        box-shadow: none;
    }   
`;
const Keyboard = styled(RiKeyboardBoxFill)`
    margin: 0 ${pxToRem(8)};
    width: ${pxToRem(18)};
    height: ${pxToRem(18)};
    color: #666;
    cursor: pointer;
`;
const Button = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    width: ${pxToRem(64)};
    height: 100%;
    background: #f4f4f4;
    border: none;
    border-left: 1px solid #eee;
    cursor: pointer;
`;
const Icon = styled(BiSearchAlt2)`
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    color: #777;
`;
export default Search;