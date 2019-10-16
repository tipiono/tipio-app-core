import React, { useState } from 'react';
import SearchIcon from "../../Icons/SearchIcon";
import CloseIcon from "../../Icons/CloseIcon";
import cx from 'classnames';

const SearchInput = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <li className="nav-list-item position-relative d-flex align-items-center">
                <a href="#" className={cx("nav-list-link", { 'd-none': show })} onClick={()=>{setShow(true);}}>
                    <SearchIcon/>
                </a>

                <div className={cx("searchInput", { show: show })}>
                    <form className="searchInput__form">

                        {/*Search Icon*/}
                        <div className="searchInput__form--leftIcon">
                            <SearchIcon/>
                        </div>

                        {/*Input*/}
                        <input type="text"
                               className="searchInput__form--input"
                               placeholder="Hva søker du etter?"
                        />

                        {/*Close Icon*/}
                        <a className="searchInput__form--rightIcon" href="#" onClick={()=>{setShow(false);}}>
                            <CloseIcon/>
                        </a>

                    </form>
                </div>
            </li>
        </>
    );
};

export default SearchInput;
