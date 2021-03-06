import React from 'react';
import { Line } from 'react-chartjs-2';
import getDate from '../../Util/getDate';
import 'chartjs-plugin-annotation';

const LineChart = ({ tipio, additionalSales, showGridLines, isAdmin }) => {
    let labels = [];
    let dataset1 = [];
    let dataset2 = [];
    labels = tipio && tipio.map((day) => day.date);
    dataset1 =
        tipio &&
        tipio.map((el) => {
            if (isAdmin) {
                return el.result;
            }
            return el.revenue;
        });
    dataset2 =
        additionalSales &&
        additionalSales.map((el) => {
            if (isAdmin) {
                return el.result;
            }
            return el.revenue;
        });
    const charData = {
        labels: labels,
        datasets: [
            {
                label: 'Mergsalg',
                data: dataset2,
                borderColor: '#C9BFDF'
            },
            {
                label: 'Hovedprofukt',
                data: dataset1,
                borderColor: '#4ABCAC'
            }
        ]
    };
    const options = {
        elements: {
            point: {
                radius: 2
            }
        },
        showLines: true,
        spanGaps: true,
        layout: {
            padding: {
                top: 55
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
                        beginAtZero: false,
                        min: 0,
                        display: showGridLines ? true : false,
                        color: '#8C8F91'
                    },
                    gridLines: {
                        display: showGridLines ? true : false,
                        color: '#F5F5F5'
                    }
                }
            ],
            xAxes: [
                {
                    ticks: {
                        autoSkip: true,
                        color: '#5C6265',
                        userCallback: function(item, index) {
                            if (index === 4) return getDate(item, 'DateMonth');
                            if (index === 9) return getDate(item, 'DateMonth');
                            if (index === 14) return getDate(item, 'DateMonth');
                            if (index === 19) return getDate(item, 'DateMonth');
                            if (index === 24) return getDate(item, 'DateMonth');
                            if (index === 29) return getDate(item, 'DateMonth');
                        }
                    },
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
            xAlign: 'center',
            xPadding: 20,
            titleAlign: 'center',
            bodyAlign: 'center',
            callbacks: {
                title: function(tooltipItems, data) {
                    return tooltipItems[0].yLabel;
                },
                label: function(tooltipItems) {
                    return getDate(tooltipItems.xLabel, 'DateName') + ' ' + getDate(tooltipItems.xLabel, 'DateMonth');
                }
            }
        }
    };

    return (
        <>
            <Line data={charData} options={options} />
        </>
    );
};
export default LineChart;
