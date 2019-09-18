import React from 'react';

export default function TabContentItem({ children, ...props }) {
    return (
        <div {...props}>
            { children }
        </div>
    );
}