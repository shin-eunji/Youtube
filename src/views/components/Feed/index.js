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
                <Route path={'/Feed/trending'} component={Trending}/>
                <Route path={'/Feed/subscriptions'} component={Subscribe}/>
                <Route path={'/Feed/library'} component={Library}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Feed;