import React from 'react';
import {Modal} from "../../..";
import GrayOutlineButton from "../../../UI/Buttons/GrayOutlineButton";
import InfoIcon from "../../../UI/Icons/InfoIcon";

const AlreadyHasBid = (props) => {
    return (
        <>
            <Modal showCloseButton={!props.isLoading} {...props}>
                <div className="alreadyHasBid">

                    <div className="alreadyHasBid--icon">
                      <InfoIcon />
                    </div>

                    <h4 className="alreadyHasBid--title">Oi! Noen var vist raskere enn deg</h4>
                    <p className="alreadyHasBid--description">En annen bedrift har akkurat sendt inn et bud på
                        dette <br/> produkte. Budet ditt ble derfor dessverre ikke sendt inn. </p>

                    <div className="alreadyHasBid--action">
                        <GrayOutlineButton text="Avbryt" onClick={props.onCloseButtonClick} disabled={props.isLoading}/>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AlreadyHasBid;
