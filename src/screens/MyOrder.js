import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMyOrder = async () => {
        try {
            const email = localStorage.getItem('userEmail');
            if (!email) {
                throw new Error('No user email found in local storage.');
            }

            const response = await fetch("https://foodyfox-9gqk.onrender.com/api/myOrderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (!data.success) {
                throw new Error(data.message);
            }

            setOrderData(data.orderData);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {orderData && orderData.order_data ? (
                        orderData.order_data.slice(0).reverse().map((order, orderIndex) => (
                            Array.isArray(order) && order.map((arrayData, index) => (
                                <div key={index} className='col-12 col-md-6 col-lg-3'>
                                    {arrayData.Order_date ? (
                                        <div className='m-auto mt-5'>
                                            {arrayData.Order_date}
                                            <hr />
                                        </div>
                                    ) : (
                                        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                            <img src={arrayData.img || 'default_image_url.jpg'} className="card-img-top" alt="Order Image" style={{ height: "120px", objectFit: "fill" }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{arrayData.name}</h5>
                                                <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                    <span className='m-1'>{arrayData.qty}</span>
                                                    <span className='m-1'>{arrayData.size}</span>
                                                    <span className='m-1'>{orderIndex}</span>
                                                    <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                        ₹{arrayData.price}/-
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        ))
                    ) : (
                        <div>No orders found.</div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
