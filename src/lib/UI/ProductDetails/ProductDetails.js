import React from 'react';
import ShowMoreText from "../Text/ShowMoreText";

function ProductDetails({title, text}) {
    return (
        <>
            <div className="productDetails">
                <h5 className="productDetails--title">{title}</h5>
                <ShowMoreText
                    text={text}
                />
            </div>
        </>
    )
}

export default ProductDetails;
