import React from 'react';
import PropTypes from 'prop-types';

const FooterContent = ({ title, data }) => {
    return (
        <div className="col-sm-12 col-md-3">
            <div className="customFooter__list">
                <h5 className="customFooter__list__title">{title}</h5>
                <ul className="customFooter__list__content">
                    {data.map((e, key) => (
                        <li key={key}>
                            <a className="customFooter__list__content__link" {...e.anchorProps}>
                                {e.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

FooterContent.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            anchorProps: PropTypes.object.isRequired
        })
    ).isRequired
};

export default FooterContent;
