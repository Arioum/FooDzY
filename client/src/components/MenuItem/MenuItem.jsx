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
                    <h4>Chicken Golden Delight</h4>
                    <p>Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!</p>
                </div>
                <div className="item-preview add-item-btn">
                    <div className="item-img">
                        <img src="/Images/menu-items/item-1.png" alt="item-img" />
                    </div>
                    <div className="item-add">
                        <button onClick={itemIncrease}>-</button>
                        <div className="count-display">
                            <h4>ADD</h4>
                        </div>
                        <button onClick={itemDecrease}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItem