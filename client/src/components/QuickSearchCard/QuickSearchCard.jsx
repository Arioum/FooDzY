import React from 'react';

const QuickSearchCard = (props) => {
    return (
        <>
            <div class="Quick-Search-Card">
                <div class="Quick-Search-Card-Image">
                    <img src={props.imageURL} alt="img" width="140" />
                </div>
                <div class="Quick-Search-Card-Info">
                    <div class="Quick-Search-Card-Info-Header">
                        {props.cardTitle}
                    </div>
                    <div class="Quick-Search-Card-Info-Body">
                        {props.cardDesc}
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuickSearchCard