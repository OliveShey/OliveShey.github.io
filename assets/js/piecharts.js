// 假设这是您存储电影类型和对应指数的文本文件路径
const filePath = "data_csv/genres_and_index.csv";
var year = document.getElementById('year-select1').value;
// 获取文件内容
function readFileContent(filePath) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok ${response.statusText}`);
            }
            return response.text();
        })
        .catch(error => {
            console.error('Error fetching file content:', error);
            throw error;
        });
}

// 解析文件内容并创建ECharts图表
function createPieChart(content) {
    const data = [];
    var segment = content.split('20\d\d:\n')[year-2000];
    var row = segment.split("\n");
    var genre = row.split(":")[0];
    var index = row.split(":")[1];
    data.push({ value: index, name: genre });

    // 创建ECharts实例
    var chartDom = document.getElementById('piecharts');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: data
            }
        ]
    };

    option && myChart.setOption(option);
}

// 读取文件内容并创建图表
readFileContent(filePath)
    .then(content => {
        createPieChart(content);
    })
    .catch(error => {
        console.error('读取文件时出错:', error);
    });

