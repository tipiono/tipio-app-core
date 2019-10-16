import React from 'react';

const CircleChart = () => {
    return (
        <div className="set-size charts-container">
            <div className="pie-wrapper progress-45 style-2">
                <span className="label">45%</span>
                <div className="pie">
                    <div className="left-side half-circle" />
                    <div className="right-side half-circle" />
                </div>
                <div className="shadow" />
            </div>
        </div>
    );
};

export default CircleChart;
