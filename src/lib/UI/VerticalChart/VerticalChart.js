import React from 'react';
import { Bar } from 'react-chartjs-2';

const VerticalChart = (props) => {
    const { dataset1, dataset2, labels } = props;

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Hovedprofukt',
                data: dataset1,
                backgroundColor: '#4ABCAC'
            },
            {
                label: 'Mersalg',
                data: dataset2,
                backgroundColor: '#C2E7E2'
            }
        ]
    };
    const options = {
        layout: {
            padding: {
                top: 20
            }
        },
        title: {
            display: false
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        display: false
                    }
                }
            ],
            xAxes: [
                {
                    barPercentage: 0.7,
                    gridLines: {
                        display: false
                    }
                }
            ]
        },
        tooltips: {
            backgroundColor: '#4F2E90',
            enabled: true,
            mode: 'single',
            displayColors: false,
            yAlign: 'bottom',
            xPadding: 10,
            callbacks: {
                title: function() {
                    return;
                },
                label: function(tooltipItems) {
                    return tooltipItems.yLabel;
                }
            }
        }
    };

    return (
        <>
            <Bar data={data} options={options} />
        </>
    );
};
export default VerticalChart;
