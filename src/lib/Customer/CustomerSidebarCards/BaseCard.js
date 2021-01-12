import React from 'react';
import replaceWithSpace from '../../Util/replaceWithSpace';

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
                {props.inventory && props.inventory > 0 && props.inventory <= 10 && !props.expiredTipio ? (
                    <p className="customerSidebarCard__header__stock">Kun {props.inventory} igjen</p>
                ) : (
                    ''
                )}
                {props.vote ? (
                    <div className="customerSidebarCard__header__cost">
                        <p className="customerSidebarCard__header__cost--label" id={props.marketPriceId}>
                            Markedspris
                        </p>
                        <h4 className="customerSidebarCard__header__cost--price">
                            {props?.market_price && replaceWithSpace(props?.market_price)} Kr
                        </h4>
                    </div>
                ) : (
                    <div className="customerSidebarCard__price">
                        <div className="customerSidebarCard__price--cost">
                            <h6 className="customerSidebarCard__price--cost--amount">
                                {props?.market_price && replaceWithSpace(props?.market_price)} Kr
                            </h6>
                            <p className="customerSidebarCard__price--cost--label">Førpris</p>
                        </div>

                        <div className="customerSidebarCard__price--sale">
                            <h6 className="customerSidebarCard__price--sale--amount">
                                {props?.price && replaceWithSpace(props.price)} Kr
                            </h6>
                            <p className="customerSidebarCard__price--sale--label">Gruppepris</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="customerSidebarCard__footer">{children}</div>
        </div>
    );
};

export default BaseCard;
