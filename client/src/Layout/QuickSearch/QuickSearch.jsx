import React from 'react';
import QuickSearchCard from '../../components/QuickSearchCard';
import quickCardData from '../../components/quickCardData';
import './quickSearch.css';

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
            <QuickSearchCard
              imageURL={cardItem.imageURL}
              cardTitle={cardItem.cardTitle}
              cardDesc={cardItem.cardDesc}
              onClick={cardItem.onClick}
              path={cardItem.path}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuickSearch