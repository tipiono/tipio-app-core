import React from 'react';
import cx from 'classnames';

function CategoriesHeader({ data, parent, path, backButtonOnClick, subCategoriesOnClick, isFilter, clearFilter }) {
    const title = path && path[0] ? path[0].title : !!isFilter ? 'Velg Kategori' : '';
    let items = [];
    for (let i = 1; i < (path && path.length); i += 1) {
        items.push(path[i]);
    }
    return (
        <>
            {title && (
                <div className="choose-category-header">
                    <div className="category-header-title">
                        <div className="header__title">
                            {' '}
                            <h3 className="mb-0">{title}</h3>
                            {path && path[0] && path[0].title && (
                                <span className="backward" onClick={backButtonOnClick}>
                                    <svg width={15} height={9}>
                                        <title>{'Mask'}</title>
                                        <path
                                            d="M7.243.26c.23 0 .451.09.616.252L14.131 6.7a.879.879 0 11-1.225 1.26l-5.663-5.6-5.663 5.6A.881.881 0 01.348 6.7l6.3-6.202A.868.868 0 017.243.26z"
                                            fill="#4F2E90"
                                            fillRule="nonzero"
                                        />
                                    </svg>
                                </span>
                            )}
                        </div>
                        {!!isFilter && (
                            <div className="clear__filters" onClick={clearFilter}>
                                <svg width={11} height={12} viewBox="0 0 11 12" fill="none">
                                    <path
                                        d="M6.484 6.2l4.296-4.32a.692.692 0 00-.978-.978L5.506 5.204 1.21.902a.692.692 0 00-.978.978L4.528 6.2.232 10.472a.69.69 0 00.489 1.181.69.69 0 00.489-.203l4.296-4.296 4.296 4.296c.13.13.307.203.492.204a.696.696 0 00.486-1.2L6.484 6.2z"
                                        fill="#4F2E90"
                                    />
                                    <mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={0} width={11} height={12}>
                                        <path
                                            d="M6.484 6.2l4.296-4.32a.692.692 0 00-.978-.978L5.506 5.204 1.21.902a.692.692 0 00-.978.978L4.528 6.2.232 10.472a.69.69 0 00.489 1.181.69.69 0 00.489-.203l4.296-4.296 4.296 4.296c.13.13.307.203.492.204a.696.696 0 00.486-1.2L6.484 6.2z"
                                            fill="#fff"
                                        />
                                    </mask>
                                    <g mask="url(#prefix__a)">
                                        <path fill="#4F2E90" d="M-2-1h30v30H-2z" />
                                    </g>
                                </svg>
                                Nullstill
                            </div>
                        )}
                    </div>

                    <ul className="category-types">
                        {items.map((navigation, i) => {
                            return (
                                <li className="category-type-item" key={navigation.id + ':' + navigation.title}>
                                    {items.length === i + 1 ? (
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                                subCategoriesOnClick(navigation);
                                            }}
                                            className={cx('category-type-item-link')}
                                        >
                                            {navigation.title}
                                        </span>
                                    ) : (
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                                subCategoriesOnClick(navigation);
                                            }}
                                            className={cx('category-type-item-link')}
                                        >
                                            {navigation.title}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
}
export default CategoriesHeader;
