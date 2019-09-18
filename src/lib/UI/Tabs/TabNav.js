import React from 'react';
import PropTypes from 'prop-types';

function TabNav({ children, ...attributes }) {
    return (
        <ul {...attributes} className="tab">
            {children}
        </ul>
    );
}

TabNav.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default TabNav;
