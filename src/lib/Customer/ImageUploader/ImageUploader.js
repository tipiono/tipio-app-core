import React from "react";

function ImageUploader({}) {
    return (
        <>
            <a className="imageUploader" href="">

                <svg className="imageUploader--icon" width={40} height={40}>
                    <title>{'Group 3'}</title>
                    <g fill="none" fillRule="evenodd">
                        <circle fill="#4ABCAC" cx={20} cy={20} r={20} />
                        <path
                            d="M19.088 20.936h-5.456a.92.92 0 110-1.84h5.456V13.64a.92.92 0 111.84 0v5.456h5.464a.92.92 0 110 1.84h-5.464V26.4a.92.92 0 11-1.84 0v-5.464z"
                            fill="#4F2E90"
                            fillRule="nonzero"
                        />
                    </g>
                </svg>

                {/*<img src={AddTipio} className="mb-3" alt="" width="40px" height="40px"/>*/}


                <h5 className="imageUploader--label">Last opp produktbilder</h5>
            </a>
        </>
    )
}

export default ImageUploader;
