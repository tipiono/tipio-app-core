import React from 'react';
import { Line } from 'react-chartjs-2';
import getDate from '../../Util/getDate';
import 'chartjs-plugin-annotation';

const AreaChart = ({ firstDatasets, secondDatasets, thirdDatasets, placeholder, labelPlaceholder }) => {
    let labels = [];
    if (labelPlaceholder === 'year') {
        labels = ['Q1 20', 'Q2 20', 'Q3 20', 'Q4 20'];
    } else {
        labels = firstDatasets && firstDatasets.map((day) => day?.date);
    }
    let datatests = [
        {
            label: 'First DataSet',
            data: firstDatasets?.map((el) => el.result),
            borderWidth: 2,
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#C9BFDF'
        },
        {
            label: 'Second Dataset',
            data: secondDatasets?.map((el) => el.result),
            borderWidth: 2,
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#4ABCAC'
        }
    ];
    if (thirdDatasets) {
        datatests.push({
            label: 'Third Dataset',
            data: thirdDatasets?.map((el) => el.result),
            borderWidth: 2,
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#C2E7E2'
        });
    }
    const charData = {
        labels: labels,
        datasets: datatests
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
                        beginAtZero: true,
                        min: 0,
                        display: true,
                        color: '#8C8F91'
                    },
                    gridLines: {
                        display: true,
                        color: '#F5F5F5'
                    }
                }
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        color: '#5C6265',
                        callback: function(value) {
                            if (labelPlaceholder === 'week') {
                                return getDate(value, 'DateName');
                            } else if (labelPlaceholder === 'month') {
                                return getDate(value, 'DateMonth');
                            } else return value;
                        }
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
                    let title = tooltipItems[0].yLabel;
                    if (placeholder) {
                        title += ' Kr';
                    } else {
                        title += '';
                    }
                    return title;
                },
                label: function(tooltipItems) {
                    display: false;
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
export default AreaChart;
