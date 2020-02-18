import React from "react";
import ImageShimmer from 'react-shimmer';
import ContentSpinner from '../Spinner/ContentSpinner';

function Image({image, selectedIndex, onChange}) {
    return <label className="layout-item">
        <input type="checkbox" value={image.id} onChange={onChange} checked={selectedIndex > 0 ? "checked" : ""}/>
        <ImageShimmer
            className="layout-img"
            src={image.src}
            fallback={<ContentSpinner />}
        />
        {selectedIndex > 0 && <span className="selected-number">{selectedIndex}</span>}
    </label>;

}
export default Image;
