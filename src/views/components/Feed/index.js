import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from "react-router-dom";

import Home from "./Home";
import Trending from "./Trending";
import Subscribe from "../Nav/Subscribe";
import Library from "./Library";

function Feed (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/feed/trending'} component={Trending}/>
                <Route path={'/feed/subscriptions'} component={Subscribe}/>
                <Route path={'/feed/library'} component={Library}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Feed;