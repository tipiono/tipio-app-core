import React from 'react';
import { Line } from 'react-chartjs-2';
import getDate from '../../Util/getDate';

const AreaChart = ({ data }) => {
    let labels = [];
    let dataset1 = [];
    let dataset2 = [];
    labels = data.map((day) => day.date);
    dataset1 = data.map((el) => el.count);
    dataset2 = data.map((el) => el.count2);
    const charData = {
        labels: labels,
        datasets: [
            {
                label: 'Mergsalg',
                data: dataset2,
                backgroundColor: '#E2E7EF',
                borderColor: '#C9BFDF'
            },
            {
                label: 'Hovedprofukt',
                data: dataset1,
                backgroundColor: '#E0F3E0',
                borderColor: '#4ABCAC'
            }
        ]
    };
    const options = {
        showLines: true,
        spanGaps: true,
        layout: {
            padding: {
                top: 45
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
                    ticks: {
                        autoSkip: true,
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
export default AreaChart;
