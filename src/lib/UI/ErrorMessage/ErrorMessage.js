import React from 'react';
import cx from 'classnames';

const ErrorMessage = ({title, content, color}) => {
    return (
        <div className={cx("errorMessage", color)}>
            <span className="errorMessage--title">{title} - </span>
            <span className="errorMessage--content">{content}</span>
        </div>
    );
};

export default ErrorMessage;
