import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FilterPage from '../../Layout/FilterPage/FilterPage';


const Filter = ({category}) => {
  return (
    <div>
        <Navbar />
        <FilterPage category={category}/>
        <Footer />
    </div>
  )
}

export default Filter