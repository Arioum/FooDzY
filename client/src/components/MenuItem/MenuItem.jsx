import React, { useState } from 'react';
import "./menuItem.css"

const MenuItem = () => {
    const [itemCount, setItemCount] = useState(0);

    const itemIncrease = () => {

    }

    const itemDecrease = () => {

    }

    return (
        <div>
            <div className="item-container">
                <div className="item-details">
                    <h3>Chicken Golden Delight</h3>
                    <p>Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!</p>
                    <h4>459</h4>
                </div>
                <div className="item-preview add-item-btn">
                    <div className="item-img">
                        <img src="/Images/menu-items/item-1.png" alt="item-img" />
                    </div>
                    <div className="item-add">
                        <button onClick={itemIncrease}>-</button>
                        <div className="count-display">
                            <h5>ADD</h5>
                        </div>
                        <button onClick={itemDecrease}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItem