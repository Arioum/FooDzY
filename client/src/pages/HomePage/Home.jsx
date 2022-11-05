import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import QuickSearch from '../../Layout/QuickSearch/QuickSearch';
import Footer from '../../components/Footer/Footer';
import { API_URL } from '../../constants/constants';
import Axios from 'axios'
import './home.css';

const Home = () => {
  const [Locations, setLocations] = useState([])
  const [MealTypes, setMealTypes] = useState([])
  const [dataLoad, setDataLoad] = useState({
    Location: []
  });

  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: `${API_URL}/getAllLocations`,
    }).then((res) => {
      setLocations(res.data.Locations)
    })
      .catch((err) => {
        console.log("get location error");
      });

    // Axios({
    //   method: "GET",
    //   withCredentials: true,
    //   url: `${API_URL}/getAllMealTypes`,
    // }).then((res) => {
    //   setMealTypes(res.data.MealTypes)
    // }).catch((err) => {
    //   console.log(err);
    // });

    // Axios
    //   .get(`http://localhost:4000/getAllLocations`)
    //   .then((res) => {
    //     setDataLoad({
    //       Locations: res.data.Locations,
    //     });
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [])

  const navBg = true;
  return (
    <div>
      <div className="header-container">
        <div className="Banner">
          <img className="Banner-Image" src="Images/Banner.png" alt=""></img>
        </div>
        <Navbar navStyle={navBg} />
        <Header className="Banner-Header" Locations={Locations} />
      </div>
      <QuickSearch />
      <Footer />
    </div>
  )
}

export default Home