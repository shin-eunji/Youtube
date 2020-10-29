import React from 'react';
import styled from 'styled-components';
import Routes from "./Routes";

import Header from "./views/components/Header";
import Nav from "./views/components/Nav";



function App (props) {

    const {} = props;

    return (
        <Container>
            <Header/>
            <Nav/>
            <Routes/>
        </Container>
    )
}

const Container = styled.div`
`
export default App;