import React, { useState, useEffect, useCallback } from 'react';
import SearchIcon from "../../Icons/SearchIcon";
import CloseIcon from "../../Icons/CloseIcon";
import cx from 'classnames';

const SearchInput = (props) => {
    /**
     * State
     */
    const [show, setShow] = useState(false);

    /**
     * Effects
     */
    const escFunction = useCallback((event) => {
        if(event.keyCode === 27) {
            setShow(false);
        }
      }, []);
    
      useEffect(() => {
        document.addEventListener('keydown', escFunction, false);
    
        return () => {
          document.removeEventListener('keydown', escFunction, false);
        };
      }, []);

    const _onKeyUp = (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            props.searchFormOnSubmit(e.target.value);
        }
    }
    return (
        <>
            <a href="#" className={cx("nav-list-link", {'d-none': show})} onClick={(e) => {e.preventDefault();setShow(true);}}>
                <SearchIcon/>
            </a>

            <div className={cx("searchInput", {show: show})}>
                <div className="searchInput__form">

                    {/*Search Icon*/}
                    <div className="searchInput__form--leftIcon">
                        <SearchIcon/>
                    </div>

                    {/*Input*/}
                    <input
                        ref={input => input && input.focus()}
                        onKeyUp={_onKeyUp}
                        type="text"
                        className="searchInput__form--input"
                        placeholder="Hva søker du etter?"
                    />
                    {/*Close Icon*/}
                    <a className="searchInput__form--rightIcon" href="#" onClick={() => {
                        setShow(false);
                    }}>
                        <CloseIcon/>
                    </a>

                </div>
            </div>
        </>
    );
};

export default SearchInput;
