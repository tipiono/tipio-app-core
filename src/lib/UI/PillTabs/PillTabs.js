import React from 'react';
import cx from 'classnames';

function PillTabs({ items, activeIndex, onClick }) {
    return (
        <>
           <ul className="pillTab">
               {
                   items.map((item, i) => (
                        <li key={item} className={cx("pillTab__item", { active: activeIndex === i } )}>
                            <a
                                href=""
                                className="pillTab__item--link"
                                onClick={onClick}
                                data-item={item}
                                data-index={i}
                            >
                                {item}
                            </a>
                        </li>
                   ))
               }
           </ul>
        </>
    )
}

export default PillTabs;
