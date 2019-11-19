import React from "react";
import {Modal} from '../Modal'

function SuccessModal({successTitle, successDescription, ...props}) {
    return (
        <>
            <Modal {...props}>
                <div className="successModal">
                    <svg className="successModal--icon" width={75} height={75}>
                        <g fill="none" fillRule="evenodd" strokeWidth={4}>
                            <path
                                stroke="#4BBBAB"
                                d="M64.702 23.398a33.224 33.224 0 014.049 15.946c0 18.434-14.943 33.376-33.375 33.376C16.943 72.72 2 57.778 2 39.344 2 20.912 16.943 5.969 35.376 5.969a33.215 33.215 0 0118.589 5.653"
                            />
                            <path
                                stroke="#E44498"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.554 31.356L35.375 49.33 72.56 2.629"
                            />
                        </g>
                    </svg>

                    <h3 className="successModal--title">{successTitle}</h3>
                    <p className="successModal--description">{successDescription}</p>
                </div>
            </Modal>
        </>
    )
}

export default SuccessModal;
