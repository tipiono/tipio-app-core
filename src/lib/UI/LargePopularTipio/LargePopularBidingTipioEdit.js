import React from 'react';
import LargePopularTipio from "./LargePopularTipio";
import SecondaryOutlineButton from "../Buttons/SecondaryOutlineButton";

const LargePopularBidingTipioEdit = (props) => {
    return (
            <LargePopularTipio {...props}>
                <div className="largePopularTipio__content__price">
                    <h6 className="largePopularTipio__content__price--marketprice">4 500 Kr</h6>
                    <h6 className="largePopularTipio__content__price--saleprice">2 500 Kr</h6>
                </div>

                <div className="largePopularTipio__content__submit">
                    <SecondaryOutlineButton text="Edit"/>
                </div>
            </LargePopularTipio>
    );
};

export default LargePopularBidingTipioEdit;