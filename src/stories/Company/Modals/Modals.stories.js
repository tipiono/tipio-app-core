import React from 'react';
import { storiesOf } from '@storybook/react';
import {SuccessModal, DeleteAccount, AddAdditionalSales, WonBiddingRound} from '../../../lib/index';


storiesOf('Company/Components/Modals', module)

    .add('Sale product added', () =>
        <>
            <div className="col-3 m-3">
                <SuccessModal
                    successTitle={"Mersalgsprodukt lagt til!"}
                />
            </div>
        </>
    )

    .add('Business account deleted successfully', () =>
        <>
            <div className="col-3 m-3">
                <SuccessModal
                    successTitle={"Bedriftskontoen din er nå slettet!"}
                />
            </div>
        </>
    )

    .add('The bid has now been submitted!', () =>
        <>
            <div className="col-3 m-3">
                <SuccessModal
                    successTitle={"Budet er nå sendt inn!"}
                />
            </div>
        </>
    )

    .add('The offer has now been sent!', () =>
        <>
            <div className="col-3 m-3">
                <SuccessModal
                    successTitle={"Tilbudet er nå sendt!"}
                />
            </div>
        </>
    )

    .add('Delete company account', () =>
        <>
            <div className="col-3 m-3">
                <DeleteAccount/>
            </div>
        </>
    )

    .add('Add additional sales', () =>
        <>
            <div className="col-3 m-3">
                <AddAdditionalSales
                    image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/111/1562311855626"}
                />
            </div>
        </>
    )

    .add('Company won bidding round', () =>
        <>
            <div className="col-3 m-3">
                <WonBiddingRound
                    image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/111/1562311855626"}
                />
            </div>
        </>
    )



