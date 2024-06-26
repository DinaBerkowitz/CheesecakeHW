

import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from "dayjs";

const OrderDetails = () => {

    const { id } = useParams();
    const [order, setOrder] = useState({});
    const { name, email, base, toppings, specialRequest, quantity, deliveryDate, total } = order;

    useEffect(() => {
        const getOrderbyId = async () => {
            const { data } = await axios.get(`/api/cheesecake/getone?id=${id}`);
            setOrder(data)
        }
        getOrderbyId();
    }, [])

    return (
        <div className="card text-center shadow p-3 mb-5 bg-body rounded" >
            <div className='card-body'>
                <h3 className="card-title fw-bold">{name}</h3>
                <p className='card-text fs-5'>{email}</p>
                <p className='card-text fs-5'>Base: {base}</p>
                <p className='card-text fs-5'>Toppings: {toppings}</p>
                <p className='card-text fs-5'>Special Request: {specialRequest}</p>
                <p className='card-text fs-5'>Quanitity: {quantity}</p>
                <p className='card-text fs-5'>Delivery Date: {dayjs(deliveryDate).format("MM/DD/YYYY")}</p>
                <p className='card-text fs-5'>Total Cost: {total}</p>
                <Link to='/orders'>
                    <button className='btn btn-primary'>Back to Orders</button>
                </Link>
            </div>
        </div>)
}

export default OrderDetails;