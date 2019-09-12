import React from 'react';

const BaseCard = ({children}) => {
    return (
        <div className="sidebarCard">

            <div className="sidebarCard__header">
                <h4 className="sidebarCard__header--title">Long product name</h4>
                <p className="sidebarCard__header--subtitle">Brandname</p>
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
