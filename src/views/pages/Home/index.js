import React from 'react';
import styled from 'styled-components';
import Videos from "../../components/Videos";

function Home (props) {

    const {} = props;

    return (
        <Container>
            <Videos/>
        </Container>
    )
}

const Container = styled.div`
`
export default Home;