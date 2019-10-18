import React from 'react';
import cx from 'classnames';

const ErrorMessage = ({title, content, color, paddingY, paddingX, textAlign}) => {
    return (
        <div className={cx("errorMessage mb-4", color, paddingY, paddingX, textAlign)}>
            <span className="errorMessage--title">{title} </span>
            <span className="errorMessage--content">{content}</span>
        </div>
    );
};

export default ErrorMessage;
