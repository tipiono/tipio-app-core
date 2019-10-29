import React from 'react';
import ToggleSwitch from "../../../UI/Forms/ToggleSwitch";

const OrderItemCard = ({ order, deliveredOnChange}) => {
    let [address] = order.order_addresses;
    address = address || {};
    return (
        <>
            <tbody className="orderItemCard">
                <tr className="orderItemCard__customerDetail">
                    <td>
                        <ToggleSwitch
                            name={`delivered${order.id}`}
                            id={`delivered${order.id}`}
                            checked={order.delivered}
                            onChange={deliveredOnChange}
                        />
                        <span>Levert</span>
                    </td>
                    <td className="orderItemCard__customerDetail--name">{order.order_user.full_name}</td>
                    <td className="orderItemCard__customerDetail--address">Adresse: {address.address}</td>
                    <td className="orderItemCard__customerDetail--address">{address.city}, {address.zip_code}</td>
                    <td></td>
                </tr>
                <tr className="border-bottom-1">
                    <td></td>
                    <td>E-post: {order.order_user.email}</td>
                    <td>Nummer:,987 67 890</td>
                    <td></td>
                    <td></td>
                </tr>
                {
                    order.order_products.map((order_product) => (
                        <tr className="orderItemCard__orderDetail">
                            <td></td>
                            <td className="orderItemCard__orderDetail--productName">{order_product.title}</td>
                            <td>Ordrenummer:,89674590</td>
                            <td>Antall: {order_product.quantity} </td>
                            <td>Pris: {order_product.price} Kr</td>
                        </tr>
                    ))
                }
                <tr className="border-bottom-2">
                    <td></td>
                    <td>30.06.2019 - 13:09</td>
                    <td>Betalingsmåte:,Kort</td>
                    <td>Størrelse:,46</td>
                    <td></td>
                </tr>
                <tr className="orderItemCard__orderAmount">
                    <td></td>
                    <td className="orderItemCard__orderAmount--label">Totalsum</td>
                    <td></td>
                    <td></td>
                    <td className="orderItemCard__orderAmount--price">1 998 Kr</td>
                </tr>
            </tbody>

            <br/>
        </>
    );
};

export default OrderItemCard;
