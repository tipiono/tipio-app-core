import React from "react";
function OnboardingTooltip({
                             continuous,
                             index,
                             step,
                             backProps,
                             closeProps,
                             primaryProps,
                             tooltipProps
                         }) {
    return (
        <div {...tooltipProps}>
            {step.title && <h1>{step.title}</h1>}
            <div>{step.content}</div>
            <div>
                {index > 0 && (
                    <button {...backProps}>
                        <span id="back">Back</span>
                    </button>
                )}
                {continuous && (
                    <button {...primaryProps}>
                        <span id="next"> Next </span>
                    </button>
                )}
                {!continuous && (
                    <button {...closeProps}>
                        <span id="close"> Close </span>
                    </button>
                )}
            </div>
        </div>
    )
}

export default OnboardingTooltip;
