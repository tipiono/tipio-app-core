import React from 'react';

function CategoriesHeader({ data, backButtonOnClick }) {
    const mainTitle = data && data.length !== 0 && data[0].title;
    return <>
        {mainTitle &&
            <div className="choose-category-header">
                <div className="category-header-title">
                    <h3 className="mb-0">{mainTitle}</h3>
                    {data.length > 0 && <a className="backward" href="#" onClick={backButtonOnClick}>
                        {/*<svg width="24" height="24" viewBox="0 0 24 24">*/}
                        {/*    <g className="nc-icon-wrapper" fill="#8c8f91">*/}
                        {/*        <path fill="#8c8f91"*/}
                        {/*              d="M1.293,11.293L9,3.586L10.414,5l-6,6H22c0.553,0,1,0.448,1,1s-0.447,1-1,1H4.414l6,6L9,20.414l-7.707-7.707 C0.902,12.316,0.902,11.684,1.293,11.293z" />*/}
                        {/*    </g>*/}
                        {/*</svg>*/}
                        <svg width={15} height={9}>
                            <title>{'Mask'}</title>
                            <path
                                d="M7.243.26c.23 0 .451.09.616.252L14.131 6.7a.879.879 0 11-1.225 1.26l-5.663-5.6-5.663 5.6A.881.881 0 01.348 6.7l6.3-6.202A.868.868 0 017.243.26z"
                                fill="#4F2E90"
                                fillRule="nonzero"
                            />
                        </svg>
                    </a>}
                </div>

                <ul className="category-types">
                    {data.slice(1).map((navigation) => {
                        return <li className="category-type-item">{navigation.title}</li>
                    })}
                </ul>

            </div>
        }
        </>
}
export default CategoriesHeader;
