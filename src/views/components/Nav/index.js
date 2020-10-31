import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

import {pxToRem} from "../../../common/Text/Text.Styled";

import Subscribe from "./Subscribe";
import More from "./More";
import Setting from "./Setting";
import Info from "./Info";
import Feed from "./Feed";
import {feedList} from "./FeedList";
import {NavContainer} from "../../../common/Layout/Components.Styled";

function Nav (props) {

    const {} = props;

    return (
        <Container>
            <LNavContainer>
                <Feed data={feedList.feed}/>
                <Subscribe/>
                <More data={feedList.more}/>
                <Setting data={feedList.setting}/>
                {/*<Info data={feedList.info}/>*/}
            </LNavContainer>
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    top: ${pxToRem(56)};
    left: 0;
    width: ${pxToRem(240)};
    height: calc(100% - ${pxToRem(56)});
    background: #fff;
    overflow-y: scroll;
    
`
const LNavContainer = styled(NavContainer)`
`;
export default withRouter(Nav);