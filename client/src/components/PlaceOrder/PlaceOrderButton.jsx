import React from 'react'
// import MenuModal from '../MenuModal/MenuModal'
import { Link } from 'react-router-dom'
import './placeOrderButton.css'

const PlaceOrderButton = () => {
    return (
        <Link to="/menu">
            <div className='btn-place-order'>
                <button>Place Online Order</button>
            </div>
        </Link>
    )
}

export default PlaceOrderButton