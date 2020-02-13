import React from 'react';
import LargePopularTipio from "./LargePopularTipio";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useTranslation } from 'react-i18next';


const LargePopularBidingTipio = (props) => {
    const { t } = useTranslation();

    return (
       <LargePopularTipio {...props}>
           <div className="largePopularTipio__content__price">
               <h6 className="largePopularTipio__content__price--marketprice">4 500 Kr</h6>
               <h6 className="largePopularTipio__content__price--saleprice">2 500 Kr</h6>
           </div>

           <div className="largePopularTipio__content__submit">
               <SecondaryButton text="Legg i handlekurv"/>
           </div>
       </LargePopularTipio>
    );
};

export default LargePopularBidingTipio;