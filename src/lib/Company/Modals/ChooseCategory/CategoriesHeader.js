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

                    <ul className="category-types">
                        {items.map((navigation, i) => {
                            if (items.length === i + 1) {
                                return (
                                    <li className="category-type-item">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                                subCategoriesOnClick(navigation);
                                            }}
                                            className={cx('category-type-item-link')}
                                        >
                                            {navigation.title}
                                        </span>
                                    </li>
                                );
                            } else {
                                return (
                                    <li className="category-type-item">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                                subCategoriesOnClick(navigation);
                                            }}
                                            className={cx('category-type-item-link')}
                                        >
                                            {navigation.title}
                                        </span>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                    {!!isFilter && <p onClick={clearFilter}>Nullstill</p>}
                </div>
            )}
        </>
    );
}
export default CategoriesHeader;
