import React from 'react';

function ContentSpinner() {
    return (<>
        <div className="text-center pt-6 vh-100">
                <span
                    className="spinner-border text-primary"
                    role="status"
                    aria-hidden="true"
                />
        </div>
    </>);
}

export default ContentSpinner;
