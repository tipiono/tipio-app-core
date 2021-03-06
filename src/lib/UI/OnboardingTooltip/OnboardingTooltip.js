import React from "react";
import cx from 'classnames';

function OnboardingTooltip({
                               continuous,
                               index,
                               isLastStep,
                               step,
                               backProps,
                               closeProps,
                               primaryProps,
                               skipProps,
                               tooltipProps
                           }) {
    return (
        <div {...tooltipProps} className={cx('onboarding__tooltip', step.placement)}>
            {step.title && <h6 className="onboarding__tooltip--title">{step.title}</h6>}
            <p className="onboarding__tooltip--content">{step.content}</p>

            {!continuous && (
                <a id="close" className="onboarding__tooltip--close" href="#" {...closeProps}>
                    <svg className="onboarding__tooltip__close--icon" xmlns="http://www.w3.org/2000/svg" width="16"
                         height="16" viewBox="0 0 24 24">
                        <g className="nc-icon-wrapper" strokeLinecap="round" strokeLinejoin="round"
                           strokeWidth="2" fill="#505659" stroke="#505659">
                            <line fill="none" stroke="#505659" strokeMiterlimit="10" x1="19" y1="5" x2="5" y2="19"/>
                            <line fill="none" stroke="#505659" strokeMiterlimit="10" x1="19" y1="19" x2="5" y2="5"/>
                        </g>
                    </svg>
                </a>
            )}

            {/* <div>
            {!isLastStep && (
                <button {...skipProps} spacer={true}>
                    Skip
                </button>
                )}
                {index > 0 && (
                <button {...backProps}>
                    Back
                </button>
                )}
                <button {...primaryProps}>
                    {continuous ? 'next' : 'close'}
                </button>
            </div> */}

        </div>
    )
}

export default OnboardingTooltip;
