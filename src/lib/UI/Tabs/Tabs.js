import React, { useState, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

function Tabs(props) {
    const [activeTab, setActiveTab] = useState(props.defaultActive || 0);
    const navigation = props.children[0];
    const tabs = props.children[1];
    return (
        <>
            {
                cloneElement(navigation, {children: Children.map(navigation.props.children, (child, i) => (
                    cloneElement(child, { isActive: i === activeTab, onClick: () => { setActiveTab(i); } })
                ))})
            }
            { tabs.props.children.filter((v, i) => i === activeTab)[0] }
        </>
    );
}

Tabs.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    defaultActive: PropTypes.number
};

export default Tabs;
