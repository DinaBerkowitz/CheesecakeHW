

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from "dayjs";
import axios from 'axios';

const toppings = ['Chocolate Chips', 'Caramel Drizzle', 'Whipped Cream', 'Pecans', 'Almonds', 'Toasted Coconut', 'Graham Cracker Crumble', 'Cookie Dough', 'Mint Chocolate Chip', 'Caramelized Bananas', 'Rainbow Sprinkles', 'Powdered Sugar', 'White Chocolate Shavings', 'Peanut Butter Drizzle', 'Dark Chocolate Drizzle'];
const base = ['Classic', 'Chocolate', 'Red Velvet', 'Brownie'];

const Order = () => {

    const [order, setOrder] = useState({ name: '', email: '', quantity: 1, base: '', toppings: [], specialRequest: '', deliveryDate: '', total: '' });
    const navigate = useNavigate();

    const total = (order.quantity * 49.99) + (order.toppings.length * 3.95 * order.quantity);

    const onTextChange = e => {
        const copy = { ...order };
        copy[e.target.name] = e.target.value;
        setOrder(copy);
    }

    const onCheck = topping => {
        let list = order.toppings.includes(topping) ? [...order.toppings.filter(t => t !== topping)] : [...order.toppings, topping];
        setOrder({ ...order, toppings: list })
    }

        const onSubmitClick = async () => {
            order.total = total;
            order.toppings = order.toppings.map(t => ' ' + t).toString();
            await axios.post('/api/cheesecake/add', order);
            navigate('/success');
        }

    const isValid = (order.name && order.email && order.deliveryDate);

        return (
            <div className="container">
                <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name='name' className="form-control" value={order.name} onChange={onTextChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" value={order.email} onChange={onTextChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                            <select className="form-select" name="base" onChange={onTextChange}>
                                <option>Choose...</option>
                                {base.map(chosenFlavor => <option key={chosenFlavor}>{chosenFlavor}</option>)}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Toppings (each additional topping is $3.95)</label>
                            {toppings.map(topping => <div className="form-check"  name="toppigs" onChange={() => onCheck(topping)}>
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label" >{topping}</label>
                            </div>)}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Special Requests</label>
                            <textarea className="form-control" rows="3" name="specialRequest" onChange={onTextChange} value={order.specialRequest}></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <input type="number" className="form-control" min="1" value={order.quantity} name="quantity" onChange={onTextChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Delivery Date</label>
                            <input type="date" className="form-control" onChange={onTextChange} value={order.deliveryDate} name='deliveryDate' />
                        </div>
                        <button type="submit" disabled={isValid ? false : true} className="btn btn-primary" onClick={onSubmitClick}>Submit Order</button>
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-4">Live Preview</h2>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Your Custom Cheesecake</h5>
                                <p className="card-text">Base: {order.base}</p>
                                <p className="card-text">Toppings: {order.toppings.map(t => ' ' + t).toString()}</p>
                                <p className="card-text">Special Requests: {order.specialRequest}</p>
                                <p className="card-text">Quantity: {order.quantity}</p>
                                <p className="card-text">Delivery Date:{dayjs(order.deliveryDate).format("MM/DD/YYYY")} </p>
                                <p className="card-text">Total: ${total}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
export default Order;