import React, { useEffect } from 'react';
// import Pagination from 'react-js-pagination';
import SortBy from '../../components/Filter-Sort/SortBy';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
// import Axios from 'axios';
// import { API_URL } from '../../constants/constants';
import { Link } from 'react-router-dom'
import './filterPage.css'
// import { useState } from 'react';

const FilterPage = ({ category }) => {
    // const [filterState, setFilterState] = useState({
    //     mealType: "",
    //     mealTypeId: 0,
    //     locations: [],
    //     selectedCityName: "",
    //     locationsInCity: [],
    //     selectedLocatin: "",
    //     pageNo: 1,
    //     restaurantList: [],
    //     noOfPages: 0,
    //     cuisines: [],
    //     hCost: undefined,
    //     lCost: undefined,
    //     sortOrder: 1,
    // })

    useEffect(() => {
        // const qs = queryString.parse(window.location.search);
        // const { mealType, mealTypeId } = qs;
        // setFilterState({
        //     mealType,
        //     mealTypeId,
        // });
        // const city_id = localStorage.getItem("city_id");

        // Axios.get(`${API_URL}/getAllLocations`)
        //     .then((res) => {
        //         const locations = res.data.Locations;
        //         const SelectedCity = locations.find((city) => city.city_id === city_id);
        //         const selectedCityLocations = locations.filter(
        //             (city) => city.city_id === city_id
        //         );

        //         setFilterState({
        //             locations: res.data.Locations,
        //             selectedCityName: SelectedCity.city,
        //             locationsInCity: selectedCityLocations,
        //         });
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

        // Axios({
        //     method: "POST",
        //     url: `${API_URL}/filterRestaurants`,
        //     headers: { "Content-Type": "application/json" },
        // })
        //     .then((res) => {
        //         console.log("Restaurant Details", res.data.Restaurants);
        //         setFilterState({
        //             restaurantList: res.data.Restaurants,
        //             pageNo: res.data.pageNo,
        //             noOfPages: res.data.noOfPages,
        //         });
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }, [])

    // props.this.state = {
    //     activePage: 15
    // };

    // const handlePageChange = (pageNumber) => {
    //     console.log(`active page is ${pageNumber}`);
    //     this.setState({ activePage: pageNumber });
    // }
    return (
        <div className="wrapper">
            <div className="places-found">
                <p>{category} Places in Bangalore</p>
            </div>
            <div className="flex-layout">
                <SortBy />
                <div className="Search-Results">
                    <div className="Result-scroll-container">
                        {true ? (
                            <>
                                <Link to='/details' style={{ textDecoration: 'none' }}>
                                    <RestaurantCard />
                                </Link>
                                <Link to='/details' style={{ textDecoration: 'none' }}>
                                    <RestaurantCard />
                                </Link>
                                <Link to='/details' style={{ textDecoration: 'none' }}>
                                    <RestaurantCard />
                                </Link>
                            </>
                        ) : (
                            <div style={{ position: "realative" }}>
                                <div className="text-danger h3 text-center my-5 No-Results">
                                    No Results Found
                                </div>
                            </div>
                        )}

                    </div>
                    {/* <div className="pagination">
                        <Pagination
                            // activePage={this.state.activePage}
                            itemsCountPerPage={3}
                            totalItemsCount={5}
                            pageRangeDisplayed={3}
                        // onChange={this.handlePageChange().bind(this)}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default FilterPage