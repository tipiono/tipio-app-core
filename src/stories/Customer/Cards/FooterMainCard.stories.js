import React from 'react';
import {storiesOf} from '@storybook/react';
import FooterMainCard from "../../../lib/Customer/Cards/FooterMainCard/FooterMainCard";

storiesOf('Customer/Components/Cards/FooterMainCard', module)
    .add('Footer Main Product Card', () =>
        <>
            <div className="col-12 p-4">
               <FooterMainCard />
            </div>
        </>
    )

