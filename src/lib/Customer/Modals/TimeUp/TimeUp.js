import React from 'react';
import {Modal, ModalType} from '../../../UI/Modal/Modal'
const TimeUp = (props) => {
    return (
        <div>
            <Modal
                showCloseButton={true}
                onCloseButtonClick={() => {
                }}
                type={ModalType.XLARGE}
            >
                <div className="wrapper">
                    <div className="content">
                        <img  alt=""/>
                        <h4>Tiden er ute!</h4>
                        <p className="smaller-text">Ingen leverandører kom med Tilbud.   Vil du prøve igjen å se om du får napp?</p>
                        <div className="buttons-part">
                            <button type="button" className="btn btn-secondary btn-lg" onClick={()=>{
                            }}>Prøv igjen</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg" onClick={() => {
                            }}>Ikke nå</button>
                        </div>
                    </div>
                </div>
                <a href="#" className="second-logo">
                    <img width="28px" height="28px"  alt="" className="modal-close second-logo"/>
                </a>
            </Modal>
        </div>
    );
};

export default TimeUp;
