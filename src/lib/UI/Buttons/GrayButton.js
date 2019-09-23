import React from "react";
import PropTypes from 'prop-types';

const GrayButton = ({ loading, text, onClick }) => (
    <button
        id="tipio-join-button"
        type="button"
        disabled={loading}
        className="btn btn-gray-600 btn-block btn-lg"
        onClick={onClick}
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

GrayButton.defaultProps = {
    loading: false
};

GrayButton.propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string.isRequired,
    children: PropTypes.instanceOf(Array).isRequired
};

export default GrayButton;
