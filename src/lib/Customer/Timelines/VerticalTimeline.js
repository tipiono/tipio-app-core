import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import generatePrice from '../../Util/generatePrice';
import Countdown, { calcTimeDelta, formatTimeDelta } from 'react-countdown-now';
import SecondaryOutlineButton from '../../UI/Buttons/SecondaryOutlineButton';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import { loadFbSDK, shareOnMessengerWeb, messengerShareUrlMobile } from '../../Util/fbShare';
import { isMobile } from 'react-device-detect';
const renderer = ({ hours, minutes, seconds, completed }) => {
    return (
        <span className="pinky-countdown-sm-time">
            {hours}:{minutes}:{seconds}
        </span>
    );
};
const VerticalTimeline = ({ isLoading, tipio, stepStatus, onClose, firstRange, secondRange, share }) => {
    useEffect(() => {
        loadFbSDK();
    }, []);

    return (
        <div className="container">
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="tipio-status">
                            <div className="tipio-status-header">
                                <a className="tipio-status-header-image" href="/">
                                    <img src={tipio.images && tipio.images[0].blob_url} alt="" />
                                </a>
                                <div>
                                    <h5 className="tipio-status-header-title">
                                        <a href="/">{tipio.title}</a>
                                    </h5>
                                </div>
                            </div>
                            <div className="tipio-status-body">
                                <ul className="vertical-timeline">
                                    <li className="vertical-timeline-item completed step-1">
                                        <span className="timeline-item-title">Kjøpt</span>
                                    </li>
                                    <li className={'vertical-timeline-item step-2 ' + stepStatus[2]}>
                                        {!(stepStatus[2] === 'completed') && (
                                            <>
                                                <div className="timeline-tooltip">
                                                    <div className="timeline-tooltip-inner">
                                                        <span className="left-text">
                                                            {tipio.meta.binding_count} har kjøpt!
                                                        </span>
                                                        <div className="tooltip-divider" />
                                                        {/* {tipio.meta.binding_expires_in} */}
                                                        <svg className="white-countdown-sm-icon" width={11} height={12}>
                                                            <path
                                                                fill="#FFF"
                                                                d="M2.389 10.076C.15 8.459-.535 5.386.799 2.945a.155.155 0 01-.04-.046L.443 2.5A1.458 1.458 0 01.69.44a1.487 1.487 0 012.077.265l.107.138a5.29 5.29 0 015.25 0l.107-.138A1.487 1.487 0 0110.31.439a1.459 1.459 0 01.255 2.062l-.318.398a.155.155 0 01-.04.046c1.333 2.443.646 5.516-1.595 7.13l1.064 1.083c.11.112.11.292 0 .404a.276.276 0 01-.396 0L8.148 10.41a5.302 5.302 0 01-5.216 0L1.8 11.562a.276.276 0 01-.396 0 .289.289 0 010-.404l.985-1.082zm7.495-7.644l.232-.294a.887.887 0 00-.153-1.25.933.933 0 00-1.29.156l-.062.092c.494.355.925.793 1.273 1.296zm-8.768 0a5.327 5.327 0 011.273-1.296l-.063-.086a.933.933 0 00-1.29-.156.887.887 0 00-.153 1.25l.233.288zM5.5 10.496c2.656 0 4.809-2.192 4.809-4.896C10.309 2.896 8.156.704 5.5.704S.691 2.896.691 5.6c.004 2.703 2.155 4.893 4.809 4.896zM4.007 4.16l1.516 1.601L8.13 3.094a.276.276 0 01.396 0 .29.29 0 010 .404l-2.829 2.88a.28.28 0 01-.407 0L3.594 4.54a.29.29 0 010-.409.274.274 0 01.413.029z"
                                                            />
                                                        </svg>{' '}
                                                        <Countdown
                                                            date={tipio.meta.binding_expires_in}
                                                            renderer={({ completed }) => {
                                                                const result = formatTimeDelta(
                                                                    calcTimeDelta(tipio.meta.binding_expires_in),
                                                                    {
                                                                        daysInHours: true
                                                                    }
                                                                );
                                                                return renderer({ ...result, completed });
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="timeline-item-content">
                                                    <h6 className="content-title">Påmelding pågår</h6>
                                                    <p className="content-description">
                                                        Flere med? bedre pris.
                                                        <br />
                                                        Del Tipioen!
                                                    </p>
                                                    <ul className="tipio__share">
                                                        <FacebookShareButton
                                                            url={share.link}
                                                            quote={share.title}
                                                            className="Demo__some-network__share-button"
                                                        >
                                                            <li className="tipio__share--item">
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
                                                            <li className="tipio__share--item">
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
                                                        <li className="tipio__share--item">
                                                            <a
                                                                href={messengerShareUrlMobile(share.url)}
                                                                onClick={(e) => {
                                                                    if (!isMobile) {
                                                                        e.preventDefault();
                                                                        shareOnMessengerWeb(share.url);
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
                                                            <li className="tipio__share--item">
                                                                <a href="tipio__share--item--link">
                                                                    <svg width="31px" height="31px" viewBox="0 0 31 31">
                                                                        <g
                                                                            id="Desktop---Customer"
                                                                            stroke="none"
                                                                            strokeWidth="1"
                                                                            fill="none"
                                                                            fillRule="evenodd"
                                                                        >
                                                                            <g
                                                                                id="Group-35"
                                                                                transform="translate(0.938500, 0.913600)"
                                                                            >
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
                                            </>
                                        )}
                                        {stepStatus[2] === 'completed' && (
                                            <>
                                                <div className="timeline-tooltip">
                                                    <div className="timeline-tooltip-inner">
                                                        <span className="left-text">
                                                            {tipio.meta.binding_count} har kjøpt!
                                                        </span>
                                                        <div className="tooltip-divider" />
                                                        {generatePrice(
                                                            tipio.meta.binding_count,
                                                            firstRange,
                                                            secondRange
                                                        )}{' '}
                                                        Kr
                                                    </div>
                                                </div>
                                                <div className="timeline-item-content">
                                                    <p className="content-description">
                                                        {tipio.meta.binding_count} andre kjøpte sammen med deg! <br />
                                                        Dermed ble prisen kun på{' '}
                                                        {generatePrice(
                                                            tipio.meta.binding_count,
                                                            firstRange,
                                                            secondRange
                                                        )}{' '}
                                                        Kr
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                    </li>
                                    <li className={'vertical-timeline-item step-3 ' + stepStatus[3]}>
                                        {(stepStatus[3] === 'coming' || stepStatus[3] === 'ongoing') && (
                                            <span className="timeline-item-title">Levering</span>
                                        )}
                                        {(stepStatus[3] === 'completed' || stepStatus[3] === 'failed') && (
                                            <div className="timeline-item-content">
                                                <h6 className="content-title">Levering</h6>
                                                <p className="content-description">
                                                    {tipio && tipio.meta && tipio.meta.tipo_offer_company_name} leverer
                                                    varen til deg! Ta kontakt med leverandør for spørsmål.
                                                </p>
                                            </div>
                                        )}
                                    </li>
                                    {/* <li
                    className={
                      "vertical-timeline-item step-3 " +
                      (stepStatus[3] !== "failed" ? stepStatus[3] : "ongoing")
                    }
                  >
                    {(stepStatus[3] === "coming" ||
                      stepStatus[3] === "completed") && (
                      <span className="timeline-item-title">Budgiving</span>
                    )}
                    {stepStatus[3] === "ongoing" && (
                      <>
                        <div className="timeline-tooltip">
                          <div className="timeline-tooltip-inner">
                            {tipio.meta.bidCount === 0 && (
                              <span className="left-text">Venter på bud</span>
                            )}
                            {tipio.meta.bidCount > 0 && (
                              <span className="left-text">
                                {tipio.meta.bidCount} bud mottat
                              </span>
                            )}
                            <div className="tooltip-divider" />
                            {tipio.meta.binding_expires_in}
                          </div>
                        </div>
                        <div className="timeline-item-content">
                          <h6 className="content-title">Budgiving pågår</h6>
                          <p className="content-description">
                            Vi sender deg en mail så fort vi har mottat et bud
                            fra en leverandør.
                          </p>
                        </div>
                      </>
                    )}
                    {stepStatus[3] === "failed" && (
                      <>
                        <div className="timeline-tooltip ">
                          <div className="timeline-tooltip-inner bg-dark">
                            <span className="left-text">Fikk ingen bud</span>
                            <div className="tooltip-divider" />
                            <span className="right-text">
                              <img className="mr-1" alt="" />
                              Avsluttet
                            </span>
                          </div>
                        </div>
                        <div className="timeline-item-content">
                          <h6 className="content-title">
                            Budrunden er avsluttet
                          </h6>
                          <p className="content-description">
                            Det kom dessverre ingen bud fra leverandørene.{" "}
                          </p>
                        </div>
                      </>
                    )}
                  </li>
                  {stepStatus[3] !== "failed" && (
                    <>
                      <li
                        className={
                          "vertical-timeline-item step-4 " + stepStatus[4]
                        }
                      >
                        {(stepStatus[4] === "coming" ||
                          stepStatus[4] === "completed") && (
                          <span className="timeline-item-title">
                            Bekreftelse på kjøp
                          </span>
                        )}
                        {stepStatus[4] === "ongoing" && (
                          <>
                            <div className="timeline-tooltip">
                              <div className="timeline-tooltip-inner">
                                <span className="left-text">
                                  {tipio.meta.tipio_offer_price} Kr
                                </span>
                              </div>
                            </div>

                            <div className="timeline-item-content">
                              <h6 className="content-title">Gratulerer!</h6>
                              <p className="content-description">
                                Endelig pris ble {tipio.meta.tipio_offer_price}{" "}
                                kr.
                              </p>
                            </div>
                          </>
                        )}
                      </li>
                      <li
                        className={
                          "vertical-timeline-item step-5 " + stepStatus[5]
                        }
                      >
                        {(stepStatus[5] === "coming" ||
                          stepStatus[5] === "completed") && (
                          <span className="timeline-item-title">Levering</span>
                        )}
                        {stepStatus[5] === "ongoing" && (
                          <>
                            <div className="timeline-tooltip">
                              <div className="timeline-tooltip-inner">
                                <span className="left-text">Levering</span>
                                <div className="tooltip-divider" />
                                <span className="left-text">
                                  {tipio.meta.tipo_offer_company_name}
                                </span>
                              </div>
                            </div>

                            <div className="timeline-item-content">
                              <h6 className="content-title">Levering</h6>
                              <p className="content-description">
                                Bohus leverer varen til deg! Ta kontakt med
                                leverandør for spørsmål.
                              </p>
                            </div>
                          </>
                        )}
                      </li>
                    </>
                  )} */}
                                </ul>
                            </div>
                            <div className="tipio-status-footer">
                                {/*<button type="button" className="btn btn-outline-secondary btn-lg btn-block" onClick={onClose}></button>*/}

                                <SecondaryOutlineButton text="Gå til produkt" onClick={onClose} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

VerticalTimeline.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    tipio: PropTypes.arrayOf(
        PropTypes.shape({
            mainImageUrl: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            subheading: PropTypes.string.isRequired
        })
    ).isRequired,
    stepStatus: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
    // meta: {
    //   joinedCount: PropTypes.number.isRequired,
    //   bidCount: PropTypes.number.isRequired,
    //   bidExpiresIn: PropTypes.object.isRequired,
    //   tipioOfferPrice: PropTypes.number.isRequired,
    //   tipioOfferCompanyName:  PropTypes.string.isRequired,
    // }
    // ,
};

export default VerticalTimeline;
