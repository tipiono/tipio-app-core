import React from "react";
import PropTypes from 'prop-types';
import "./Button.scss";

const Button = ({ loading, text, onClick }) => (
    <button
        id="tipio-join-button"
        type="button"
        disabled={loading}
        className="btn btn-secondary btn-block btn-lg"
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

Button.defaultProps = {
    loading: false
};

Button.propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string.isRequired,
    children: PropTypes.instanceOf(Array).isRequired
};

export default Button;