function createPieChart2() {
    // 假设这是您存储电影类型和对应指数的文本文件路径
    var year = Number(document.getElementById('year-select3').value);
    var chartTitle = document.getElementById('piechart-title2');
    if (year) {
        chartTitle.textContent = year + '年全球票房前200名电影国家/地区票房占比';
        // 以下代码是创建图表的逻辑
    } else {
        chartTitle.textContent = '';
        // 如果 year 为空，则不创建图表
    }
    var chartDom = document.getElementById('piecharts2');
    var myChart = echarts.init(chartDom);
// 获取文件内容
    const content = [[2000,
        "美国:11961225039\n" +
        "英国:775526915\n" +
        "中国台湾:213525736\n" +
        "德国:287753631\n" +
        "日本:160629851\n" +
        "法国:254470229\n" +
        "意大利:115087702\n" +
        "丹麦:59141466\n" +
        "澳大利亚:29975235\n" +
        "加拿大:15471969\n" +
        "中国香港:24410383\n" +
        "西班牙:7733894\n" +
        "印度:4279351\n" +
        "巴西:4069261\n" +
        "瑞典:3920489\n" +
        "伊朗:2724595\n" +
        "俄罗斯:2321029\n" +
        "中国大陆:2150929\n" +
        "比利时:2111280"],
        [2001,
            "美国:12397845801\n" +
            "新西兰:868385360\n" +
            "英国:755093869\n" +
            "日本:377210346\n" +
            "澳大利亚:234399558\n" +
            "法国:648444901\n" +
            "德国:283520074\n" +
            "爱尔兰:96976270\n" +
            "加拿大:140118748\n" +
            "中国香港:57471664\n" +
            "比利时:39093166\n" +
            "墨西哥:54525159\n" +
            "印度:42117046\n" +
            "瑞典:14572229\n" +
            "西班牙:23406062\n" +
            "伊朗:8914751\n" +
            "阿根廷:8772695\n" +
            "意大利:16808532\n" +
            "中国大陆:6780490\n" +
            "奥地利:6749315" ],
        [2002 ,
            "美国:13589934143\n" +
            "英国:2036276091\n" +
            "德国:469547792\n" +
            "中国大陆:199179960\n" +
            "加拿大:312419326\n" +
            "法国:418035734\n" +
            "日本:215239963\n" +
            "西班牙:63631758\n" +
            "澳大利亚:94779069\n" +
            "意大利:111395786\n" +
            "巴西:30641770\n" +
            "墨西哥:26996738\n" +
            "韩国:119119181\n" +
            "爱尔兰:16373112\n" +
            "阿根廷:12413888\n" +
            "中国香港:12165016\n" +
            "阿鲁巴:11560806"],
        [2003,
            "美国:16216790742\n" +
            "英国:955699680\n" +
            "日本:430611724\n" +
            "加拿大:284943386\n" +
            "德国:244938486\n" +
            "法国:241776754\n" +
            "新西兰:41062976\n" +
            "中国香港:34268701\n" +
            "意大利:59881252\n" +
            "爱尔兰:55414785\n" +
            "西班牙:38037613\n" +
            "泰国:20235426\n" +
            "韩国:41717724\n" +
            "丹麦:16680836\n" +
            "斯洛伐克:15461305\n" +
            "中国大陆:14687167\n" +
            "印度:25368473\n" +
            "希腊:10395779"],
        [2004,
            "美国:15821709985\n" +
            "英国:1465668395\n" +
            "日本:596803689\n" +
            "德国:379914081\n" +
            "中国大陆:193776390\n" +
            "法国:391004752\n" +
            "加拿大:169403089\n" +
            "韩国:89053575\n" +
            "阿根廷:57663224\n" +
            "西班牙:84036286\n" +
            "俄罗斯:32396890\n" +
            "比利时:24511116\n" +
            "意大利:56592066\n" +
            "荷兰:21148829\n" +
            "土耳其:34793525\n" +
            "中国香港:19470239\n" +
            "哥伦比亚:12594630" ],
        [2005,
            "英国:2819039521\n" +
            "美国:13025500965\n" +
            "新西兰:575204068\n" +
            "加拿大:457541403\n" +
            "德国:314813159\n" +
            "法国:621531142\n" +
            "韩国:371262433\n" +
            "日本:374264701\n" +
            "比利时:34257135\n" +
            "中国大陆:30925693\n" +
            "澳大利亚:30762648\n" +
            "泰国:27165581\n" +
            "芬兰:26146165\n" +
            "意大利:97124344\n" +
            "西班牙:21762391\n" +
            "土耳其:18612999\n" +
            "俄罗斯:36459389\n" +
            "瑞典:18318233\n" +
            "巴西:15508288"],
        [2006,
            "美国:14819646403\n" +
            "英国:1830668682\n" +
            "澳大利亚:384335608\n" +
            "法国:633948067\n" +
            "德国:566523864\n" +
            "加拿大:322685406\n" +
            "韩国:239369669\n" +
            "西班牙:192757398\n" +
            "中国大陆:101167749\n" +
            "日本:467365602\n" +
            "俄罗斯:76863023\n" +
            "印度:135380409\n" +
            "意大利:54147264\n" +
            "荷兰:26768563\n" +
            "阿尔及利亚:22963701\n" +
            "爱尔兰:22899908\n" +
            "中国香港:21836580"],
        [2007,
            "美国:18260554732\n" +
            "英国:1901732954\n" +
            "泰国:108975160\n" +
            "新西兰:103967384\n" +
            "法国:376547474\n" +
            "中国香港:95797812\n" +
            "德国:181759758\n" +
            "西班牙:111150642\n" +
            "日本:429003805\n" +
            "韩国:163346331\n" +
            "中国台湾:67091915\n" +
            "俄罗斯:55639741\n" +
            "中国大陆:77670141\n" +
            "印度:200260555\n" +
            "意大利:114162846\n" +
            "哈萨克斯坦:26527510\n" +
            "瑞典:21287566\n" +
            "爱尔兰:20936722" ],
        [2008,"美国:18000717561\n" +
        "英国:2070456973\n" +
        "法国:897890118\n" +
        "澳大利亚:240958416\n" +
        "日本:705428476\n" +
        "中国大陆:306444971\n" +
        "西班牙:96409830\n" +
        "韩国:269195488\n" +
        "德国:95153817\n" +
        "比利时:41721414\n" +
        "俄罗斯:88841050\n" +
        "印度:139477462\n" +
        "意大利:136168509\n" +
        "土耳其:50760394\n" +
        "德国/法国/捷克:26937355\n" +
        "墨西哥:23313049\n" +
        "中国香港:22108789\n" +
        "芬兰:21822495\n" +
        "加拿大:19844979"],
        [2009,
            "美国:21656208997\n" +
            "英国:1173546594\n" +
            "德国:577023822\n" +
            "中国大陆:120432178\n" +
            "西班牙:201877434\n" +
            "瑞典:215843760\n" +
            "泰国:100734718\n" +
            "日本:724445600\n" +
            "韩国:183162503\n" +
            "法国:350076272\n" +
            "印度:81057821\n" +
            "加拿大:48858618\n" +
            "中国香港:39886986\n" +
            "阿根廷:35079650\n" +
            "意大利:50099947\n" +
            "土耳其:27699692\n" +
            "巴西:24415116\n" +
            "俄罗斯:83119826"],
        [2010,
            "美国:20712751034\n" +
            "英国:1559118555\n" +
            "德国:300228084\n" +
            "日本:962175816\n" +
            "韩国:420995471\n" +
            "中国大陆:408804312\n" +
            "法国:599686645\n" +
            "加拿大:101377349\n" +
            "比利时:70627617\n" +
            "巴西:103713867\n" +
            "土耳其:77613497\n" +
            "新西兰:43551154\n" +
            "印度:71804956\n" +
            "中国香港:46964129\n" +
            "墨西哥:25147786\n" +
            "俄罗斯:24022125\n" +
            "意大利:22039646\n" +
            "西班牙:19439764"],
        [2011,
            "美国:22943786356\n" +
            "法国:842749655\n" +
            "英国:913403476\n" +
            "澳大利亚:218650950\n" +
            "西班牙:215088108\n" +
            "日本:728327925\n" +
            "中国大陆:273293082\n" +
            "加拿大:55362705\n" +
            "韩国:240807180\n" +
            "德国:71243937\n" +
            "瑞典:39000000\n" +
            "印度:56179570\n" +
            "俄罗斯:86156030\n" +
            "中国台湾:29843025\n" +
            "波兰:26923513\n" +
            "土耳其:24792348\n" +
            "伊朗:22926076\n" +
            "意大利:44720863\n" +
            "荷兰:22194574"],
        [2012,
            "美国:23554607535\n" +
            "英国:2379128907\n" +
            "法国:639928422\n" +
            "德国:264111967\n" +
            "西班牙:271539890\n" +
            "中国大陆:446438547\n" +
            "日本:1020814127\n" +
            "韩国:513484695\n" +
            "葡萄牙:50950296\n" +
            "比利时:49261830\n" +
            "土耳其:35797045\n" +
            "南非:34428345\n" +
            "俄罗斯:33674759\n" +
            "澳大利亚:32813407\n" +
            "印度:109042268\n" +
            "巴西:25402893\n" +
            "芬兰:23785681\n" +
            "加拿大:22187813"],
        [2013,
            "美国:23476992839\n" +
            "英国:1185803626\n" +
            "澳大利亚:353641895\n" +
            "德国:434218653\n" +
            "中国大陆:1522200266\n" +
            "西班牙:146428180\n" +
            "墨西哥:100486616\n" +
            "印度:88031955\n" +
            "韩国:560962290\n" +
            "日本:492658089\n" +
            "法国:174979886\n" +
            "意大利:94294101\n" +
            "俄罗斯:135953722\n" +
            "比利时:64197205\n" +
            "中国香港:105680806\n" +
            "瑞典:77601223\n" +
            "土耳其:36185741\n" +
            "南非:27187375"],
        [2014,
           "美国:23498325874\n" +
           "法国:1017384373\n" +
           "英国:1433661599\n" +
           "中国大陆:2011395522\n" +
           "日本:518188348\n" +
           "韩国:486993705\n" +
           "加拿大:313396980\n" +
           "印度:186412568\n" +
           "西班牙:78768613\n" +
           "德国:103701771\n" +
           "瑞典:66980456\n" +
           "中国香港:87295187\n" +
           "土耳其:39477906\n" +
           "俄罗斯:38885962\n" +
           "澳大利亚:64035244\n" +
           "比利时:34146896\n" +
           "阿根廷:31478893"],
        [2015,"美国:23048714556\n" +
        "英国:2784875920\n" +
        "中国大陆:3715866173\n" +
        "澳大利亚:482371262\n" +
        "法国:586457807\n" +
        "韩国:737242077\n" +
        "中国香港:350806856\n" +
        "加拿大:112983889\n" +
        "中国台湾:83867493\n" +
        "德国:144297346\n" +
        "印度:160257278\n" +
        "日本:375013661\n" +
        "西班牙:40591862\n" +
        "爱尔兰:35401758\n" +
        "瑞典:30692889\n" +
        "墨西哥:25892561\n" +
        "土耳其:25836668"],
        [2016,
            "美国:22943067966\n" +
            "英国:3392167611\n" +
            "日本:726395488\n" +
            "芬兰:352333929\n" +
            "中国大陆:2592427761\n" +
            "加拿大:346440269\n" +
            "印度:510550105\n" +
            "中国香港:277397518\n" +
            "澳大利亚:180563636\n" +
            "韩国:442526744\n" +
            "法国:274021470\n" +
            "意大利:107133630\n" +
            "西班牙:47309313\n" +
            "巴西:71193816\n" +
            "俄罗斯:82976725\n" +
            "德国:28036021"],
        [2017,
            "美国:23597595160\n" +
            "中国大陆:5022632489\n" +
            "英国:2378307534\n" +
            "马耳他:352789811\n" +
            "印度:549293852\n" +
            "法国:399288467\n" +
            "韩国:605160175\n" +
            "中国香港:272947747\n" +
            "中国台湾:86252940\n" +
            "加拿大:68743485\n" +
            "德国:92126880\n" +
            "日本:397911156\n" +
            "俄罗斯:77214689\n" +
            "泰国:44560421\n" +
            "意大利:75374950\n" +
            "阿联酋:40656399\n" +
            "西班牙:93185334\n" +
            "土耳其:28952258\n" +
            "捷克:26152835"],
        [2018,
            "美国:24427115381\n" +
            "英国:1944787077\n" +
            "中国大陆:4484166247\n" +
            "法国:928296694\n" +
            "中国台湾:142958164\n" +
            "日本:874803620\n" +
            "韩国:387769409\n" +
            "爱尔兰:95918706\n" +
            "印度:472024141\n" +
            "中国香港:64517456\n" +
            "黎巴嫩:64417003\n" +
            "德国:131326578\n" +
            "巴西:36075317\n" +
            "波兰:30114115\n" +
            "俄罗斯:27222681\n" +
            "新西兰:24420923"],
        [2019,
            "美国:25374567544\n" +
            "中国大陆:5563938102\n" +
            "加拿大:676138133\n" +
            "韩国:697109017\n" +
            "英国:1117524881\n" +
            "日本:824305743\n" +
            "芬兰:147792047\n" +
            "中国香港:222107781\n" +
            "法国:235882043\n" +
            "印度:219624845\n" +
            "德国:56573047\n" +
            "俄罗斯:88214684\n" +
            "西班牙:37359689\n" +
            "比利时:35515687\n" +
            "中国台湾:48221703\n" +
            "意大利:23841090\n" +
            "澳大利亚:21314816\n" +
            "墨西哥:20084169\n" +
            "爱尔兰:18653107"],
        [2020,
            "中国大陆:2196960554\n" +
            "日本:990973525\n" +
            "美国:2886551851\n" +
            "加拿大:597679433\n" +
            "英国:246582507\n" +
            "中国香港:80543319\n" +
            "意大利:83549584\n" +
            "印度:179754711\n" +
            "韩国:255047006\n" +
            "巴西:34360029\n" +
            "俄罗斯:35678190\n" +
            "法国:102784475\n" +
            "西班牙:43851605\n" +
            "德国:50590601\n" +
            "丹麦:12745392\n" +
            "比利时:20305322\n" +
            "澳大利亚:9766489\n" +
            "波兰:22159465\n" +
            "荷兰:7760946\n" +
            "阿根廷:7627100\n" +
            "越南:6709383\n" +
            "墨西哥:6292780\n" +
            "巴哈马:6274027\n" +
            "中国台湾:6008448\n" +
            "爱沙尼亚:5543147\n" +
            "土耳其:5084342"],
        [2021,
            "美国:10079802016\n" +
            "中国大陆:4323079972\n" +
            "英国:1285374257\n" +
            "中国香港:253078737\n" +
            "加拿大:340917550\n" +
            "日本:980943941\n" +
            "澳大利亚:169478003\n" +
            "法国:283684427\n" +
            " 韩国:64666502\n" +
            "中国台湾:52946097\n" +
            "德国:90803980\n" +
            "韩国:63651180\n" +
            "俄罗斯:87497505\n" +
            "西班牙:41447893\n" +
            "爱尔兰:18887953\n" +
            "越南 Vietnam:17480489\n" +
            "荷兰:15204017\n" +
            "印度 India:13056490\n" +
            "挪威:12687507\n" +
            "印度:18035290\n" +
            "秘鲁:10172403\n" +
            "泰国:8826689\n" +
            "波兰:8177284"],
        [2022,
            "美国:14785025919\n" +
            "澳大利亚:1068950551\n" +
            "中国大陆:1530985212\n" +
            "英国:716303627\n" +
            "日本:967392335\n" +
            "印度:558970801\n" +
            "瑞典:165008121\n" +
            "韩国:491804850\n" +
            "俄罗斯:103944784\n" +
            "法国:179678148\n" +
            "爱尔兰:49262687\n" +
            "西班牙:59318641\n" +
            "德国:79611975\n" +
            "中国台湾:19167164\n" +
            "意大利:34631025\n" +
            "巴基斯坦:13941539\n" +
            "土耳其:11325405\n" +
            "比利时:10885116\n" +
            "中国香港:20628683\n" +
            "加拿大:9847490\n" +
            "荷兰:8000956\n" +
            "波兰:7328061"],
        [2023,
           "美国:18195566596\n" +
           "英国:542999314\n" +
           "加拿大:189086877\n" +
           "日本:960331699\n" +
           "爱尔兰:117625455\n" +
           "印度:180228025\n" +
           "韩国:433907222\n" +
           "澳大利亚:92181735\n" +
           "西班牙:86311697\n" +
           "意大利:48082765\n" +
           "俄罗斯:129527846\n" +
           "法国:306816849\n" +
           "中国大陆:61201287\n" +
           "墨西哥:21741620\n" +
           "越南:31029061\n" +
           "乌克兰:17895743\n" +
           "德国:61369708\n" +
           "中国香港:14911562\n" +
           "芬兰:14281199\n" +
           "泰国:10766032\n" +
           "波兰:10040346\n" +
           "瑞典:9544346\n" +
           "土耳其:9468230"],
        [2024,
            "美国:5542934033\n" +
            "澳大利亚:180885835\n" +
            "韩国:238799307\n" +
            "英国:191604170\n" +
            "日本:434889354\n" +
            "法国:181727025\n" +
            "德国:31773667\n" +
            "俄罗斯:95820314\n" +
            "越南:44360194\n" +
            "波兰:29066656\n" +
            "中国香港:26017428\n" +
            "印度:45452075\n" +
            "土耳其:17055666\n" +
            "意大利:24084729\n" +
            "中国大陆:15227986\n" +
            "中国台湾:4512194\n" +
            "墨西哥:7152992\n" +
            "西班牙:7040804\n" +
            "加拿大:4212621\n" +
            "巴西:3706983\n" +
            "荷兰:8221555\n" +
            "罗马尼亚:5188668\n" +
            "泰国:2775044\n" +
            "瑞士:2303222"]];
    const yearContent = content.find(item => item[0] === year);
    const secondElement = yearContent ? yearContent[1] : null;
    if (secondElement) {
        var data = [];
        var row = secondElement.split("\n");
        for(var i =0;i<row.length;i++){
            var territory = row[i].split(":")[0];
            var index = row[i].split(":")[1];
            data.push({ value: index, name: territory });}
        }
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
