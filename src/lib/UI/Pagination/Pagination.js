import React from 'react';
import ReactPaginate from 'react-paginate';


function Pagination({page, pageCount, showPrevButton, showNextButton, handlePageClick}) {
    return (
        <nav className="pagination" aria-label="Page navigation">
            <ReactPaginate
                previousLabel={''}
                nextLabel={''}
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
        </nav>
    )
}

export default Pagination;
