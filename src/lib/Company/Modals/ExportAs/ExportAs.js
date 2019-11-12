import React from 'react';
import {Modal} from '../../../UI/Modal/Modal'
import ExportIcon from "../../../UI/Icons/ExportIcon";

const ExportAs = () => {
    return (
        <>
            <Modal showCloseButton>
                <div className="exportAs">
                    <a href="" className="exportAs--cvs">
                        <ExportIcon/>
                        <h3 className="exportAs--cvs--label">Eksporter CSV-fil</h3>
                    </a>

                    <div className="exportAs--divider" />

                    <a href="" className="exportAs--excel">
                        <ExportIcon/>
                        <h3 className="exportAs--excel--label">Eksporter Excel-fil</h3>
                    </a>

                </div>
            </Modal>
        </>
    );
};

export default ExportAs;




