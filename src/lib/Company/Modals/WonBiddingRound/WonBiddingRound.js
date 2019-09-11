import React from "react";
import {Modal} from '../../../UI/Modal/Modal'
import {date} from "@storybook/addon-knobs";
import {CountdownType, PinkyCountdownSM} from "../../../index";

function WonBiddingRound({image, defaultValue}) {
    return (
        <>
            <Modal showCloseButton>
                <div className="wonBiddingRound">
                    <a href="">
                        <img className="wonBiddingRound--image" src={image} width="310px" alt="Tipio with offer"/>
                    </a>

                    <h4 className="wonBiddingRound--title">Gratulerer du vant budrunden!</h4>
                    <p className="wonBiddingRound--description">Du kan nå legge ut tre eksklusive mersalgs
                        tilbud <br/> til dine kunder</p>

                    <div className="wonBiddingRound--action">
                        <button type="button" className="btn btn-secondary btn-lg">Se tilbudet</button>
                    </div>

                    <div className="wonBiddingRound--timeLeft">
                        <PinkyCountdownSM expires_in={date(defaultValue)} type={CountdownType.PINK}/>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default WonBiddingRound;
