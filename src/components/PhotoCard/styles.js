import styled from "styled-components"
import {fadeInKeyframes } from "../../styles/animations"

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
    margin-top: 20px;
`

export const Img = styled.img`
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    animation: 1s ${fadeInKeyframes} ease;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`

export const Button = styled.button`
    display: flex; 
    align-items: center;
    padding-top: 8px;
    border:none ;
    background: #bbb;
    border-radius: 10px;
    margin-top: 5px;
    & svg {
        margin-right: 4px;
    }`