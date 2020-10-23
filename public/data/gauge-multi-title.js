/*
title: Multi Title Gauge
titleCN: 多标题仪表盘
category: gauge
difficulty: 4
*/

option = {
    series: [{
        type: 'gauge',
        anchor: {
            show: true,
            showAbove: true,
            size: 18,
            itemStyle: {
                color: '#FAC858'
            }
        },
        pointer: {
            icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
            width: 8,
            length: '80%',
            offsetCenter: [0, '8%']
        },

        progress: {
            show: true,
            overlap: true,
            roundCap: true
        },
        axisLine: {
            roundCap: true
        },
        data: [{
            value: 20,
            name: '完成率',
            title: {
                offsetCenter: ['-40%', '80%']
            },
            detail: {
                offsetCenter: ['-40%', '95%']
            }
        },
        {
            value: 40,
            name: '达标率',
            title: {
                offsetCenter: ['0%', '80%']
            },
            detail: {
                offsetCenter: ['0%', '95%']
            }
        },
        {
            value: 60,
            name: '优秀率',
            title: {
                offsetCenter: ['40%', '80%']
            },
            detail: {
                offsetCenter: ['40%', '95%']
            }
        }
        ],
        title: {
            fontSize: 14
        },
        detail: {
            width: 40,
            height: 14,
            fontSize: 14,
            color: '#fff',
            backgroundColor: 'auto',
            borderRadius: 3,
            formatter: '{value}%'
        }
    }]
};

setInterval(function () {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    option.series[0].data[1].value = (Math.random() * 100).toFixed(2) - 0;
    option.series[0].data[2].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
}, 2000);