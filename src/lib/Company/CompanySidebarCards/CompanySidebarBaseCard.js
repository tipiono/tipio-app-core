import React from 'react';

const CompanySidebarBaseCard = ({children, ...props}) => {
    return (
        <div className="companySidebarCard">

            <div className="companySidebarCard__header">
                <div className="companySidebarCard__header__content">
                    <h3 className="companySidebarCard__header__content--title">Samsung 65" UHD Smart- TV UE65NU7105</h3>
                    <p className="companySidebarCard__header__content--subtitle">Varekode: UE65NU7105XXC</p>
                </div>

                <div className="companySidebarCard__header__cost">
                    <p className="companySidebarCard__header__cost--label">Potensiell omsetning</p>
                    {props.loading ? (<div className="placeholder-content companySidebarCard__header--placeholder">
                            &nbsp;
                    </div>) : (
                        <h3 className="companySidebarCard__header__cost--price">23 243 850 Kr</h3>
                    )}
                </div>
            </div>
            {children}
        </div>
    )
}
export default CompanySidebarBaseCard;
