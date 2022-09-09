import React from 'react';
import './styles/restaurantCard.css';

const RestaurantCard = () => {
    return (
        <div class="ResultContainer">
            <div class="image-header-content">
                <div class="Resultpage-img">
                    <img class="Resultpage-img" src="/Images/1x1/breakfast.png" alt="" />
                </div>
                <div class="Restaurant-Info">
                    <p class="Restaurant-Header">The Big Chilly Cakery</p>
                    <p class="Restaurant-Theme">Bakery</p>
                    <p class="Restaurant-Address">Shop1, Plot D, Samruddhi Complex, Ram Nagar, Bangalore</p>
                </div>
            </div>
            <hr />
            <div class="cuisine-cost">
                <div class="cuisine-cost-label">
                    <p>CUISINE:</p>
                    <p>COST FOR TWO:</p>
                </div>
                <div class="cuisine-cost-label-content">
                    <p>Bakery</p>
                    <p>₹700</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard