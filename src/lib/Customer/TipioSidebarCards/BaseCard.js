import React from 'react';

const BaseCard = ({children}) => {
    return (
        <div>

            <div className="header">
                Title <br/>
                Description <br/>
                Marketprice <br/>
                250
            </div>

            <div className="footer">
                {children}
            </div>
        </div>
    );
};

export default BaseCard;
