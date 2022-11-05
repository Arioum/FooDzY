import React from 'react'

const OrderTotalCard = () => {
    const amount = 784;
    return (
        <section>
            <div className="order-left-info">

            </div>
            <div className="order-right-info">
                <h3>Total Amount : </h3>
                <button>₹ {amount}</button>
            </div>
        </section>
    )
}

export default OrderTotalCard