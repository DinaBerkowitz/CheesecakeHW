


import { useEffect, useState } from 'react';
import axios from 'axios';
import Cheesecakerow from './Cheesecakerow';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getCheesecakes = async () => {
            const { data } = await axios.get('/api/cheesecake/getall');
            setOrders(data);
        }

        getCheesecakes();
    }, []);
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <table className="table text-center shadow-lg">
                    <thead>
                        <tr>
                            <th>Name/Email</th>
                            <th>Base</th>
                            <th>Toppings</th>
                            <th>Special Requests</th>
                            <th>Quantity</th>
                            <th>Delivery Date</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(o => <Cheesecakerow order={o} key={o.id} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Orders;