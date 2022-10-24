import React from 'react';

const QuickSearchCard = (props) => {
    return (
        <>
            <div className="Quick-Search-Card">
                <div className="Quick-Search-Card-Image">
                    <img src={props.imageURL} alt="img" width="140" />
                </div>
                <div className="Quick-Search-Card-Info">
                    <div className="Quick-Search-Card-Info-Header">
                        {props.cardTitle}
                    </div>
                    <div className="Quick-Search-Card-Info-Body">
                        {props.cardDesc}
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuickSearchCard