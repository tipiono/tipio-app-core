import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';

import Pagination from '../../UI/Pagination/Pagination';
import WithAnimation from '../../effects/withAnimation';

const breakpointColumnsObj = (max = 4) => {
    return {
        default: max,
        1100: max - 1,
        700: max - 2,
        500: max - 2
    };
};

const TipioFeedWithWrapper = (props) => {
    const items = [];
    const showAddTipioButton = props.showAddTipioButton !== undefined ? props.showAddTipioButton : true;
    if (props.tipios) {
        for (let i = 0; i < props.tipios.length; i += 1) {
            const item = props.tipios[i];
            if (showAddTipioButton && i === 0 && props.AddTipioButton) {
                items.push(<props.AddTipioButton key="add-button" />);
            }
            if (props.card) {
                items.push(
                    <div className="mb-3 mb-md-4">
                        <WithAnimation key={props.card(item.id)}>{props.card(item)}</WithAnimation>
                    </div>
                );
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
                    {props.loading && (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {props.tipios && props.tipios.length > 0 && props.page > 0 && (
                <div className="d-flex justify-content-center py-5">
                    <Pagination
                        page={props.page}
                        pageCount={props.pageCount ? props.pageCount : 1}
                        showPrevButton={showPrevButton}
                        showNextButton={showNextButton}
                        handlePageClick={props.handlePageClick}
                    />
                </div>
            )}
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
