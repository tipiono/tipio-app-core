import React from "react";
import PropTypes from 'prop-types';

const GrayOutlineButton = ({ loading, text, onClick, ...props }) => (
    <button
        id="tipio-join-button"
        type="button"
        disabled={loading}
        className="btn btn-outline-gray-600 btn-block btn-lg"
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

GrayOutlineButton.defaultProps = {
    loading: false
};

GrayOutlineButton.propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string.isRequired,
};

export default GrayOutlineButton;
