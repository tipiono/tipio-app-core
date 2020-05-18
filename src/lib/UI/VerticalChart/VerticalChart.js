import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import getDate from '../../Util/getDate';

const VerticalChart = ({ tipio, additionalSales, showYears }) => {
    let labels = [];
    let dataset1 = [];
    let dataset2 = [];
    labels = additionalSales && additionalSales.map((day) => day.date);
    dataset1 = tipio && tipio.map((el) => el.revenue);
    dataset2 = additionalSales && additionalSales.map((el) => el.revenue);
    const charData = {
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
                    },
                    ticks: {
                        callback: function(value) {
                            if (showYears) {
                                return getDate(value, 'Month');
                            } else {
                                return getDate(value, 'DateName');
                            }
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
                title: function(tooltipItems) {
                    return tooltipItems[0].yLabel;
                },
                label: function(tooltipItems) {
                    if (showYears) {
                        return getDate(tooltipItems.xLabel, 'MonthYear');
                    } else {
                        return (
                            getDate(tooltipItems.xLabel, 'DateName') + ' ' + getDate(tooltipItems.xLabel, 'DateMonth')
                        );
                    }
                }
            }
        },
        annotation: {
            annotations: [
                {
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: 0,
                    borderColor: '#C9CFD3',
                    borderWidth: 1
                }
            ]
        }
    };

    return (
        <>
            <Bar data={charData} options={options} />
        </>
    );
};
export default VerticalChart;
