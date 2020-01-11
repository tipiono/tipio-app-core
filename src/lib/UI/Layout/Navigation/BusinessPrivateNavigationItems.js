import React from 'react';

function BusinessPrivateNavigationItems() {
    return (
       <ul className="nav-list d-none d-md-block">
           <li className="nav-list-item">
               <a className="nav-list-link nav-list-lg-link" href="#">Privat</a>
           </li>
           <li className="nav-list-item">
               <a className="nav-list-link nav-list-lg-link active" href="#">Bedrift</a>
           </li>
       </ul>
    )
}
export default BusinessPrivateNavigationItems;