import React from 'react';

const CompanySidebarBaseCard = ({children}) => {
    return (
        <div className="companySidebarCard">

            <div className="companySidebarCard__header">
                <div className="companySidebarCard__header__content">
                    <h3 className="companySidebarCard__header__content--title">Samsung 65" UHD Smart- TV UE65NU7105</h3>
                    <p className="companySidebarCard__header__content--subtitle">Varekode: UE65NU7105XXC</p>
                </div>

                <div className="companySidebarCard__header__cost">
                    <p className="companySidebarCard__header__cost--label">Omsetning</p>
                    <h4 className="companySidebarCard__header__cost--price">23 243 850 Kr</h4>
                </div>
            </div>

            <div className="companySidebarCard__footer">
                {children}
            </div>
        </div>
    );
};

export default CompanySidebarBaseCard;
