import styled from 'styled-components'

export const Image = styled.img`
`
export const OrdersBox = styled.div`
`
export const User = styled.li`
    width: 342px;
    height: 101px;

    padding: 17px 15px 13px 27px;
    margin-bottom: 18px;

    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;

    display: flex;
    justify-content: space-between;

    div { 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    p { 
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: #FFFF
    }

    button { 
        background: none;
        border: none;
        outline: none; 
        cursor: pointer;
    }
`