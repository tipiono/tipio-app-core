import React from 'react';
import Avatar from "../Avatar/Avatar";
import cx from 'classnames';

const SubNav = ({
    title,
    items,
    activeLink,
    avatar,
    onClick
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
                            <a className={cx("subNav__list--item--link", { active: item.link === activeLink })}  href="" onClick={(e)=>{e.preventDefault(); onClick(item);}}>
                                {item.title}
                            </a>
                            {item.badgeCount > 0 ? (<sup className="subNav__list--item--badge">
                                {item.badgeCount}
                            </sup>) : (null)}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SubNav;
