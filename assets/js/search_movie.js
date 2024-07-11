function searchMovies() {
    var resultTotal = { value: 0 }; // 使用对象来持有value
    var query = document.getElementById('search-movie-name').value;
    if (query) {
        // 清空之前的搜索结果
        var result_table = document.getElementById('results-table');
        result_table.innerHTML = ''; // 清空旧数据
        var row = '<tr class="hover-link"><th>当年票房排名</th><th>电影名</th><th>总票房</th></tr>';
        result_table.innerHTML += row;
        // 遍历年份，读取对应的CSV文件
        var requests = [];
        for (var year = 2000; year <= 2024; year++) {
            var filename = `data_csv/box_office_${year}.csv`;
            requests.push(readCSV(filename, query, year, resultTotal));
        }
        // 当所有请求都完成时，打印总数
        Promise.all(requests).then(() => {
            if(resultTotal.value === 0){
                result_table.innerHTML = '<tr><th>搜索结果为空</th></tr>';
            }
        });
    } else {
        alert('请输入电影名称进行搜索');
    }
}

function readCSV(filename, query, year, resultTotal) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', filename, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var csvData = xhr.responseText;
                    var results = parseCSV(csvData, query, year);
                    resultTotal.value += results.length;
                    displayResults(results);
                    resolve(); // 请求成功，解决Promise
                } else {
                    reject(new Error(`Failed to load ${filename}`)); // 请求失败，拒绝Promise
                }
            }
        };
        xhr.send(null);
    });
}
function parseCSV(csvData, query, year) {
    var lines = csvData.split('\n');
    var result = [];

    lines.forEach(function (line) {
        var resultElement = [];
        var columns = line.split('\t');
        if (columns[8].toLowerCase().includes(query.toLowerCase())) {
            resultElement.push(columns[0]);
            resultElement.push(columns[8]);
            resultElement.push(columns[2]);
            resultElement.push(year);
            result.push(resultElement);
        }
    });

    return result;
}

function displayResults(results) {
    var table = document.getElementById('results-table');
    results.forEach(function (result) {
        movieId = result[0];
        movieName = result[1];
        boxOffice = result[2];
        year = result[3];
        var row = '<tr class="hover-link">';
        row += '<td>' + movieId + '</td>';
        row += '<td onclick="showMovieDetails(' + movieId + ',' + year + ')">' + movieName + '</td>';
        row += '<td>' + boxOffice + '</td>';
        row += '</tr>';
        table.innerHTML += row;
    });
}
