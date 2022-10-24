import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import QuickSearch from '../../Layout/QuickSearch/QuickSearch';
import Footer from '../../components/Footer/Footer';
import { API_URL } from '../../constants/constants'
import Axios from 'axios'
import './home.css';

const Home = () => {
  const [Locations, setLocations] = useState({
    Locations: [],
    MealTypes: [],
  })

  useEffect(() => {
    Axios
      .get(`${API_URL}/getAllLocations`)
      .then((res) => {
        setLocations({
          Locations: res.data.Locations,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    Axios
      .get(`${API_URL}/getAllMealTypes`)
      .then((res) => {
        setLocations({
          MealTypes: res.data.MealTypes,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  console.log(Locations);

  const navBg = true;
  return (
    <div>
      <div className="header-container">
        <div className="Banner">
          <img className="Banner-Image" src="Images/Banner.png" alt=""></img>
        </div>
        <Navbar navStyle={navBg} />
        <Header className="Banner-Header" Locations={Locations.Locations} />
      </div>
      <QuickSearch />
      <Footer />
    </div>
  )
}

export default Home