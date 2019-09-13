import React from 'react';

function PillTabs({}) {
    return (
        <>
           <ul className="pillTab">
               <li className="pillTab__item">
                   <a href="" className="pillTab__item--link">Interessert</a>
               </li>
               <li className="pillTab__item">
                   <a href="" className="pillTab__item--link">Motatte tilbud</a>
               </li>
               <li className="pillTab__item active">
                   <a href="" className="pillTab__item--link">Bestillinger</a>
               </li>
           </ul>
        </>
    )
}

export default PillTabs;
