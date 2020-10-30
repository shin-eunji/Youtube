import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";

function Info(props) {

    const {
        data
    } = props;

    return (
        <Container>
            <SiteMap>
                <SiteItem>
                {
                    data.slice(0, 7).map((item, index) => <Item key={index}>{data.name}</Item>)
                }
                </SiteItem>
                <SiteItem>
                {
                    data.map((item, index) => <Item key={index}>{item.name}</Item>)
                }
                </SiteItem>
            </SiteMap>
            <Company>
                © 2020 Google LLC

                회사명: Google LLC
                CEO: Sundar Pichai
                주소: 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
                전화: 080-822-1450 (무료)
            </Company>
        </Container>
    )
}

const Container = styled.div`
`
const SiteMap = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: ${pxToRem(12)} ${pxToRem(24)};
`;
const SiteItem = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    margin-bottom: ${pxToRem(12)};
`;
const Item = styled.div`
  display:block;
  color: #606060;
  font-size: ${pxToRem(13)};
  font-weight: 500;
  margin-right: ${pxToRem(8)};
`;
const Company = styled.div`
    color: #909090;
    font-size: ${pxToRem(13)};
    font-weight: 400;
    line-height: 1.6;
    padding: ${pxToRem(16)} ${pxToRem(24)};
`;
export default Info;