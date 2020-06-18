import React from 'react';
import cx from 'classnames';

function ContentSpinner({ pt = true }) {
    return (
        <>
            <div className={cx('text-center', { 'pt-6': pt })}>
                <span className="spinner-border text-primary" role="status" aria-hidden="true" />
            </div>
        </>
    );
}

export default ContentSpinner;
