import React from 'react';
import SecondaryOutlineButton from '../../UI/Buttons/SecondaryOutlineButton';

const AddSaleSidebarCard = ({
    first_price,
    company_price,
    tipio,
    editButtonOnClick,
    addToCartOnClick,
    showEditButton = true,
    inventory,
    showAddToCartButton = false,
    bindingCount
}) => {
    const { title, brand } = tipio;
    return (
        <div className="addSaleSidebarCard">
            <div className="addSaleSidebarCard__header">
                <div className="addSaleSidebarCard__header__content">
                    <h3 className="addSaleSidebarCard__header__content--title">{title}</h3>
                    <p className="addSaleSidebarCard__header__content--subtitle">{brand}</p>
                </div>
            </div>

            {inventory > 0 && <p className="addSaleSidebarCard__stock">Kun {inventory} igjen</p>}

            <div className="addSaleSidebarCard__price">
                <div className="addSaleSidebarCard__price--cost">
                    <p className="addSaleSidebarCard__price--cost--label">Før pris</p>
                    <h6 className="addSaleSidebarCard__price--cost--amount">{first_price} Kr</h6>
                </div>
                <div className="addSaleSidebarCard__price--sale">
                    <p className="addSaleSidebarCard__price--sale--label">Ny pris</p>
                    <h6 className="addSaleSidebarCard__price--sale--amount">{company_price} Kr</h6>
                </div>
            </div>

            <div className="addSaleSidebarCard__footer">
                {showEditButton && (
                    <div className="addSaleSidebarCard__footer--action">
                        <SecondaryOutlineButton text="Rediger" onClick={editButtonOnClick} />
                    </div>
                )}
                {showAddToCartButton && (
                    <div className="addSaleSidebarCard__footer--action">
                        <SecondaryOutlineButton text="Legg i handlekurv" onClick={addToCartOnClick} />
                    </div>
                )}
                {bindingCount > 0 && (
                    <p className="addSaleSidebarCard__footer--interestedCounter">{bindingCount} har allerede kjøpt!</p>
                )}
            </div>
        </div>
    );
};

export default AddSaleSidebarCard;
