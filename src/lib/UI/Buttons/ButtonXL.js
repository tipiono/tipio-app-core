import React from 'react';
import PropTypes from 'prop-types';

const ButtonXl = ({ loading, text, onClick, ...props }) => (
    <button
        id="tipio-join-button"
        type="button"
        disabled={loading}
        className="custom-btn-xl"
        onClick={onClick}
        {...props}
    >
        {!loading && text}
        {loading && (
            <span>
                {' '}
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> Loading...
            </span>
        )}
    </button>
);

ButtonXl.defaultProps = {
    loading: false
};

ButtonXl.propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string.isRequired
};

export default ButtonXl;
