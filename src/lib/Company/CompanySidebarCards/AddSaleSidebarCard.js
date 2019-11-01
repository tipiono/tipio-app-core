import React from 'react';
import SecondaryOutlineButton from "../../UI/Buttons/SecondaryOutlineButton";


const AddSaleSidebarCard = ({ first_price, company_price, tipio, editButtonOnClick }) => {
    const {
        title,
        subtitle,
    } = tipio;
    return (
        <div className="addSaleSidebarCard">
            <div className="addSaleSidebarCard__header">
                <div className="addSaleSidebarCard__header__content">
                    <h3 className="addSaleSidebarCard__header__content--title">{title}</h3>
                    <p className="addSaleSidebarCard__header__content--subtitle">{subtitle}</p>
                </div>
            </div>

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
                <div className="addSaleSidebarCard__footer--action">
                  <SecondaryOutlineButton text="Rediger" onClick={editButtonOnClick}/>
                </div>
                <p className="addSaleSidebarCard__footer--interestedCounter">Allerede 329 påmeldte!</p>
            </div>



        </div>
    );
};

export default AddSaleSidebarCard;
