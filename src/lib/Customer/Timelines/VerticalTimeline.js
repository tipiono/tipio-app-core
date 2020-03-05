import React from 'react';
import PropTypes from 'prop-types';
import generatePrice from '../../Util/generatePrice';
import Countdown, { calcTimeDelta, formatTimeDelta } from 'react-countdown-now';
import SecondaryOutlineButton from '../../UI/Buttons/SecondaryOutlineButton';

const renderer = ({ hours, minutes, seconds, completed }) => {
    return (
        <span className="pinky-countdown-sm-time">
            {hours}:{minutes}:{seconds}
        </span>
    );
};
const VerticalTimeline = ({ isLoading, tipio, stepStatus, onClose, firstRange, secondRange }) => {
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
                                                        Jo flere som er med jo bedre pris.
                                                    </p>
                                                    <button className="btn btn-secondary btn-sm">
                                                        Husk å del Tipioen!
                                                    </button>
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
                                                        {tipio.meta.binding_count} andre kjøpte med deg! Prisen gikk
                                                        ytterligere ned til{' '}
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
