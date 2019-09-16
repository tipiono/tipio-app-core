import React from 'react';

function PillTabs({}) {
    return (
        <>
           <ul className="pillTab">
               <li className="pillTab__item">
                   <a href="" className="pillTab__item--link">Alle</a>
               </li>
               <li className="pillTab__item">
                   <a href="" className="pillTab__item--link">Levert</a>
               </li>
               <li className="pillTab__item active">
                   <a href="" className="pillTab__item--link">Ikke levert</a>
               </li>
           </ul>
        </>
    )
}

export default PillTabs;
