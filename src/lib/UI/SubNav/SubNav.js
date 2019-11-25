import React from 'react';
import Avatar from "../Avatar/Avatar";
import EmptyAvatar from "../../Company/Avatar/EmptyAvatar";

import cx from 'classnames';

const SubNav = ({
    title,
    items,
    avatar,
    onClick,
    loading,
    showAvatar = true,
    activeId = -1,
    activeLink = '/-1'
}) => {
    return (
        <div className="subNav">
            <div className="subNav__account">

                {showAvatar &&
                    <div className="subNav__account--avatar">
                        {avatar ? (<Avatar
                            src={avatar}
                            loading={loading}
                        />) : (

                            <div className="subNav__account--avatar--empty">
                                <svg width={33} height={26}>
                                    <g fill="#C9CFD3" fillRule="evenodd">
                                        <path d="M31.877 22.16l-3.257-3.447a2.625 2.625 0 00-3.848 0l-2.308 2.443-3.335-3.63a2.572 2.572 0 00-1.908-.853c-.724 0-1.401.303-1.907.852l-4.23 4.606V9.481c0-.305.248-.553.554-.553h19.685c.305 0 .554.248.554.553v12.68zm0 2.11a.554.554 0 01-.555.553H11.638a.554.554 0 01-.555-.554v-.5l5.049-5.495c.292-.319.68-.494 1.09-.494.41 0 .797.175 1.09.494l4.819 5.246c.206.226.557.24.783.034a.552.552 0 00.034-.781l-.734-.8 2.363-2.5c.3-.317.696-.491 1.118-.491.422 0 .819.175 1.117.49l4.064 4.302v.495zM9.975 11.963v12.305c0 .915.746 1.66 1.663 1.66h19.685c.917 0 1.663-.745 1.663-1.66V9.481c0-.915-.746-1.66-1.663-1.66H11.638c-.917 0-1.663.745-1.663 1.66v2.483z" />
                                        <path d="M27.321 15.108a1.636 1.636 0 01-1.636-1.632 1.636 1.636 0 013.272 0c0 .9-.734 1.632-1.636 1.632m0-4.372a2.744 2.744 0 00-2.744 2.74 2.744 2.744 0 005.488 0c0-1.511-1.23-2.74-2.744-2.74M10.133 22.685l-2.213.984a.555.555 0 01-.732-.28l-.204-.457-.668-1.496L1.156 9.88a.554.554 0 01.281-.73l17.98-7.997a.556.556 0 01.732.28l2.857 6.675 1.303-.1L21.162.985a1.666 1.666 0 00-2.196-.84L.986 8.14a1.66 1.66 0 00-.842 2.191l.562 1.258.45 1.01 5.02 11.24a1.666 1.666 0 002.195.84l1.976-.87-.214-1.124z" />
                                    </g>
                                </svg>
                            </div>
                        )}
                    </div>
                }
                <h3 className="subNav__account--name">{title}</h3>
            </div>

            <ul className="subNav__list">
                {
                    items.map((item) => (
                        <li className="subNav__list--item">
                            <a className={cx("subNav__list--item--link", { active: item.link === activeLink || item.id === activeId })}  href="" onClick={(e)=>{e.preventDefault(); onClick(item);}}>
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
