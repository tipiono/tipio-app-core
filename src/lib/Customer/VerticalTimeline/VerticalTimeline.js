import React from 'react';
import PropTypes from 'prop-types';

const VerticalTimeline = ({
                              isLoading,
                              tipio,
                              stepStatus,
                              onClose
                          }) => {
    console.log('hej stepStatus', stepStatus)
    return (
        <div className="container">
            {isLoading && <p>Loading...</p>}
            {!isLoading && <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="tipio-status">
                        <div className="tipio-status-header">
                            <a className="tipio-status-header-image" href="/">
                                <img
                                    src={tipio.mainImageUrl}
                                    alt=""/>
                            </a>
                            <div>
                                <h5 className="tipio-status-header-title"><a href="/">{tipio.title}</a></h5>
                                <p className="tipio-status-header-subtitle">{tipio.subheading}</p>
                            </div>
                        </div>
                        <div className="tipio-status-body">
                            <ul className="vertical-timeline">
                                <li className="vertical-timeline-item completed step-1">
                                    <span className="timeline-item-title">Kjøpt</span>
                                </li>
                                <li className={"vertical-timeline-item step-2 " + stepStatus[2]}>
                                    {!(stepStatus[2] === 'completed') && <>
                                        <div className="timeline-tooltip">
                                            <div className="timeline-tooltip-inner">
                                                <span className="left-text">{tipio.meta.joinedCount} har kjøpt!</span>
                                                <div className="tooltip-divider"/>
                                                {tipio.expires_in}
                                            </div>
                                        </div>
                                        <div className="timeline-item-content">
                                            <h6 className="content-title">Påmelding pågår</h6>
                                            <p className="content-description">Jo flere som er med jo bedre pris.  </p>
                                            <button className="btn btn-secondary btn-sm">Husk å del Tipioen!</button>
                                        </div></>}
                                    {(stepStatus[2] === 'completed') && <span className="timeline-item-title">{tipio.meta.joinedCount} kjøpte!</span>}
                                </li>
                                <li className={"vertical-timeline-item step-3 " + (stepStatus[3] !== 'failed' ? stepStatus[3] : 'ongoing')}>
                                    {(stepStatus[3] === 'coming' || stepStatus[3] === 'completed') && <span className="timeline-item-title">Budgiving</span>}
                                    {stepStatus[3] === 'ongoing' && <>
                                        <div className="timeline-tooltip">
                                            <div className="timeline-tooltip-inner">
                                                {tipio.meta.bidCount === 0 && <span className="left-text">Venter på bud</span>}
                                                {tipio.meta.bidCount > 0 && <span className="left-text">{tipio.meta.bidCount} bud mottat</span>}
                                                <div className="tooltip-divider"/>
                                                {tipio.meta.bidExpiresIn}
                                            </div>
                                        </div>
                                        <div className="timeline-item-content">
                                            <h6 className="content-title">Budgiving pågår</h6>
                                            <p className="content-description">Vi sender deg en mail så fort vi har mottat et
                                                bud fra en leverandør.</p>
                                        </div>
                                    </>}
                                    {stepStatus[3] === 'failed' && <>
                                        <div className="timeline-tooltip ">
                                            <div className="timeline-tooltip-inner bg-dark">
                                                <span className="left-text">Fikk ingen bud</span>
                                                <div className="tooltip-divider"/>
                                                <span className="right-text"><img className="mr-1"  alt=""/>Avsluttet</span>
                                            </div>
                                        </div>
                                        <div className="timeline-item-content">
                                            <h6 className="content-title">Budrunden er avsluttet</h6>
                                            <p className="content-description">Det kom dessverre ingen bud fra leverandørene. </p>
                                        </div>
                                    </>}
                                </li>
                                {stepStatus[3] !== 'failed' &&
                                <>
                                    <li className={"vertical-timeline-item step-4 " + stepStatus[4]}>
                                        {(stepStatus[4] === 'coming' || stepStatus[4] === 'completed') && <span className="timeline-item-title">Bekreftelse på kjøp</span>}
                                        {stepStatus[4] === 'ongoing' &&
                                        <>
                                            <div className="timeline-tooltip">
                                                <div className="timeline-tooltip-inner">
                                                    <span className="left-text">{tipio.meta.tipioOfferPrice} Kr</span>
                                                </div>
                                            </div>

                                            <div className="timeline-item-content">
                                                <h6 className="content-title">Gratulerer!</h6>
                                                <p className="content-description">Endelig pris ble {tipio.meta.tipio_offer_price} kr.</p>
                                            </div>
                                        </>
                                        }
                                    </li>
                                    <li className={"vertical-timeline-item step-5 " + stepStatus[5]}>
                                        {(stepStatus[5] === 'coming' || stepStatus[5] === 'completed') && <span className="timeline-item-title">Levering</span>}
                                        {stepStatus[5 ] === 'ongoing' &&
                                        <>
                                            <div className="timeline-tooltip">
                                                <div className="timeline-tooltip-inner">
                                                    <span className="left-text">Levering</span>
                                                    <div className="tooltip-divider"/>
                                                    <span className="left-text">{tipio.meta.tipioOfferCompanyName}</span>
                                                </div>
                                            </div>

                                            <div className="timeline-item-content">
                                                <h6 className="content-title">Levering</h6>
                                                <p className="content-description">Bohus leverer varen til deg! Ta kontakt med leverandør for spørsmål.</p>
                                            </div>
                                        </>
                                        }
                                    </li>
                                </>
                                }
                            </ul>
                        </div>
                        <div className="tipio-status-footer">
                            <button type="button" className="btn btn-outline-secondary btn-lg btn-block" onClick={onClose}>Gå til produkt</button>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

VerticalTimeline.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    tipio: PropTypes.arrayOf(PropTypes.shape({
        mainImageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subheading: PropTypes.string.isRequired,
    })).isRequired,
    meta: {
      joinedCount: PropTypes.number.isRequired,
      bidCount: PropTypes.number.isRequired,
      bidExpiresIn: PropTypes.object.isRequired,
      tipioOfferPrice: PropTypes.number.isRequired,
      tipioOfferCompanyName:  PropTypes.string.isRequired,
    },
    stepStatus: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
}

export default VerticalTimeline;
