function create_changes_line_charts(){
var chartDom = document.getElementById('changes_line_charts');
var myChart = echarts.init(chartDom);
var option;

const colors = ['#5470C6', '#EE6666'];
option = {
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        left: '18%',
        right: '30%'
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        data: ['每年全球票房前200电影票房之和', '每年全球票房前200电影票房之标准差']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },

            data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
                '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
                '2020', '2021', '2022', '2023', '2024']

        }

    ],
    yAxis: [
        {
            type: 'value',
            name: '每年全球票房前200电影票房之和',
            position: 'left',
            alignTicks: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '${value}'
            }
        },
        {
            type: 'value',
            name: '每年全球票房前200电影票房之标准差',
            position: 'right',
            alignTicks: true,
            offset: 80,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: '每年全球票房前200电影票房之和',
            yAxisIndex: 0,
            type: 'line',
            data : [
                13936536887, 16134416061, 17785601879, 18765289893,
                19464385226, 18916200258, 19919327896, 22316413048,
                23253651146, 25693569534, 25570061807, 26925171339,
                29507398427, 29077504468, 30010529897, 32741170056,
                32374542002, 34209146582, 34135933512, 35428768128,
                7940291432, 18249642692, 20902009035, 21544915214,
                7179349864
            ]
        },
        {
            name: '每年全球票房前200电影票房之标准差',
            type: 'line',
            yAxisIndex: 1,
            data : [
                94689325.992, 129557383.931, 137093391.477, 142182292.016,
                141395534.308, 134632142.386, 133822598.016, 160912943.418,
                150357116.112, 244757887.010, 176741942.000, 190550444.592,
                218181001.189, 205460390.273, 190979653.340, 272729778.239,
                219952403.508, 247114674.087, 266983574.467, 318104956.647,
                78721467.065, 194314077.097, 251596459.818, 202618157.839,
                102494526.979
            ]
        }
    ]
};
option && myChart.setOption(option);}
