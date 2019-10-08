import React from 'react';
import {storiesOf} from '@storybook/react';
import {ProductDetails} from '../../../lib'

storiesOf('UI/Product Details', module)
    .add('Product Details', () =>
        <>
            <div className="col-5 m-3">
                <ProductDetails
                    title={"Samsung 65 UHD Smart- TV UE65NU7105"}
                    text={"Opplev livaktige farger i hvert bilde med Samsung 65 UHD Smart-TV UE65NU7105. Bla deg gjennom utvalget på nett for å få underholdningen du ønsker levert på storskjerm."}
                />
            </div>
        </>
    )




