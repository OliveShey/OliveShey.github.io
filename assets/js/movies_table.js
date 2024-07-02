// 弹窗的遮罩层
var overlay = document.createElement('div');
overlay.id = 'overlay';
overlay.style.display = 'none';
document.body.appendChild(overlay);

// 弹窗
var movieInfoWindow = document.createElement('div');
movieInfoWindow.id = 'movieDetails';
movieInfoWindow.className = 'movie-info-popup';
movieInfoWindow.innerHTML = `
    <div class="modal-content">
        <span class="close" onclick="hidePopup()">&times;</span>
        <!-- ... 电影详细信息 ... -->
    </div>
`;
document.body.appendChild(movieInfoWindow);

// 添加点击事件监听器
document.getElementById('movies-table').addEventListener('click', function(event) {
    if (event.target.tagName === 'TD') {
        // 获取电影ID和年份
        var movieId = event.target.parentElement.cells[0].textContent;
        var year = document.getElementById('year-select1').value;
        // 调用 showMovieDetails 函数
        showMovieDetails(movieId, year);
    }
});

// 弹窗的关闭函数
function hidePopup() {
    var movieInfoWindow = document.getElementById("movieDetails");
    movieInfoWindow.style.display = "none";
    // 隐藏遮罩层
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

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
                var movieId = rowData[0]; // 假设第一列是电影ID
                var movieName = rowData[8];
                if(movieName === "\r"){
                    movieName = rowData[1];
                }
                var boxOffice = rowData[2]; // 假设第三列是总票房

                var row = '<tr>';
                row += '<td>' + movieId + '</td>';
                row += '<td onclick="showMovieDetails(' + movieId + ',' + year + ')">' + movieName + '</td>';
                row += '<td>' + boxOffice + '</td>';
                row += '</tr>';
                table.innerHTML += row;
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function showMovieDetails(movieId, year) {
    // 假设每个电影的详细信息存储在/data_json目录下的JSON文件中
    var csvFilePath = 'data_csv/box_office_' + year + '.csv';

    fetch(csvFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(csvData => {

            var nameFlag = 1;
            var rows = csvData.split('\n'); // 按行分割数据
            var rowData = rows[movieId].split('\t');
            var movieName = rowData[8];
            if(movieName === "\r"){
                movieName = rowData[1];
                nameFlag = 0;
            }
            var boxOffice = rowData[2];
            var detailsBoxOffice = rowData[4];
            var genres = rowData[5].replace(/[\[\]"]/g, '');
            if(genres === "")
            {genres = "-";}
            var publicationTerritory = rowData[6];
            var moviePoster = rowData[7];
            var movieEnglishName = rowData[1];
            var detailEntryBoxOffice = detailsBoxOffice.replace(/\[{|}]|"/g, '').split("},{");

            // 创建一个小窗口来显示电影详细信息
            var movieInfoWindow = document.getElementById("movieDetails");
            movieInfoWindow.style.display = "block";
            // 创建一个可以滚动的容器
            var scrollableContent = document.createElement('div');
            scrollableContent.className = 'scrollable';
            scrollableContent.style.height = '600px'; // 设置容器的高度
            scrollableContent.style.overflowY = 'auto'; // 启用垂直滚动
            if(nameFlag){
            scrollableContent.innerHTML = `
                    <div class="text">
                    <h2>${movieName}</h2>
                    <p>总票房：${boxOffice}</p>
                    <p>类型：</p>
                    <p>${genres}</p>
                    <p>发行国家/地区：${publicationTerritory}</p>
                    <p>别名：${movieEnglishName}</p>
                    </div>
                    <a class="image"><img src= "${moviePoster}"></a>
                    </br>
                    <table id="detail-table"></table>
               
    `;}
            else {
                scrollableContent.innerHTML = `
                    <div class="text">
                    <h2>${movieName}</h2>
                    <p>总票房：${boxOffice}</p>
                    <p>类型：</p>
                    <p>${genres}</p>
                    <p>发行国家/地区：${publicationTerritory}</p>
                    </div>
                    <a class="image"><img src= "${moviePoster}"></a>
                    </br>
                    <table id="detail-table"></table>
               
    `;
            }

            // 将滚动容器添加到弹窗中
            movieInfoWindow.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="hidePopup()">&times;</span>
            <div class="info-container">
            ${scrollableContent.outerHTML}
            </div>
        </div>
    `;

            // 显示遮罩层
            var overlay = document.getElementById("overlay");
            overlay.style.display = "block";
            // 弹窗的关闭按钮
            var closeButton = document.querySelector('.movie-info-popup .close');
            closeButton.addEventListener('click', hidePopup);

            var detailTable = document.getElementById('detail-table');
            detailTable.innerHTML = ''; // 清空旧数据
            var detailTableRow = '<tr><th>国家/地区</th><th>上映日期</th><th>票房</th></tr>';
            detailTable.innerHTML += detailTableRow;
            for (var i = 0; i < detailEntryBoxOffice.length; i++) {
                detailEntryBoxOffice[i] = detailEntryBoxOffice[i].replace(",Market:","\t").replace(",Release Date:","\t").replace("Gross:","");
                var gross = detailEntryBoxOffice[i].split("\t")[0];
                if (gross === "") {
                    gross = "-";
                }
                var market = detailEntryBoxOffice[i].split("\t")[1];
                if (market === "Domestic") {
                    market = "North America";
                }
                var releaseDate = detailEntryBoxOffice[i].split("\t")[2];
                if (releaseDate === "") {
                    releaseDate = "-";
                }
                detailTableRow = '<tr>';
                detailTableRow += '<td>' + market + '</td>';
                detailTableRow += '<td>' + releaseDate + '</td>';
                detailTableRow += '<td>' + gross + '</td>';
                detailTableRow += '</tr>';
                detailTable.innerHTML += detailTableRow;
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// 初始化函数，当页面加载完成后执行
window.onload = function() {
    // 添加点击事件监听器
    document.getElementById('movies-table').addEventListener('click', function(event) {
        if (event.target.tagName === 'TD') {
            // 获取电影ID和年份
            var movieId = event.target.parentElement.cells[0].textContent;
            var year = document.getElementById('year-select1').value;
            // 调用 showMovieDetails 函数
            showMovieDetails(movieId, year);
        }
    });
};



