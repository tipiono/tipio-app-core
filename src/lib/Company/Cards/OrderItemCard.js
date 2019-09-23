import React from 'react';
import {ToggleSwitch} from "../../index";

const OrderItemCard = () => {
    return (
        <div className="orderItemCard">
            <div className="row">
                <div className="col-sm-12 col-lg-1">
                    <ToggleSwitch/>
                </div>

                <div className="col-sm-12 col-lg-11">
                    <div className="table-responsive">
                        <table className="table table-borderless">

                            <tbody className="orderItemCard__customerDetail">
                            <tr>
                                <td className="orderItemCard__customerDetail--name">Amalie Amtedalh</td>
                                <td className="orderItemCard__customerDetail--address">Adresse: Ostadalsveien 72</td>
                                <td className="orderItemCard__customerDetail--address" colSpan="">Kristiansand, 0746
                                </td>
                            </tr>

                            <tr>
                                <td>E-post: amalie.amtedalh@gmail.com</td>
                                <td colSpan="">Nummer: 987 67 890</td>
                            </tr>
                            </tbody>

                            <tbody className="orderItemCard__orderDetail">
                            <tr>
                                <td className="orderItemCard__orderDetail--productName">Samsung 65" UHD Smart-TV
                                    UE65NU7105
                                </td>
                                <td>Ordrenummer: 89674590</td>
                                <td>Antall: 1</td>
                                <td className="text-right">Pris: 999 Kr</td>
                            </tr>

                            <tr>
                                <td>30.06.2019 - 13:09</td>
                                <td>Betalingsmåte: Kort</td>
                                <td colSpan="">@Størrelse: 46</td>
                            </tr>
                            </tbody>

                            <tbody className="orderItemCard__orderAmount">
                            <tr>
                                <td className="orderItemCard__orderAmount--label" colSpan="3">Totalsum</td>
                                <td className="orderItemCard__orderAmount--price text-right"> 1 998 Kr</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderItemCard;
