import React from 'react';
import { Modal } from '../../../UI/Modal/Modal';
import ExportIcon from '../../../UI/Icons/ExportIcon';

const ExportAs = ({ onClose, exportExcelOnClick, exportCSVOnClick }) => {
    return (
        <>
            <Modal showCloseButton onCloseButtonClick={onClose}>
                <div className="exportAs" onClick={exportCSVOnClick}>
                    <div className="exportAs--cvs">
                        <ExportIcon />
                        <h3 className="exportAs--cvs--label">Eksporter CSV-fil</h3>
                    </div>

                    <div className="exportAs--divider" />

                    <div className="exportAs--excel" onClick={exportExcelOnClick}>
                        <ExportIcon />
                        <h3 className="exportAs--excel--label">Eksporter Excel-fil</h3>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ExportAs;
