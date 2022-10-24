import React, { useState } from 'react';
import Modal from 'react-modal';
import './menuModal.css';

const RestaurantName = 'Dominos'

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
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
};

const MenuModal = () => {
    // Use state for modals
    const [menuModal, setMenuModal] = useState(false);

    // MODAL OPEN AND CLOSE FUNCTIONALITY
    function openMenuModal() {
        setMenuModal(true);
    }

    function closeMenuModal() {
        setMenuModal(false);
    }

    return (
        <div>
            <button onClick={openMenuModal}>Place Online Order</button>
            <Modal
                isOpen={menuModal}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeMenuModal}
                style={customStyles}
                contentLabel="Menu Modal"
            >
                <div className="model-menu">
                    <div className="header">
                        <div className="sign-up">{RestaurantName}</div>
                        <button onClick={closeMenuModal}>
                            <img src="/Images/icons/close.svg" alt="close" />
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default MenuModal