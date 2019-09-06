import React from "react";
import {Modal} from '../../../UI/Modal/Modal'

function WonBiddingRound({image}) {
    return (
        <>
            <Modal showCloseButton>
                <div className="wonBiddingRound">
                    <a href="">
                        <img className="wonBiddingRound--image" src={image} width="310px" alt="Tipio with offer" />
                    </a>

                    <h4 className="wonBiddingRound--title">Gratulerer du vant budrunden!</h4>
                    <p className="wonBiddingRound--description">Du kan nå legge ut tre eksklusive mersalgs tilbud <br/> til dine kunder</p>

                    <div className="wonBiddingRound--action">
                        <button type="button" className="btn btn-secondary btn-lg">Se tilbudet</button>
                    </div>

                    <span className="text-warning">22:30:19</span>

                </div>
            </Modal>
        </>
    )
}

export default WonBiddingRound;
