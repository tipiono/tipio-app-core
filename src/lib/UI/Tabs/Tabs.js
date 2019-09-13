import React from 'react';

function Tabs({}) {
    return (
        <>
           <ul className="tab">
               <li className="tab__item">
                   <a href="" className="tab__item--link active">Interessert</a>
               </li>
               <li className="tab__item">
                   <a href="" className="tab__item--link">Motatte tilbud</a>
               </li>
               <li className="tab__item">
                   <a href="" className="tab__item--link">Bestillinger</a>
               </li>
           </ul>
        </>
    )
}

export default Tabs;
