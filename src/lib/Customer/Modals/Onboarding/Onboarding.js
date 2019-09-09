import React, { useRef } from 'react';
import ReactSwipe from "react-swipe";

const Onboarding = () => {
    const swipeRef = useRef(null);
    return (
        <div>
            <ReactSwipe
                className="carousel"
                swipeOptions={{continuous: false}}
                ref={swipeRef}
            >
                <div className="no-border">
                    <div className="wrapper">
                        <div className="content">
                            <img alt=""/>
                            <p>Alt du ønsker deg til en bedre pris. Lim inn linken til produktet du vil ha og se hva som
                                skjer!</p>
                                <button type="button" className="btn btn-secondary btn-lg" onClick={() => swipeRef.current.next()}>Ok, neste tips</button>
                            <div className="three-dots">
                                <span className="active">.</span>
                                <span>.</span>
                                <span>.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="no-border">
                    <div className="wrapper">
                        <div className="content">
                            <img alt=""/>
                            <p>Alt du ønsker deg til en bedre pris. Lim inn linken til produktet du vil ha og se hva som
                                skjer!</p>
                            <button type="button" className="btn btn-secondary btn-lg" onClick={() => swipeRef.current.next()}>Ok, neste tips</button>
                            <div className="three-dots">
                                <span >.</span>
                                <span className="active">.</span>
                                <span>.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="no-border">
                    <div className="wrapper">
                        <div className="content">
                            <img alt=""/>
                            <p>Alt du ønsker deg til en bedre pris. Lim inn linken til produktet du vil ha og se hva som
                                skjer!</p>
                            <button type="button" className="btn btn-secondary btn-lg">Ok, skjønner</button>
                            <div className="three-dots">
                                <span>.</span>
                                <span>.</span>
                                <span className="active">.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactSwipe>
        </div>
    );
};

export default Onboarding;
