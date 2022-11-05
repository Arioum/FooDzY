import React, { useState } from 'react';
import Modal from 'react-modal'
import Swiper, { Navigation, Pagination } from 'swiper';
import './imageModal.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: '#FFFFFF',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: '#202020'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
};

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const ImageModal = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openGalleryModal() {
        setIsOpen(true);
    }

    function closeGalleryModal() {
        setIsOpen(false);
    }

    let data = [
        {
            des: "1",
            imgSrc: "https://i.imqur.com/yourImage.jpg"
        },
        {
            des: "2",
            imgSrc: "https://i.imqur.com/yourImage2.jpg"
        }
    ];



    return (
        <div className="btn-view-image-gallery">
            <button onClick={openGalleryModal} className="btn-view-gallery">Click to see Image Gallery</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeGalleryModal}
                style={customStyles}
                contentLabel="Gallery Modal"
            >
                <div className="gallery-modal-container">
                    <div className="header">
                        <button onClick={closeGalleryModal}>
                            <img src="/Images/icons/close.svg" alt="close" />
                        </button>
                    </div>
                    <div className="carousel-container">
                        <div className="swiper">
                            {/* <!-- Additional required wrapper --> */}
                            <div className="swiper-wrapper">
                                {/* <!-- Slides --> */}
                                <div className="swiper-slide"><img src="/Images/1x1/Breakfast.png" alt="" /></div>
                                <div className="swiper-slide"><img src="/Images/1x1/Breakfast.png" alt="" /></div>
                                <div className="swiper-slide"><img src="/Images/1x1/Breakfast.png" alt="" /></div>
                                ...
                            </div>
                            {/* <!-- If we need pagination --> */}
                            <div className="swiper-pagination"></div>

                            {/* <!-- If we need navigation buttons --> */}
                            <div className="swiper-button-prev"><img src="/Images/icons/Arrow-Up.svg" alt="" /></div>
                            <div className="swiper-button-next"><img src="/Images/icons/Arrow-Up.svg" alt="" /></div>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default ImageModal