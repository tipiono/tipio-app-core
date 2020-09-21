import React from 'react';

function BusinessPrivateNavigationItems(props) {
    return (
        <ul className="nav-list d-none d-md-block">
            <li className="nav-list-item">
                <button className="link-button nav-list-link nav-list-lg-link " onClick={props.mainNavOnClick}>
                    Privat
                </button>
            </li>
            <li className="nav-list-item">
                <button className="link-button nav-list-link nav-list-lg-link active">Bedrift</button>
            </li>
        </ul>
    );
}
export default BusinessPrivateNavigationItems;
