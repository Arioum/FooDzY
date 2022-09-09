import React from 'react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ImageModal from '../../components/ImageCarousel/ImageModal';
import PlaceOrderButton from '../../components/PlaceOrder/PlaceOrderButton';
import './detailsPage.css'

const DetailsPage = () => {
    return (
        <div className='wrapper'>
            <div className="section-gallery">
                <div className="img-gallery-banner">
                    <ImageGallery />
                </div>
                <div className="view-gallery-modal">
                    <ImageModal />
                </div>
            </div>
            <div className="restaurant-details-container">
                <div className="restaurant-details-header">
                    <div className="restaurant-details-name">
                        Dominos Pizza
                    </div>
                    <div className="restaurant-details-place-order-btn">
                        <PlaceOrderButton/>       
                    </div>
                </div>
                <div className="tab-container">
                    {/* Overview */}
                    <div className="restaurant-overview">
                        <div className="overview-about">
                            <h4>About this Place</h4>
                            <p>With Domino's it is always “Rishton ka time”. Whether it's a treat for your promotion, a kid topping his class or winning the heart of your wife who is too tired to cook after a long day at work! A cheesy slice of the best pizza is all one needs to put things into perspective and start any celebration. Plus, you do not even need to rush to the restaurant to have one now. A call, a few clicks on our website or a few touches on the mobile screen is all you have to do to have that tempting, light-on-the-pocket pizza at your doorstep.</p>
                        </div>
                        <div className="overview-cuisine">
                            <h6>Cuisine</h6>
                            <p>Bakery, Fast-food</p>
                        </div>
                        <div className="overview-average-cost">
                            <h6>Average Cost</h6>
                            <p>₹700 for two people (approx.)</p>
                        </div>
                    </div>
                    {/* Contact */}
                    <div className="restaurant-contact">
                        <div className="contact-number">
                            <h6>Phone Number</h6>
                            <p>+91 114004566</p>
                        </div>
                        <div className="contact-address">
                            <h6>Dominos Pizza</h6>
                            <p>Shop 1, Plot D, Samruddhi Complex, Chincholi, Mumbai-400002, Maharashtra</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage