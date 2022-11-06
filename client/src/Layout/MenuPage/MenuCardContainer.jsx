import React from 'react'
import MenuItem from '../../components/MenuItem/MenuItem';
import './menuItemContainer.css';

const MenuCardContainer = () => {
  return (
    <section className='menu-item-container'>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </section>
  )
}

export default MenuCardContainer