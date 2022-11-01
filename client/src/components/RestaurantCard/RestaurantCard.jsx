import React from 'react';
import './restaurantCard.css';

const RestaurantCard = () => {
    return (
        <div className="ResultContainer">
            <div className="image-header-content">
                <div className="Resultpage-img">
                    <img className="Resultpage-img" src="/Images/1x1/breakfast.png" alt="" />
                </div>
                <div className="Restaurant-Info">
                    <p className="Restaurant-Header">The Big Chilly Cakery</p>
                    <p className="Restaurant-Theme">Bakery</p>
                    <p className="Restaurant-Address">Shop1, Plot D, Samruddhi Complex, Ram Nagar, Bangalore</p>
                </div>
            </div>
            <hr style={{ border: "1px solid #888" }} />
            <div className="cuisine-cost">
                <div className="cuisine-cost-label">
                    <p>CUISINE:</p>
                    <p>COST FOR TWO:</p>
                </div>
                <div className="cuisine-cost-label-content">
                    <p>Bakery</p>
                    <p>₹700</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard