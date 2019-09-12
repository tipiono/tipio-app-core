import React from 'react';

const BaseCard = ({children}) => {
    return (
        <div className="sidebarCard">

            <div className="sidebarCard__header">
                <div className="sidebarCard__header__content">
                    <h3 className="sidebarCard__header__content--title">Long product name</h3>
                    <p className="sidebarCard__header__content--subtitle">Brandname</p>
                </div>

                <div className="sidebarCard__header__cost">
                    <p className="sidebarCard__header__cost--label">Markedspris</p>
                    <h4 className="sidebarCard__header__cost--price">2 890 Kr</h4>
                </div>
            </div>

            <div className="sidebarCard__footer">
                {children}
            </div>
        </div>
    );
};

export default BaseCard;
