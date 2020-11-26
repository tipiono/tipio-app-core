import React from 'react';
import cx from 'classnames';

const ErrorMessage = ({ title, content, color, paddingY, paddingX, textAlign, link, onLinkClick }) => {
    return (
        <div className={cx('errorMessage', color, paddingY, paddingX, textAlign)}>
            <span className="errorMessage--title">{title} </span>
            <span className="errorMessage--content">{content}</span>
            {link && (
                <a href="/auth/login" onClick={onLinkClick}>
                    {' '}
                    Logg inn
                </a>
            )}
        </div>
    );
};
export default ErrorMessage;
