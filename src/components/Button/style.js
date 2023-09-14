import styled from 'styled-components'

export const Button = styled.button`
    width: 342px;
    height: 68px;
    left: 0px;
    top: 0px;

    background: #D93856;

    position: static;

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    
    color: #FFFFFF;

    cursor: pointer;
    border: none;
    outline: none;

    ${props => props.isBack && 'background: rgba(255, 255, 255, 0.14);'}

    :hover { 
        opacity: 0.9;
    }

    :active { 
        opacity: 0.7;
    }
`