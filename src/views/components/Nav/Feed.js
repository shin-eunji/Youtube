import React from 'react';
import styled from 'styled-components';

import {NavContainer} from "../../../common/Layout/Components.Styled";
import {feedList} from './FeedList';

import Item from "./Item";
import {pxToRem} from "../../../common/Text/Text.Styled";

function Feed (props) {

    const {} = props;

    return (
        <Container>
            <LNavContainer>
                <NavItem>
                {
                    feedList.map((item, index) => <Item key={index} {...item} />).slice(0,3)
                }
                </NavItem>
                <NavItem>
                {
                    feedList.map((item, index) => <Item key={index} {...item} />).slice(3,12)
                }
                </NavItem>
            </LNavContainer>
        </Container>
    )
}

const Container = styled.div`
`
const LNavContainer = styled(NavContainer)`
    overflow-y: scroll;
`;
const NavItem = styled.div`
    padding: ${pxToRem(12)} 0;
    border-bottom: 1px solid #eee;
`;
export default Feed;