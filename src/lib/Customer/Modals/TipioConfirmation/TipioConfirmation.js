import React, { useEffect } from 'react';
import { Modal } from '../../../UI/Modal/Modal';
import { isMobile } from 'react-device-detect';
import TipioCountdown from '../../../UI/TipioCountdown/TipioCountdown';
import { loadFbSDK, shareOnMessengerWeb, messengerShareUrlMobile } from '../../../Util/fbShare';

import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';

function TipioConfirmation({ image, expiresIn, share, title, description, ...props }) {
    useEffect(() => {
        loadFbSDK();
    }, []);

    return (
        <>
            <Modal showCloseButton {...props}>
                <div className="tipio__confirmation">
                    <a className="tipio__confirmation--image" href="">
                        <img className="img-fluid" src={image} width="310px" alt="Tipio with offer" />

                        <div className="timeleft__countdown">
                            <TipioCountdown className="timer" expires_in={expiresIn} />
                        </div>
                    </a>

                    <h3 className="tipio__confirmation--title">{title}</h3>
                    <p className="tipio__confirmation--description">{description}</p>
                    <ul className="tipio__confirmation__share">
                        <FacebookShareButton
                            url={share.link}
                            quote={'Kjenner jeg noen andre som kunne tenke seg denne?'}
                            className="Demo__some-network__share-button"
                        >
                            <li className="tipio__confirmation__share--item">
                                <a href="">
                                    <svg width={31} height={31}>
                                        <g fill="none" fillRule="evenodd">
                                            <path
                                                className="svgBg"
                                                d="M30.086 15.957C30.086 24.266 23.351 31 15.043 31 6.734 31 0 24.266 0 15.957 0 7.647 6.734.914 15.043.914c8.308 0 15.043 6.734 15.043 15.043"
                                                fill="#8C8F91"
                                            />
                                            <path
                                                d="M16.274 24.14v-7.437h2.451l.46-2.928h-2.911V11.57s.081-1.062 1.223-1.062h1.784V7.901s-1.403-.194-2.935-.107c-1.694.097-3.001 1.726-3.033 3.334v2.646h-2.509v2.928h2.487v7.437h2.983z"
                                                fill="#FEFEFE"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={share.link}
                            title={share.title}
                            className="Demo__some-network__share-button"
                        >
                            <li className="tipio__confirmation__share--item">
                                <a href="">
                                    <svg width={31} height={31}>
                                        <g fill="none" fillRule="evenodd">
                                            <path
                                                className="svgBg"
                                                d="M30.47 15.957C30.47 24.266 23.733 31 15.425 31 7.117 31 .382 24.266.382 15.957.382 7.647 7.117.914 15.426.914c8.308 0 15.043 6.734 15.043 15.043"
                                                fill="#8C8F91"
                                            />
                                            <path
                                                d="M6.837 21.397s2.744.437 5.184-1.48c0 0-1.673 0-2.71-1.39-.581-.823-.56-1.086-.56-1.086s.649.186 1.563-.049c-.249-.055-2.633-.519-2.821-3.504.493.189.575.353 1.573.436-.62-.479-2.383-2.164-1.077-4.702 0 0 2.463 3.368 7.255 3.667 0-.489-.489-2.675 1.982-4.005 1.005-.516 2.743-.543 4.046.773.258-.054.95-.04 2.227-.828-.15.53-.353 1.141-1.467 1.915.706-.082 1.046-.123 1.982-.517-.583.72-.502.802-1.738 1.806 0 .761.075 5.429-3.894 8.45-3.968 3.021-8.743 2.344-11.545.514"
                                                fill="#FEFEFE"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </TwitterShareButton>
                        <li className="tipio__confirmation__share--item">
                            <a
                                href={messengerShareUrlMobile(share.link)}
                                onClick={(e) => {
                                    if (!isMobile) {
                                        e.preventDefault();
                                        shareOnMessengerWeb(share.link);
                                    }
                                }}
                            >
                                <svg width={31} height={31}>
                                    <g fill="none" fillRule="evenodd">
                                        <path
                                            className="svgBg"
                                            d="M30.852 15.957C30.852 24.266 24.117 31 15.81 31 7.5 31 .765 24.266.765 15.957.765 7.647 7.5.914 15.81.914c8.308 0 15.043 6.734 15.043 15.043"
                                            fill="#8C8F91"
                                        />
                                        <path
                                            fill="#FEFEFE"
                                            d="M17.277 20.192l-3.69-3.953-7.227 3.953 7.943-8.47 3.802 3.99 7.152-3.99z"
                                        />
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <EmailShareButton
                            url={share.link}
                            subject={share.title}
                            body={share.title}
                            className="Demo__some-network__share-button"
                        >
                            <li className="tipio__confirmation__share--item">
                                <a href="tipio__confirmation__share--item--link">
                                    <svg width="31px" height="31px" viewBox="0 0 31 31">
                                        <g
                                            id="Desktop---Customer"
                                            stroke="none"
                                            strokeWidth="1"
                                            fill="none"
                                            fillRule="evenodd"
                                        >
                                            <g id="Group-35" transform="translate(0.938500, 0.913600)">
                                                <path
                                                    className="svgBg"
                                                    d="M30.086,15.043 C30.086,23.352 23.351,30.086 15.043,30.086 C6.734,30.086 1.20792265e-13,23.352 1.20792265e-13,15.043 C1.20792265e-13,6.734 6.734,-1.0658141e-13 15.043,-1.0658141e-13 C23.351,-1.0658141e-13 30.086,6.734 30.086,15.043"
                                                    id="Fill-7"
                                                    fill="#8C8F91"
                                                />
                                                <g
                                                    id="Group-33"
                                                    transform="translate(7.146000, 9.976600)"
                                                    fill="#FEFEFE"
                                                >
                                                    <polygon
                                                        id="Fill-16"
                                                        points="15.794 4.17443857e-14 7.91 5.833 -7.01660952e-14 4.17443857e-14"
                                                    />
                                                    <polygon
                                                        id="Fill-18"
                                                        points="15.794 0.9365 15.794 10.1325 -7.01660952e-14 10.1325 -7.01660952e-14 0.9365 7.91 6.8115"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </EmailShareButton>
                    </ul>
                </div>
            </Modal>
        </>
    );
}

export default TipioConfirmation;
