import React from 'react';
import Avatar from "../Avatar/Avatar";

const SubNav = () => {
    return (
        <div className="subNav">
            <div className="subNav__account">
                <div className="subNav__account--avatar">
                    <Avatar
                        src={"https://media.licdn.com/dms/image/C4E0BAQH68IJX_M94XA/company-logo_400_400/0?e=1577318400&v=beta&t=lCBG1Ra3mD0X0XNoqfARizY-hi4I1V1PQJGx6vhpcRI"}/>
                </div>

                <h3 className="subNav__account--name">Elkjøp - Sandvika</h3>

            </div>

            <ul className="subNav__list">
                <li className="subNav__list--item">
                    <a className="subNav__list--item--link active" href="">Min profil</a>
                </li>
                <li className="subNav__list--item">
                    <a className="subNav__list--item--link" href=""> Dashboard</a>
                </li>
            </ul>
        </div>
    );
};

export default SubNav;
