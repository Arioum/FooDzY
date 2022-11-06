import React from 'react';
import './menuItemContainer.css';

const OrderTotalCard = () => {
    const amount = 784;
    return (
        <section className='order-total-footerbar'>
            <div className="wrapper">
                <div className="order-footer-contents">
                    <div className="order-left-info">
                        <h5>Deliver to ?</h5>
                        <button>Set delivery address</button>
                    </div>
                    <div className="order-right-info">
                        <h3>Total Amount : </h3>
                        <button>₹ {amount}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderTotalCard