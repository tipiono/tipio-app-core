import React from 'react';
import {storiesOf} from '@storybook/react';
import {NewDropdown, NewDropdownItem} from "../../../lib";


storiesOf('UI/Dropdown', module)
    .add('Left-aligned menu', () =>
        <>
            <div className="col-2 m-3">
                <NewDropdown
                    title="Dropdown button"
                >
                    <NewDropdownItem key={'1'}>Del på facebook</NewDropdownItem>
                    <NewDropdownItem key={'2'}>Del på facebook</NewDropdownItem>
                    <NewDropdownItem key={'3'}>Del på facebook</NewDropdownItem>
                </NewDropdown>
            </div>
        </>
    )

    .add('Right-aligned menu', () =>
        <>
            <div className="col-2 m-3">
                <NewDropdown
                    title="Dropdown button"
                    aligned="dropdown-menu-right"
                >
                    <NewDropdownItem key={'1'}>Del på facebook</NewDropdownItem>
                    <NewDropdownItem key={'2'}>Del på facebook</NewDropdownItem>
                    <NewDropdownItem key={'3'}>Del på facebook</NewDropdownItem>
                </NewDropdown>
            </div>
        </>
    )

    .add('Dropup', () =>
        <>
            <div className="col-2 m-3">
                <NewDropdown
                    title="Dropdown button"
                    direction="dropup"
                >
                    <NewDropdownItem key={'1'}>Del på facebook</NewDropdownItem>
                    <NewDropdownItem key={'2'}>Del på facebook</NewDropdownItem>
                    <NewDropdownItem key={'3'}>Del på facebook</NewDropdownItem>
                </NewDropdown>
            </div>
        </>
    )

    .add('Dropright', () =>
        <>
            <div className="col-2 m-3">
                <NewDropdown
                    title="Dropdown button"
                    direction="dropright"
                >
                    <NewDropdownItem key={'1'}>Del på facebook</NewDropdownItem>
                    <NewDropdownItem key={'2'}>Del på facebook</NewDropdownItem>
                    <NewDropdownItem key={'3'}>Del på facebook</NewDropdownItem>
                </NewDropdown>
            </div>
        </>
    )

    .add('Dropleft', () =>
        <>
            <div className="col-2 m-3">
                <NewDropdown
                    title="Dropdown button"
                    direction="dropleft"
                >
                    <NewDropdownItem key={'1'}>Del på facebook</NewDropdownItem>
                    <NewDropdownItem key={'2'}>Del på facebook</NewDropdownItem>
                    <NewDropdownItem key={'3'}>Del på facebook</NewDropdownItem>
                </NewDropdown>
            </div>
        </>
    )









