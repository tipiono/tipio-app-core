import React, { useState } from 'react';
import ToggleSwitch from '../../../UI/Forms/ToggleSwitch';

const OrderItemCard = ({ order, deliveredOnChange }) => {
    const [activeOrder, setActiveOrder] = useState(false);
    let [address] = order.order_addresses;
    address = address || {};
    return (
        <>
            <section className="orderItem">
                <div className="orderItem__toggleSwitch">
                    <ToggleSwitch
                        name={`delivered${order.id}`}
                        id={`delivered${order.id}`}
                        checked={order.delivered}
                        onChange={deliveredOnChange}
                        data-order_id={order.id}
                    />
                    <span>{order.delivered ? 'Levert' : 'Ikke levert'}</span>
                </div>
                <div
                    className="orderItem__content"
                    className={`orderItem__content ${activeOrder ? 'orderActive' : ''}`}
                >
                    <div className="orderItem__content--personalDetails">
                        <div className="orderItem--row">
                            <p className="userName w-33 p-bold">{order.order_user.full_name}</p>
                            <p className="w-33 p-bold">Adresse: {address.address}</p>
                            <p className="w-33 p-bold post__sted">
                                <span>Post sted: </span> {address.city}, {address.zip_code}
                            </p>
                        </div>
                        <div className="orderItem--row">
                            <p className="w-33">E-post: {order.order_user.email}</p>
                            <p className="w-33">Nummer: 987 67 890</p>
                        </div>
                    </div>
                    <div className="orderItem__content--productDetails">
                        {order.order_products.map((order_product) => (
                            <div className="orderItem--row">
                                <p className="w-33 p-bold product__title">{order_product.title}</p>
                                <p className="w-33 orderNumber">Ordrenummer: 89674590</p>
                                <div className="w-33 antall__price">
                                    <p>Antall: {order_product.quantity}</p>
                                    <p>Pris: {order_product.price} Kr</p>
                                </div>
                            </div>
                        ))}
                        <div className="orderItem--row">
                            <p className="w-33">30.06.2019 - 13:09</p>
                            <p className="w-33 orderNumberMobile">Ordrenummer: 89674590</p>
                            <p className="w-33">Betalingsmåte: Kort</p>
                            <p className="w-33">Størrelse: 46</p>
                        </div>
                    </div>
                    <div className="orderItem__content--totalSum">
                        <p>Totalsum</p>
                        <p>{order.total_price} Kr</p>
                    </div>
                    <div
                        className="orderItem__content--arrow"
                        onClick={() => {
                            setActiveOrder(!activeOrder);
                        }}
                    >
                        <svg width={21} height={13} viewBox="0 0 21 13" fill="none">
                            <path
                                d="M10.51 12.2c-.33 0-.645-.13-.88-.36L.67 3a1.255 1.255 0 011.75-1.8l8.09 8 8.09-8A1.259 1.259 0 1120.36 3l-9 8.86a1.24 1.24 0 01-.85.34z"
                                fill="#8C8F91"
                            />
                            <mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={0} width={21} height={13}>
                                <path
                                    d="M10.51 12.2c-.33 0-.645-.13-.88-.36L.67 3a1.255 1.255 0 011.75-1.8l8.09 8 8.09-8A1.259 1.259 0 1120.36 3l-9 8.86a1.24 1.24 0 01-.85.34z"
                                    fill="#fff"
                                />
                            </mask>
                            <g mask="url(#prefix__a)">
                                <path fill="#8C8F91" d="M-2-6h50v50H-2z" />
                            </g>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderItemCard;
