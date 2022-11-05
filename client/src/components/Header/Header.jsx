import React, { useState } from 'react';
import Axios from "axios";
import { API_URL } from "../../constants/constants";
import './header.css';

const Header = ({ Locations }) => {
    // const [cityName, setCityName] = useState("");
    const [restaurantName, setRestaurantName] = useState({});

    const GetAllRestaurantsByLocation = (event) => {
        const Location_Id = event.target.value;
        const selectedOption = Locations.find((item) => {
            return item.location_id === Location_Id;
        });

        const city_id = selectedOption.city_id;
        const city_name = selectedOption.city;

        localStorage.setItem("city_id", city_id);

        Axios({
            method: "GET",
            url: `${API_URL}/getRestaurantByCity/${city_name}`,
        }).then((res) => {
            setRestaurantName(res.data);
        })
            .catch((err) => {
                console.log("get location error");
            });
    }
    console.log(restaurantName);

    return (
        <div className="header-content">
            <div className="Main-Header wrapper">
                Find the <span style={{ color: '#fd0000' }}>best</span> restaurants, cafés, and bars
            </div>
            <div className="Find-Restaurant">
                {/* <input onChange={(e) => setCityName(e.target.value)} className="dropdown" type="text" name="select-city" id="" placeholder='Please type a location' /> */}
                <select onChange={GetAllRestaurantsByLocation} className="dropdown" name="" id="">
                    <option value="" disabled selected>Please type a location</option>
                    {Locations.map((item, index) => {
                        return (
                            <option key={index} value={item.location_id}>
                                {item.name},{item.city}
                            </option>
                        );
                    })}
                </select>

                <input onChange={(e) => setRestaurantName(e.target.value)} className="Search-field" type="text" placeholder="Search by name or Restaurant name" href="/"></input>
            </div>
        </div>
    )
}

export default Header;