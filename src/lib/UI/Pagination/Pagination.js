import React from 'react';
import ReactPaginate from 'react-paginate';


function Pagination({page, pageCount, showPrevButton, showNextButton, handlePageClick}) {
    return (
        <nav className="pagination" aria-label="Page navigation">
            {showPrevButton &&
            <a className="page-link-prev" href="#" aria-label="Previous" onClick={() => {
                handlePageClick({selected: parseInt(page - 2)})
            }
            }>
                <svg className="left-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                     viewBox="0 0 24 24">
                    <g className="nc-icon-wrapper" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                       fill="#5c6265" stroke="#5c6265">
                        <polyline fill="none" stroke="#5c6265" strokeMiterlimit="10" points="17,2 7,12 17,22 "
                                  transform="translate(0, 0)"/>
                    </g>
                </svg>
            </a>
            }
            <ReactPaginate
                previousLabel={null}
                nextLabel={null}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination-content'}
                activeClassName={'active'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                forcePage={page - 1}
            />
            {showNextButton &&
            <a className="page-link-next" href="#" aria-label="Next" onClick={() => {
                handlePageClick({selected: parseInt(page)})
            }}>
                <svg className="right-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                     viewBox="0 0 24 24">
                    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="#5c6265"
                       stroke="#5c6265">
                        <polyline fill="none" stroke="#5c6265" strokeMiterlimit="10" points="7,2 17,12 7,22 "
                                  transform="translate(0, 0)"/>
                    </g>
                </svg>
            </a>
            }
        </nav>
    )
}

export default Pagination;
