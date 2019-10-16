import React from 'react';
import SecondaryOutlineButton from "../../UI/Buttons/SecondaryOutlineButton";


const AddSaleSidebarCard = () => {
    return (
        <div className="addSaleSidebarCard">
            <div className="addSaleSidebarCard__header">
                <div className="addSaleSidebarCard__header__content">
                    <h3 className="addSaleSidebarCard__header__content--title">Samsung 65" UHD høytaler UE65NU7105</h3>
                    <p className="addSaleSidebarCard__header__content--subtitle">Samsung</p>
                </div>
            </div>

            <div className="addSaleSidebarCard__price">
                <div className="addSaleSidebarCard__price--cost">
                    <p className="addSaleSidebarCard__price--cost--label">Før pris</p>
                    <h6 className="addSaleSidebarCard__price--cost--amount">8 499 Kr</h6>
                </div>
                <div className="addSaleSidebarCard__price--sale">
                    <p className="addSaleSidebarCard__price--sale--label">Ny pris</p>
                    <h6 className="addSaleSidebarCard__price--sale--amount">7 499 Kr</h6>
                </div>
            </div>

            <div className="addSaleSidebarCard__footer">
                <div className="addSaleSidebarCard__footer--action">
                  <SecondaryOutlineButton text="Rediger" />
                </div>
                <p className="addSaleSidebarCard__footer--interestedCounter">Allerede 329 påmeldte!</p>
            </div>



        </div>
    );
};

export default AddSaleSidebarCard;
