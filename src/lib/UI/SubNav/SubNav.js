import React from 'react';
import Avatar from "../Avatar/Avatar";
import cx from 'classnames';

const SubNav = ({
    title,
    items,
    active,
    avatar
}) => {
    return (
        <div className="subNav">
            <div className="subNav__account">
                {avatar && <div className="subNav__account--avatar">
                    <Avatar
                        src={avatar}/>
                </div>}

                <h3 className="subNav__account--name">{title}</h3>

            </div>

            <ul className="subNav__list">
                {
                    items.map((item) => (
                        <li className="subNav__list--item">
                            <a className={cx("subNav__list--item--link", { active: item.title === active })}  href="">{item.title}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SubNav;
