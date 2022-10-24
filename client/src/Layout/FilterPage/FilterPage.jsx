import React from 'react';
import Pagination from 'react-js-pagination';
import SortBy from '../../components/Filter-Sort/SortBy';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import './filterPage.css'

const FilterPage = ({ category }) => {

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
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                    </div>
                    <div className="pagination">
                        <Pagination
                            // activePage={this.state.activePage}
                            itemsCountPerPage={3}
                            totalItemsCount={20}
                            pageRangeDisplayed={3}
                        // onChange={this.handlePageChange().bind(this)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterPage