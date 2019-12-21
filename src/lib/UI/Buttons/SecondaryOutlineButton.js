import React from "react";
import PropTypes from 'prop-types';
import cx from 'classnames';

const SecondaryOutlineButton = ({ loading, text, onClick, textColor, ...props }) => (
    <button
        type="button"
        disabled={loading}
        className={cx('btn btn-outline-secondary btn-block btn-lg', textColor)}
        onClick={onClick}
        {...props}
    >
        {!loading && text}
        {loading && (
            <span>
                                {' '}
                <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                />
                {' '}
                Loading...</span>
        )}
    </button>
);

SecondaryOutlineButton.defaultProps = {
    loading: false
};

SecondaryOutlineButton.propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string.isRequired,
    children: PropTypes.instanceOf(Array).isRequired
};

export default SecondaryOutlineButton;
