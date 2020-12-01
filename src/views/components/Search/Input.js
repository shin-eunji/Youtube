import React, {useState} from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {navigate} from "../../../lib/History";

function Input (props) {

    const {} = props;

    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = () => {
        navigate(`/results?search_query=${value}`)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit()
        }
    }

    return (
        <Container type="text"
                   placeholder={'검색'}
                   value={value}
                   onChange={handleChange}
                   onKeyPress={handleKeyPress}
        >
        </Container>
    )
}

const Container = styled.input`
    flex: 1;
    border: none;
    background: #fff;
    padding: ${pxToRem(2)} ${pxToRem(6)};
    outline: none;
    background: none;
    &:focus {
        outline: none;
        background: none;
        box-shadow: none;
    }   
`;
export default Input;