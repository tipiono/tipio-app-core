import React, { useEffect } from 'react';

import PublishedByBase from './PublishedByBase';
import ThreeDotsIcon from '../Icons/ThreeDotsIcon';
import { NewDropdown, NewDropdownItem } from '../NewDropdown/NewDropdown';
import { isMobile } from 'react-device-detect';
import { loadFbSDK, shareOnMessengerWeb, messengerShareUrlMobile } from '../../Util/fbShare';

import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';

const PublishedByWithDropDown = (props) => {
    const { share, reportOnClick, showEdit } = props;

    useEffect(() => {
        loadFbSDK();
    }, []);

    return (
        <PublishedByBase {...props}>
            <div className="publishedBy__dropdown">
                <NewDropdown
                    title={<ThreeDotsIcon />}
                    aligned="publishedBy__dropdown--right"
                    showCloseIcon={true}
                    hideOnClick
                >
                    <NewDropdownItem key={'1'}>
                        <FacebookShareButton
                            url={share.link}
                            quote={share.title}
                            className="Demo__some-network__share-button"
                        >
                            Del på facebook
                        </FacebookShareButton>
                    </NewDropdownItem>
                    <NewDropdownItem
                        key={'2'}
                        href={messengerShareUrlMobile(share.url)}
                        onClick={() => {
                            if (!isMobile) {
                                shareOnMessengerWeb(share.url);
                            }
                        }}
                    >
                        Del på Messanger
                    </NewDropdownItem>
                    <NewDropdownItem key={'3'}>
                        <TwitterShareButton
                            url={share.link}
                            title={share.title}
                            className="Demo__some-network__share-button"
                        >
                            Del på Twitter
                        </TwitterShareButton>
                    </NewDropdownItem>
                    <NewDropdownItem key={'4'}>
                        <EmailShareButton url={share.link} subject={share.title} body={share.title}>
                            Del på mail
                        </EmailShareButton>
                    </NewDropdownItem>
                    <NewDropdownItem
                        key={'5'}
                        onClick={() => {
                            navigator.clipboard.writeText(share.link);
                        }}
                    >
                        Kopier lenke
                    </NewDropdownItem>
                    {/* {showEdit && (
                        <NewDropdownItem key={'6'} onClick={() => {}}>
                            Rediger
                        </NewDropdownItem>
                    )} */}
                    {/*<br />*/}
                    {/* <NewDropdownItem key={'7'} >Rapportér <small className="d-block text-gray-600">Dette bryter med Tipio’s rettningslinjer</small></NewDropdownItem> */}
                </NewDropdown>
            </div>
        </PublishedByBase>
    );
};

export default PublishedByWithDropDown;
