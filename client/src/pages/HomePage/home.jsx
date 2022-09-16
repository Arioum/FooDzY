import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import QuickSearch from '../../Layout/QuickSearch/QuickSearch';
import Footer from '../../components/Footer/Footer';
import './home.css';

const home = () => {

  return (
    <div>
      <div className="header-container">
        <div className="Banner">
          <img className="Banner-Image" src="Images/Banner.png" alt=""></img>
        </div>
        <Navbar />
        <Header className="Banner-Header"/>
      </div>
      <QuickSearch />
      <Footer />
    </div>
  )
}

export default home