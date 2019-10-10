import React from 'react';
import ToggleSwitch from "../../../UI/Forms/ToggleSwitch";

const OrderItemCard = () => {
    return (
        <>

            <tbody className="orderItemCard">
                <tr className="orderItemCard__customerDetail">
                    <td>
                        <ToggleSwitch/>
                        <span>Levert</span>
                    </td>
                    <td className="orderItemCard__customerDetail--name">Amalie Amtedalh</td>
                    <td className="orderItemCard__customerDetail--address">Adresse:,Ostadalsveien 72</td>
                    <td className="orderItemCard__customerDetail--address">Kristiansand, 0746</td>
                    <td></td>
                </tr>
                <tr className="border-bottom-1">
                    <td></td>
                    <td>E-post:,amalie.amtedalh@gmail.com</td>
                    <td>Nummer:,987 67 890</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="orderItemCard__orderDetail">
                    <td></td>
                    <td className="orderItemCard__orderDetail--productName">Samsung 65" UHD Smart-TV UE65NU7105</td>
                    <td>Ordrenummer:,89674590</td>
                    <td>Antall:,1</td>
                    <td>Pris: 999 Kr</td>
                </tr>
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
