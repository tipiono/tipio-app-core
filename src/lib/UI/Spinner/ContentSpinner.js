import React from 'react';

function ContentSpinner() {
    return (<>
        <div className="text-center pt-3 pt-3">
            <span>
                <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                />
            </span>
        </div>
    </>);
}

export default ContentSpinner;