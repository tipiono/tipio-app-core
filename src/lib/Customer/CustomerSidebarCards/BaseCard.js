import React from 'react';

const BaseCard = ({ children, ...props }) => {
    return (
        <div className="customerSidebarCard" id={props.id}>
            <div className="customerSidebarCard__header">
                <div className="customerSidebarCard__header__content">
                    <h3 className="customerSidebarCard__header__content--title">{props.title}</h3>
                    <p className="customerSidebarCard__header__content--subtitle">
                        {props.brand ? props.brand : props.subtitle || ''}
                    </p>
                </div>
                {/* add limited stock */}

                {props.inventory && <p className="customerSidebarCard__header__stock">Kun {props.inventory} igjen</p>}

                <div className="customerSidebarCard__header__cost">
                    <p className="customerSidebarCard__header__cost--label" id={props.marketPriceId}>
                        Markedspris
                    </p>
                    <h4 className="customerSidebarCard__header__cost--price">{props.market_price} Kr</h4>
                </div>
            </div>

            <div className="customerSidebarCard__footer">{children}</div>
        </div>
    );
};

export default BaseCard;
