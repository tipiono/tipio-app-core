import React from 'react';
import ShimmerEffect from 'react-shimmer'

const CompanySidebarBaseCard = ({ children }) => {
    return (
        <div className="companySidebarCard">

            <div className="companySidebarCard__header">
                <div className="companySidebarCard__header__content">
                    <h3 className="companySidebarCard__header__content--title">Samsung 65" UHD Smart- TV UE65NU7105</h3>
                    <p className="companySidebarCard__header__content--subtitle">Varekode: UE65NU7105XXC</p>
                </div>

                <div className="companySidebarCard__header__cost">
                    <p className="companySidebarCard__header__cost--label">Potensiell omsetning</p>
                    <ShimmerEffect
                        src="https://example.com/test.jpg"
                        width={640} height={480}
                        style={{ objectFit: 'cover' }}
                    />
                    <h3 className="companySidebarCard__header__cost--price">23 243 850 Kr</h3>
                </div>
            </div>
            {children}
        </div>
    )
}
export default CompanySidebarBaseCard;
