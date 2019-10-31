import React, { useState, useEffect, useCallback } from 'react';
import SearchIcon from "../../Icons/SearchIcon";
import CloseIcon from "../../Icons/CloseIcon";
import cx from 'classnames';
import Overlay from '../../Overlay/Overlay';

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
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            //alert("search nav enter")
            props.searchFormOnSubmit(e.target.value);
        }
    }
    const _onClick = () => {
        setShow(false);
    }

    return (
        <>
            {show && <Overlay onClick={_onClick} />}
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
                        id="search-layout"
                        ref={input => input && input.focus()}
                        onKeyUp={_onKeyUp}
                        type="text"
                        className="searchInput__form--input"
                        placeholder="Søk produkt, navn merke..."
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
