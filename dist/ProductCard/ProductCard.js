// import React from 'react';
// import {Link} from '/react-router-dom';
// import TipioCountdown from '/components/TipioCountdown'
//
// export default function ProductCard({product, customButton, linkTo, showTimer}) {
//     let showTimerNotNull = showTimer !== undefined ? showTimer : true;
//     return (
//         <div className="product-card">
//             <div className="card-header">
//                 <Link to={(linkTo && linkTo(product)) || '/'}>
//                     {product.images && product.images.length && <img src={product.images[0].blob_url} alt="..."/>}
//                 </Link>
//                 {showTimerNotNull && <TipioCountdown className="timer" expires_in={product.expires_in}/>}
//             </div>
//             <div className="card-body">
//                 <div className="card-price">
//                     <h4 className="text-gray-500 line-through mb-0">{product.market_price} Kr</h4>
//                 </div>
//                 <div className="card-info">
//                     <h4 className="card-title"><Link to={(linkTo && linkTo(product)) || '/'}>{product.title}</Link></h4>
//                     <p className="card-text">{product.subtitle}</p>
//                 </div>
//
//                 {/*{!customButton && <button type="button" className="btn btn-secondary px-5">Kjøp</button>}*/}
//                 {/*{customButton && customButton(product)}*/}
//
//                 {/*<small className="status">13t 34m igjen</small>*/}
//             </div>
//         </div>
//     );
// }
"use strict";