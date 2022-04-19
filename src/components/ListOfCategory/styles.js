import styledComponents from "styled-components";

export const List = styledComponents.ul`
    display:flex;
    overflow:scroll;
    width:100%
    &::-webkit-scrollbar {
        display: none;
    }
`
export const ListItem = styledComponents.li`
    padding: 0 8px
`