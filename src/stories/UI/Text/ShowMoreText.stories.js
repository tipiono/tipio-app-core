import React from 'react';
import {storiesOf} from '@storybook/react';
import { ShowMoreText } from '../../../lib'

const text = `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
terry
richardson ad squid. 3 wolf moon officia aute, non cupidatat
skateboard
dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
wolf
moon
tempor, sunt aliqua put a bird on it squid single-origin coffee
nulla
assumenda shoreditch et.`;

storiesOf('UI/Text', module)
    .add('Show more text', () =>
        <>
            <div className="col-5 m-3">
                <ShowMoreText text={text} />
            </div>
        </>
    )
