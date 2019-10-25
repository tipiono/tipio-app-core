import React from 'react';
import TipioCountdown from "../../UI/TipioCountdown/TipioCountdown";

export default function TipioCard({ tipio }) {
    return (
        <div className="product-card">
            <div className="card-header">
                <a>
                    {tipio.images && tipio.images.length && <img src={tipio.images[0].blob_url} alt="..."/>}
                </a>
                <TipioCountdown className="timer" expires_in={tipio.binding_expires_in}/>
            </div>
            <div className="card-body">
                <div className="card-price">
                    <h4 className="text-gray-500 line-through mb-0">{tipio.market_price} Kr</h4>
                </div>
                <div className="card-info">
                    <h4 className="card-title"><a>{tipio.title}</a></h4>
                    <p className="card-text">{tipio.subtitle}</p>
                </div>

                <button type="button" className="btn btn-secondary px-5">Kjøp</button>
            </div>
        </div>
    );
}
