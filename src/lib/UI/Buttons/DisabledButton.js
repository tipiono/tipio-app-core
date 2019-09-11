import React from "react";
import PropTypes from 'prop-types';

const DisabledButton = ({ loading, text, onClick }) => (
    <button
        id="tipio-join-button"
        type="button"
        className="btn btn-secondary btn-lg btn-block"
        onClick={onClick}
        disabled
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

DisabledButton.defaultProps = {
    loading: false
};

DisabledButton.propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string.isRequired,
    children: PropTypes.instanceOf(Array).isRequired
};

export default DisabledButton;
