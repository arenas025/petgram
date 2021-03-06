import styledComponents from "styled-components"

export const Anchor = styledComponents.a`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
`

export const Img = styledComponents.img`
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgb( 0,0,0,0.2);
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
`