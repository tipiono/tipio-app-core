import React from 'react';
import { storiesOf } from '@storybook/react';
import {Accordion} from '../../../lib';



storiesOf('UI/Accordion', module)

    .add('Accordion', () =>
        <>
            <div className="col-3 m-3">
                <Accordion >
                    <div title={'Frakt & retur'}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                        assumenda shoreditch et.
                    </div>
                </Accordion>
            </div>
        </>
    )
    .add('Accordion With Multiple Items', () =>
    <>
        <div className="col-3 m-3">
            <Accordion >
                <div title={'First tab'}>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid.
                </div>
                <div title={'Second Tab'}>
                    3 wolf moon officia aute, non cupidatat skateboard
                    dolor brunch.
                </div>
            </Accordion>
        </div>
    </>
)
