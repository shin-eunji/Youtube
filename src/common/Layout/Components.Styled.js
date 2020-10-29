import styled from 'styled-components'
import {generateMedia} from "styled-media-query";
import {pxToRem} from "../Text/Text.Styled";

export const customMedia = generateMedia({
    desktop: "1170px",
    tablet: "830px",
    mobile: "500px"
});

export const ContentContainer = styled.div`
    width: 100%;
    padding: 0 16px;
    margin: 0 auto;
    
    ${customMedia.lessThan('desktop')`
        max-width: 830px;
    `}
    ${customMedia.lessThan('tablet')`
        max-width: 830px;
        width: 100%;    
    `}
    ${customMedia.lessThan('mobile')`
        max-width: 530px;
        width: 100%;    
    `}
`;

export const NavContainer = styled.div`
    width: 100%;
    margin: ${pxToRem(12)} 0;
    border-bottom: 1px solid #eee;
`;