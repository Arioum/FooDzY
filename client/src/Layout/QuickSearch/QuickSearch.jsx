import React from 'react';
import { Link } from 'react-router-dom';
import QuickSearchCard from '../../components/QuickSearchCard/QuickSearchCard';
import quickCardData from './quickCardData';
import './quickSearch.css';


const QuickSearch = () => {
  return (
    <div>
      <div className="Homepage-Content wrapper">
        <div className="Quick-Searches">
          <div className="Quick-Searches-Header">
            Quick Searches
          </div>
          <div className="Quick-Searches-Bottom">
            Discover restaurants by type of meal
          </div>
        </div>

        <div className="Quick-Search-Container">
          {quickCardData.map((cardItem, index) => (
            <Link to={cardItem.path} key={index} style={{ textDecoration: 'none' }}>
              <QuickSearchCard
                key={index}
                imageURL={cardItem.imageURL}
                cardTitle={cardItem.cardTitle}
                cardDesc={cardItem.cardDesc}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuickSearch