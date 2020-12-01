import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";

import Home from "./views/pages/Home";
import Videos from "./views/components/Videos";


function Routes(props) {

    const {
        q
    } = props;

    return (
        <Switch>
            <Route exact path={'/'} component={Home}></Route>
            <Route exact path={`/results?search_query=${q}`} component={Videos} />
        </Switch>
    )
}

export default Routes;