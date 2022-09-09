import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import QuickSearch from '../Layout/QuickSearch';
import Footer from '../components/Footer';
import './home.css';

const home = () => {
  return (
    <div>
      <div className="Banner">
        <img className="Banner-Image" src="Images/Banner.png" alt=""></img>
      </div>
      <Navbar />
      <Header className="Banner-Header"/>
      <QuickSearch />
      <Footer />
    </div>
  )
}

export default home