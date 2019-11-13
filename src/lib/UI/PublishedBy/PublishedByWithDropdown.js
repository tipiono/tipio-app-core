import React from 'react';

import PublishedByBase from './PublishedByBase';
import ThreeDotsIcon from "../Icons/ThreeDotsIcon";
import {NewDropdown, NewDropdownItem} from '../NewDropdown/NewDropdown';


const PublishedByWithDropDown = (props) => {
    return (
        <PublishedByBase {...props} >

            <div className="publishedBy__dropdown">
                <NewDropdown
                    title={<ThreeDotsIcon/>}
                    aligned="dropdown-menu-right"
                >
                    <NewDropdownItem key={'1'}>Del på facebook</NewDropdownItem>
                    <NewDropdownItem key={'2'}>Del på facebook</NewDropdownItem>
                    <NewDropdownItem key={'3'}>Del på facebook</NewDropdownItem>
                </NewDropdown>
            </div>

        </PublishedByBase>
    );
};

export default PublishedByWithDropDown;
