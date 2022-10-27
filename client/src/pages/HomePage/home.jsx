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
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/getAllLocations",
    }).then((res) => {
      setLocations(res.data);
      console.log(res.data);
    });

    // Axios
    //   .get(`http://localhost:3000/getAllLocations`)
    //   .then((res) => {
    //     setLocations({
    //       Locations: res.data.Locations,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // Axios
    //   .get(`http://localhost:4000/getAllMealTypes`)
    //   .then((res) => {
    //     setLocations({
    //       MealTypes: res.data.MealTypes,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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