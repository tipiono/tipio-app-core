import React from "react";

function Avatar({src, loading}) {
    return (
        <>
            {src && <img className="avatar" src={src} alt=""/>}

            {loading ? (
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ): (null)}
        </>
    )
}

export default Avatar;
