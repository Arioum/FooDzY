import React from 'react';
import Pagination from 'react-js-pagination';
import SortBy from '../components/SortBy';
import RestaurantCard from '../components/RestaurantCard';
import './styles/filterPage.css'

const FilterPage = (props) => {

    // props.this.state = {
    //     activePage: 15
    // };

    // const handlePageChange = (pageNumber) => {
    //     console.log(`active page is ${pageNumber}`);
    //     this.setState({ activePage: pageNumber });
    // }
    return (
        <div className="wrapper">
            <div class="places-found">
                <p>Breakfast Places in Bangalore</p>
            </div>
            <div className="flex-layout">
                <SortBy />
                <div class="Search-Results">
                    <div class="Result-scroll-container">
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