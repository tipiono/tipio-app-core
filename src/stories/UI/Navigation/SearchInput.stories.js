import React from 'react';
import {storiesOf} from '@storybook/react';
import SearchInput from "../../../lib/UI/Layout/Navigation/SearchInput";

storiesOf('UI/Navigation/Search', module)

    .add('Search Input', () =>
        <>
            <div className="col-md-4 m-3 bg-secondary py-5">
                <SearchInput />
            </div>
        </>
    )
