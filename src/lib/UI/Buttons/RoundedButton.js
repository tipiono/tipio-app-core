import React from "react";
import PropTypes from 'prop-types';

const RoundedButton = ({ loading, text, onClick, ...props }) => (
    <button
        type="button"
        disabled={loading}
        className="btn btn-outline-primary btn-block btn-lg rounded-pill"
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

RoundedButton.defaultProps = {
    loading: false
};

RoundedButton.propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string.isRequired,
};

export default RoundedButton;
