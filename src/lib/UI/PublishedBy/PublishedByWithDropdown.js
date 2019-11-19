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
                    <NewDropdownItem key={'1'}>Del på Facebook</NewDropdownItem>
                    <NewDropdownItem key={'2'}>Del på Messanger</NewDropdownItem>
                    <NewDropdownItem key={'3'}>Del på Twitter</NewDropdownItem>
                    <NewDropdownItem key={'4'}>Del på mail</NewDropdownItem>
                    <NewDropdownItem key={'5'}>Kopier lenke</NewDropdownItem>
                    <br/>
                    <NewDropdownItem key={'6'}>Meld av interesse</NewDropdownItem>
                    <NewDropdownItem key={'7'}>Rapportér <small className="d-block text-gray-600">Dette bryter med Tipio’s rettningslinjer</small></NewDropdownItem>
                    <NewDropdownItem key={'7'}>Del på mail <small className="d-block text-gray-600">Se færre slike Tipioer</small></NewDropdownItem>
                </NewDropdown>
            </div>

        </PublishedByBase>
    );
};

export default PublishedByWithDropDown;
