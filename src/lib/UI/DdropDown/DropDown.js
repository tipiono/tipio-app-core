import React, {useState} from 'react';

export function DropDown(props) {
    const [dropDownVisibility, setDropDownVisibility] = useState(false);
    return (
        <>
            <a className="dropdown-toggle mb-2" href="#"
               id="minKonto"
               role="button" data-toggle="dropdown" aria-haspopup="true"
               aria-expanded="false" onClick={(e) => {
                e.preventDefault();
                setDropDownVisibility(!dropDownVisibility)
            }}>
                {props.title}
                {props.afterTitle && props.afterTitle()}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 24 24">
                    <g className="nc-icon-wrapper" strokeLinecap="round"
                       strokeLinejoin="round" strokeWidth="2" fill="#ffffff"
                       stroke="#ffffff">
                        <polyline fill="none" stroke="#ffffff"
                                  strokeMiterlimit="10" points="2,7 12,17 22,7 "
                                  transform="translate(0, 0)"/>
                    </g>
                </svg>
            </a>
            <ul className={`dropdown-list ${dropDownVisibility ? 'show' : 'd-none'}`}>
                {
                    React.Children.map(props.children, (child) => {
                        return child;
                    })
                }
            </ul>
        </>
    );
}

export function DropDownItem(props) {
    return (<li>{props.children}</li>)
}