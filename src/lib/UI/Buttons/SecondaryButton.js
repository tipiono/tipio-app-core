import React from "react";
import PropTypes from 'prop-types';

const SecondaryButton = ({ loading, text, onClick, ...props }) => (
    <button
        id="tipio-join-button"
        type="button"
        disabled={loading}
        className="btn btn-secondary btn-block btn-lg"
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

SecondaryButton.defaultProps = {
    loading: false
};

SecondaryButton.propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string.isRequired,
    children: PropTypes.instanceOf(Array).isRequired
};

export default SecondaryButton;
