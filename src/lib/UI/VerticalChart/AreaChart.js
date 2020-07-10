import React from 'react';
import { Line } from 'react-chartjs-2';
import getDate from '../../Util/getDate';
import 'chartjs-plugin-annotation';

const AreaChart = ({ firstDatasets, secondDatasets, thirdDatasets }) => {
    let dataset3 = [250, 520, 290, 940];
    let labels = [];
    labels = firstDatasets && firstDatasets.map((day) => day.date);
    let datatests = [
        {
            label: 'First DataSet',
            data: secondDatasets?.map((el) => el.revenue),
            borderWidth: 2,
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#C9BFDF'
        },
        {
            label: 'Second Dataset',
            data: firstDatasets?.map((el) => el.revenue),
            borderWidth: 2,
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#4ABCAC'
        }
    ];
    if (thirdDatasets) {
        datatests.push({
            label: 'Third Dataset',
            data: dataset3,
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
                        beginAtZero: false,
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
                        color: '#5C6265'
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
export default AreaChart;
