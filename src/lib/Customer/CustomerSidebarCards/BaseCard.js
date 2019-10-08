import React from 'react';

const BaseCard = ({children}) => {
    return (
        <div className="customerSidebarCard">

            <div className="customerSidebarCard__header">
                <div className="customerSidebarCard__header__content">
                    <h3 className="customerSidebarCard__header__content--title">Long product name</h3>
                    <p className="customerSidebarCard__header__content--subtitle">Brandname</p>
                </div>

                <div className="customerSidebarCard__header__cost">
                    <p className="customerSidebarCard__header__cost--label">Markedspris</p>
                    <h4 className="customerSidebarCard__header__cost--price">2 890 Kr</h4>
                </div>
            </div>

            <div className="customerSidebarCard__footer">
                {children}
            </div>
        </div>
    );
};

export default BaseCard;
