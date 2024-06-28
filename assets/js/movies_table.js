function fetchMovies() {
    var year = document.getElementById('year-select1').value;
    var table = document.getElementById('movies-table');
    table.innerHTML = ''; // 清空旧数据

    // 创建一个新的行元素
    var row = '<tr><th>ID</th><th>电影名</th><th>总票房</th></tr>';
    table.innerHTML += row;

    // 假设每个CSV文件存储在服务器上的/data_csv目录中
    var csvFilePath = 'data_csv/box_office_' + year + '.csv';

    // 使用fetch API获取文件内容
    fetch(csvFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(csvData => {
            var rows = csvData.split('\n'); // 按行分割数据
            for (var i = 1; i < rows.length; i++) {
                var rowData = rows[i].split('\t');
                var row = '<tr>';
                for (var j = 0; j < 3; j++) {
                    row += '<td>' + rowData[j] + '</td>';
                }
                row += '</tr>';
                table.innerHTML += row;
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
