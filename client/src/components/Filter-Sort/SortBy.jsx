import React from 'react';
import './sortBy.css';

const SortBy = () => {
    return (
        <div className="Filter-Sort">
            <div className="filters">
                {/* <!-- Filter  --> */}
                <div className="style1-header">Filters</div>
                <div className="style2-subheader" htmlFor="Select Location">Select Location</div>
                <select className="style3 dropdown sty-2" id="">
                    <option value="">Select Location</option>
                    <option value="">Bangalore</option>
                    <option value="">Chennai</option>
                    <option value="">Kochi</option>
                    <option value="">Hyderabad</option>
                    <option value="">Mumbai</option>
                    <option value="">Delhi</option>
                    <option value="">Kolkata</option>
                    <option value="">Goa</option>
                </select>

                <div className="cuisine-container">
                    <div className="style2-subheader Label-Header" htmlFor="">Cuisine</div>
                    <div className="checkbox-item item-align">
                        <input className="Cuisine-checkbox" type="checkbox" name="North Indian" id="Checkbox-label" />
                        <label className="style3 Checkbox-label" htmlFor="North Indian">North Indian</label>
                    </div>
                    <div className="checkbox-item item-align">
                        <input className="Cuisine-checkbox" type="checkbox" name="South Indian" id="" />
                        <label className="style3 Checkbox-label" htmlFor="South Indian">South Indian</label>
                    </div>
                    <div className="checkbox-item item-align">
                        <input className="Cuisine-checkbox" type="checkbox" name="Chinese" id="" />
                        <label className="style3 Checkbox-label" htmlFor="Chinese">Chinese</label>
                    </div>
                    <div className="checkbox-item item-align">
                        <input className="Cuisine-checkbox" type="checkbox" name="Fast Food" id="" />
                        <label className="style3 Checkbox-label" htmlFor="Fast Food">Fast Food</label>
                    </div>
                    <div className="checkbox-item item-align">
                        <input className="Cuisine-checkbox" type="checkbox" name="Street Food" id="" />
                        <label className="style3 Checkbox-label" htmlFor="Street Food">Street Food</label>
                    </div>
                </div>

                <div className="cost-of-two-container">
                    <div className="style2-subheader Label-Header" htmlFor="">Cost of Two</div>
                    <div className="radio-item item-align">
                        <input className="CostofTwo-radio" type="radio" name="Cost of Two" id="" />
                        <label className="style3 Radio-label" htmlFor="">Less than ₹500</label>
                    </div>
                    <div className="radio-item item-align">
                        <input className="CostofTwo-radio" type="radio" name="Cost of Two" id="" />
                        <label className="style3 Radio-label" htmlFor="">₹500 to ₹1000</label>
                    </div>
                    <div className="radio-item item-align">
                        <input className="CostofTwo-radio" type="radio" name="Cost of Two" id="" />
                        <label className="style3 Radio-label" htmlFor="">₹1000 to ₹1500</label>
                    </div>
                    <div className="radio-item item-align">
                        <input className="CostofTwo-radio" type="radio" name="Cost of Two" id="" />
                        <label className="style3 Radio-label" htmlFor="">₹1500 than ₹2000</label>
                    </div>
                    <div className="radio-item item-align">
                        <input className="CostofTwo-radio" type="radio" name="Cost of Two" id="" />
                        <label className="style3 Radio-label" htmlFor="">₹2000 and above</label>
                    </div>
                </div>

                {/* <!-- Sort --> */}
                <div className="sort-container">
                    <div className="style1-header Sort-Header">Sort</div>
                    <div className="radio-item item-align">
                        <input className="Price-radio" type="radio" name="Sort" id="" />
                        <label className="style3 Radio-label" htmlFor="Sort">Price low to high</label>
                    </div>
                    <div className="radio-item item-align">
                        <input className="Price-radio" type="radio" name="Sort" id="" />
                        <label className="style3 Radio-label" htmlFor="Sort">Price high to low</label>
                    </div>
                    <div className="Reset-Button">
                        <a className="Reset-Changes" href="/">Reset Changes</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortBy