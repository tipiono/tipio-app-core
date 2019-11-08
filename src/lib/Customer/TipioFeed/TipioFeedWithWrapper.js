import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css'

import Pagination from "../../UI/Pagination/Pagination";

const breakpointColumnsObj = (max = 4) => {
    return {
        default: max,
        1100: max - 1,
        700: max - 2,
        500: max - 2
    };
};

const TipioFeedWithWrapper = props => {
    const items = [];
    if (props.tipios) {
        for (let i = 0; i < props.tipios.length; i += 1) {
            const item = props.tipios[i];
            // if (i === 0 && showAddTipioButton) {
            //     items.push("<AddTipioButton />");
            // }
            if (props.card) {
                items.push(<div className="mb-4">{props.card(item)}</div>);
            }
        }
    }

    const showPrevButton = props.pageCount && props.page > 1;
    const showNextButton = props.pageCount && props.page < props.pageCount;

    const imgCountClassName = {
        1: 'one',
        2: 'one-half',
        3: 'one-quarter'
    };
    const v = imgCountClassName[props.tipios.length + 1];
    const selectImagesClass = v ? v : 'one-quarter';
    return (
        <>
            <div className={props.rootContainerClass}>
                <div className="container">
                <Masonry
                    breakpointCols={breakpointColumnsObj(props.itemsPerRow || 4)}
                    className={'my-masonry-grid ' + selectImagesClass}
                    columnClassName="my-masonry-grid_column"
                >
                    {items}
                </Masonry>
                {props.loading && <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>}
                </div>
            </div>
            {props.tipios && props.tipios.length > 0 && props.page > 0 &&

                <div className="d-flex justify-content-center my-4 pb-5">
                    {/* vendose pagination e ri ketu */}

                    <Pagination
                        page={props.page}
                        pageCount={props.pageCount}
                        showPrevButton={showPrevButton}
                        showNextButton={showNextButton}
                        handlePageClick={props.handlePageClick}
                    />
                </div>
            }
        </>
    );
};

TipioFeedWithWrapper.propTypes = {
    tipios: PropTypes.array,
    page: PropTypes.number,
    pageCount: PropTypes.number,
    loading: PropTypes.bool,
    favoriteMap: PropTypes.object,
    handlePageClick: PropTypes.func,
    handleFavoriteClick: PropTypes.func
};

export default TipioFeedWithWrapper;
