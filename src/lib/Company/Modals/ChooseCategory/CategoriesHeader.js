import React from 'react';
import cx from 'classnames';

function CategoriesHeader({ data, parent, path, backButtonOnClick, subCategoriesOnClick }) {
    // const mainTitle = data && data.length !== 0 && data[0].title;
    const mainTitle = parent && parent.title;
    const currentCat = path && path.length > 0 ? path[path.length - 1] : { id: 0 };
    return (
        <>
            {mainTitle && (
                <div className="choose-category-header">
                    <div className="category-header-title">
                        <h3 className="mb-0">{mainTitle}</h3>
                        {parent && (
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
                        {data.map((navigation) => {
                            return (
                                <li className="category-type-item">
                                    <span
                                        onClick={(e) => {
                                            e.preventDefault();
                                            subCategoriesOnClick(navigation);
                                        }}
                                        className={cx('category-type-item-link', {
                                            selected: navigation.id === currentCat.id
                                        })}
                                    >
                                        {navigation.title}
                                    </span>
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
