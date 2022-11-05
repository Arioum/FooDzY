import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import RestaurantInfoHeader from '../../Layout/MenuPage/RestaurantInfoHeader';
import MenuCardContainer from '../../Layout/MenuPage/MenuCardContainer';
import OrderTotalCard from '../../Layout/MenuPage/OrderTotalCard';

const MenuPage = () => {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <RestaurantInfoHeader />
                <MenuCardContainer />
                <OrderTotalCard />
            </div>
        </>
    )
}

export default MenuPage