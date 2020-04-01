import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const CircleChart = ({ percentage }) => {
    const data = {
        labels: ['Man', 'Tir'],
        datasets: [
            {
                data: [percentage, 100 - percentage],
                backgroundColor: ['#4ABCAC'],
                borderWidth: 1
            }
        ]
    };
    const options = {
        cutoutPercentage: 80,
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    };

    return (
        <>
            <div>
                <Doughnut data={data} options={options} />
                <div class="donut-inner">
                    <span>{percentage}%</span>
                </div>
            </div>
        </>
    );
};

export default CircleChart;
