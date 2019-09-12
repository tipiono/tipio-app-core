import React from "react";

function LinkButton({text}) {
    return (
        <>
            <button type="button" className="btn btn-link">{text}</button>
        </>
    )
}

export default LinkButton;
