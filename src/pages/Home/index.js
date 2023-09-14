import React, { useState, useRef } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Burguer1 from '../../assets/burguer1.png'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input/style'
import { Container } from '../../components/Container'

import { H1 } from '../../components/Tittle'
import { Image, InputBox, Label } from "./style"


export function Home() {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    const inputOrder = useRef()
    const inputName = useRef()


    async function addNewUser() {
        const data = await axios.post("http://localhost:3001/order", {
            order: inputOrder.current.value,
            name: inputName.current.value,
        })
        setOrders([...orders, data])
        navigate('/orders')
    }

    return (
        <Container>
            <Image src={Burguer1} alt='burguer-image'></Image>

            <H1>Faça seu pedido!</H1>

            <InputBox>
                <Label className='first-label'>Pedido</Label>
                <Input ref={inputOrder} placeholder="1 X-Salada, 1 Coca" />


                <Label >Nome do Cliente</Label>
                <Input ref={inputName} placeholder="Roger" />
            </InputBox>
            <Button onClick={addNewUser}>Novo Pedido</Button>
        </Container>

    )
}