import React from 'react';

const CompanySidebarBaseCard = ({ children, ...props }) => {
    const { tipio, meta, generatedRevenue, showRevenue } = props;
    return (
        <div className="companySidebarCard">
            <div className="companySidebarCard__header">
                <div className="companySidebarCard__header__content">
                    <h3 className="companySidebarCard__header__content--title">{tipio.title}</h3>
                    <p className="companySidebarCard__header__content--subtitle">Varekode: {tipio.product_code} </p>
                </div>

                <div className="companySidebarCard__header__cost">
                    <p className="companySidebarCard__header__cost--label">
                        {showRevenue ? 'Omsetning' : 'Potensiell omsetning'}
                    </p>
                    {props.loading ? (
                        <div className="placeholder-content companySidebarCard__header--placeholder">&nbsp;</div>
                    ) : (
                        <h3 className="companySidebarCard__header__cost--price">
                            {generatedRevenue !== undefined ? generatedRevenue : meta.potential_earning} Kr
                        </h3>
                    )}
                </div>
            </div>
            {children}
        </div>
    );
};
export default CompanySidebarBaseCard;
