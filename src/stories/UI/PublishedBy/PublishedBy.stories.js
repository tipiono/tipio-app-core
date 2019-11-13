import React from 'react';
import {storiesOf} from '@storybook/react';
import PublishedByWithDate from "../../../lib/UI/PublishedBy/PublishedByWithDate";
import PublishedByWithDropDown from "../../../lib/UI/PublishedBy/PublishedByWithDropdown";

storiesOf('UI/Product Published By', module)
    .add('Published By With Date', () =>
        <>
            <div className="col-4 m-3">
                <PublishedByWithDate
                    avatar={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/15/tipios/130/1563779193973"}
                    username={"Michael Lybek"}
                    date={"01.06.18"}
                    url={"massimodutti.com"}
                />
            </div>
        </>
    )

    .add('Published By With Dropdown', () =>
        <>
            <div className="col-4 m-3">
                <PublishedByWithDropDown
                    avatar={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/15/tipios/130/1563779193973"}
                    username={"Michael Lybek"}
                    date={"01.06.18"}
                    url={"massimodutti.com"}
                />
            </div>
        </>
    )



