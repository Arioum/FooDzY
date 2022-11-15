import React, { useState } from 'react';
import Axios from "axios";
import { API_URL } from "../../constants/constants";
import './header.css';
import { IoLocationSharp, IoRestaurantSharp } from 'react-icons/io5';

const Header = ({ Locations }) => {
    const [cityName, setCityName] = useState("");
    const [suggestLocation, setSuggestLocation] = useState([])
    const [restaurantName, setRestaurantName] = useState({});
    console.log('loc', Locations);

    const filterTypedLocation = (event) => {
        setCityName(event.target.value);
        const locationId = event.target.value;
        const suggestedOption = Locations.filter((item) => {
            return item.name.toLowerCase().includes(locationId.toLowerCase());
        });
        setSuggestLocation(suggestedOption);
    }

    // const GetAllRestaurantsByLocation = (event) => {
    //     const Location_Id = event.target.value;
    //     const selectedOption = Locations.find((item) => {
    //         return item.location_id === Location_Id;
    //     });

    //     const city_id = selectedOption.city_id;
    //     const city_name = selectedOption.city;

    //     localStorage.setItem("city_id", city_id);

    //     Axios({
    //         method: "GET",
    //         url: `${API_URL}/getRestaurantByCity/${city_name}`,
    //     }).then((res) => {
    //         setRestaurantName(res.data);
    //     })
    //         .catch((err) => {
    //             console.log("get location error");
    //         });
    // }
    console.log(restaurantName);

    return (
        <div className="header-content">
            <div className="Main-Header wrapper">
                Find the <span style={{ color: '#fd0000' }}>best</span> restaurants, cafés, and bars
            </div>
            <div className="Find-Restaurant">
                <div className="location-dropdown-container">
                    <div className="location-dropdown-select">
                        <IoLocationSharp style={{ color: "#f60000", width: "20", height: "20" }} className="location-icon" />
                        <input onChange={filterTypedLocation} className="dropdown-input" type="text" name="select-city" placeholder='Please type a location' value={cityName} />
                    </div>
                    {cityName ? (
                        <>
                            <div className="dropdown-item-custom">
                                {suggestLocation.map((item, index) => {
                                    return (
                                        <>
                                            <option className="dropdown-option"
                                                key={index}
                                                value={item.location_id}
                                                onClick={(e) => setCityName(`${item.name}`)}
                                            >
                                                {item.name}
                                            </option>
                                        </>
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </div>
                {/* <select onChange={GetAllRestaurantsByLocation} className="dropdown"> */}
                {/* <input type="text" name="" id="" value="sdfsd" /> */}
                {/* <option value="" disabled selected> Please type a location</option>
                    {Locations.map((item, index) => {
                        return (
                            <option key={index} value={item.location_id}>
                                {item.name},{item.city}
                            </option>
                        );
                    })} */}
                {/* </select> */}
                <div className="restaurant-dropdown-container">
                    <div className="restaurant-dropdown-select">
                        <IoRestaurantSharp style={{ color: "#f60000", width: "20", height: "20" }} className="location-icon" />
                        <input onChange={(e) => setRestaurantName(e.target.value)} className="Search-field" type="text" placeholder="Search by Restaurant name"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;