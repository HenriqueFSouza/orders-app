import { Container } from '../../components/Container'
import { H1 } from '../../components/Tittle'
import { Button } from '../../components/Button'

import { Image } from './style'
import Burguer2 from '../../assets/burguer2.png'
import Trash from '../../assets/trash.png'

import { User } from './style'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export function Orders () {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getOrders() {
        const {data: newOders} = await axios.get("http://localhost:3001/order")
        setOrders(newOders)
        }
        getOrders()
    }, [])

   async function deleteOrder (orderId) { 
        await axios.delete(`http://localhost:3001/order/${orderId}`)
        const newOders = orders.filter(order => order.id !== orderId)
        setOrders(newOders)
   }

    function handleGoBack() {
        navigate('/')
    }

    return (
        <Container>

            <Image src={Burguer2} alt='burguer-image'></Image>

            <H1>Pedidos</H1>

            <ul>
                {orders.map(order => (
                    <User key={order.id}>
                        <div>
                            <p>{order.order}</p>  <p><strong>{order.name}</strong></p>
                        </div>
                        <button 
                        onClick={() => deleteOrder(order.id)}
                        >
                            <img src={Trash} alt="lata-de-lixo" />
                            </button>
                    </User>
                ))
                }
            </ul>

            <Button 
            isBack
            onClick={() => handleGoBack()}
            >
                Voltar
            </Button>
        </Container>
    )
}

