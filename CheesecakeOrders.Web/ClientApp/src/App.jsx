import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Order from './Pages/Order';
import Success from './Pages/Success';
import Orders from './Pages/orders';
import cheesecakerow from './Pages/Cheesecakerow';
import OrderDetails from './Pages/OrderDetails';


const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/order' element={<Order />} />
                <Route path='/success' element={<Success />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/OrderDetails/:id' element={<OrderDetails />} />
            </Routes>
        </Layout>
    );
}

export default App;