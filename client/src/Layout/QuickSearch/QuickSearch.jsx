import React from 'react';
import { Link } from 'react-router-dom';
import QuickSearchCard from '../../components/QuickSearchCard/QuickSearchCard';
import quickCardData from './quickCardData';
import './quickSearch.css';
import axios from 'axios';



const QuickSearch = () => {
  return (
    <div>
      <div class="Homepage-Content wrapper">
        <div class="Quick-Searches">
          <div class="Quick-Searches-Header">
            Quick Searches
          </div>
          <div class="Quick-Searches-Bottom">
            Discover restaurants by type of meal
          </div>
        </div>

        <div class="Quick-Search-Container">      
          {quickCardData.map((cardItem) => (
            <Link to={cardItem.path} style={{textDecoration: 'none'}}>
              <QuickSearchCard
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