import React from 'react';

import PublishedByBase from './PublishedByBase';

const PublishedByWithDate = (props) => {
    return (
        <PublishedByBase {...props}>
            <p className="publishedBy--date">{props.date}</p>
        </PublishedByBase>
    );
};

export default PublishedByWithDate;
