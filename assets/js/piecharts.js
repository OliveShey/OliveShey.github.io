function createPieChart() {
    // 假设这是您存储电影类型和对应指数的文本文件路径
    var year = Number(document.getElementById('year-select2').value);
    var chartTitle = document.getElementById('piechart-title');
    if (year) {
        chartTitle.textContent = year + '年全球票房前200名电影类型占比';
        // 以下代码是创建图表的逻辑
    } else {
        chartTitle.textContent = '';
        // 如果 year 为空，则不创建图表
    }
    var chartDom = document.getElementById('piecharts');
    var myChart = echarts.init(chartDom);
// 获取文件内容
    const content = [[2000,
        "Action:4724647881\n" +
        "Sci-Fi:1637620956\n" +
        "Adventure:5024512036\n" +
        "Thriller:4300754714\n" +
        "Drama:6559082019\n" +
        "Romance:3242416406\n" +
        "Comedy:5901482043\n" +
        "Fantasy:2494472174\n" +
        "Animation:1323131200\n" +
        "Family:2216841264\n" +
        "Horror:1346228368\n" +
        "Mystery:1169331489\n" +
        "Crime:2330347727\n" +
        "Biography:533575110\n" +
        "Sport:601063483\n" +
        "History:307964224\n" +
        "War:436920238\n" +
        "Music:523522806\n" +
        "Western:117407962\n" +
        "Musical:248908588\n" +
        "Documentary:74563868\n" +
        "Short:57592420\n" ],
        [2001,
            "Action:5942383747\n" +
            "Sci-Fi:2170166968\n" +
            "Adventure:6297194419\n" +
            "Family:3500020614\n" +
            "Fantasy:5385743503\n" +
            "Drama:6061015984\n" +
            "Animation:1886876182\n" +
            "Comedy:5931441204\n" +
            "Romance:3985998796\n" +
            "Crime:3004507132\n" +
            "Thriller:5220232213\n" +
            "War:906624348\n" +
            "Biography:570064265\n" +
            "Mystery:1829934934\n" +
            "Horror:754447139\n" +
            "Musical:227171797\n" +
            "History:206618193\n" +
            "Music:243447655\n" +
            "Sport:271203041\n" +
            "Western:89161007\n" +
            "Short:58706382\n" +
            "Documentary:41106567\n" ],
        [2002 ,
            "Action:6915233023\n" +
            "Sci-Fi:4170760809\n" +
            "Adventure:7930823417\n" +
            "Drama:7634544896\n" +
            "Fantasy:4498769454\n" +
            "Family:3561174842\n" +
            "Mystery:3588157995\n" +
            "Comedy:6279262612\n" +
            "Thriller:4763159393\n" +
            "Animation:1301895171\n" +
            "Romance:2679380668\n" +
            "Crime:3092699903\n" +
            "Biography:611653902\n" +
            "Musical:448780197\n" +
            "Horror:994541975\n" +
            "Music:490993540\n" +
            "War:661842937\n" +
            "Documentary:322213321\n" +
            "Western:122563539\n" +
            "Sport:451601669\n" +
            "History:180376910\n" +
            "Short:21098446\n"],
        [2003,
            "Action:8988508245\n" +
            "Sci-Fi:3072893825\n" +
            "Adventure:6333712290\n" +
            "Drama:6111537215\n" +
            "Fantasy:4357299703\n" +
            "Animation:1692735275\n" +
            "Comedy:8600163483\n" +
            "Family:3501302340\n" +
            "Thriller:4164005578\n" +
            "Crime:3422230427\n" +
            "Romance:2756311949\n" +
            "Mystery:1413182968\n" +
            "Musical:568022840\n" +
            "War:555130212\n" +
            "Horror:914685335\n" +
            "Music:678194790\n" +
            "History:208498201\n" +
            "Sport:265139251\n" +
            "Western:106660570\n" +
            "Biography:214394369\n" +
            "Documentary:97339564\n" +
            "Short:29388999\n" ],
        [2004,
            "Action:6566240059\n" +
            "Sci-Fi:3405944419\n" +
            "Adventure:8235269973\n" +
            "Animation:2891288249\n" +
            "Comedy:7533881117\n" +
            "Family:5121657960\n" +
            "Fantasy:4074717002\n" +
            "Romance:4691926994\n" +
            "Mystery:3178037432\n" +
            "Drama:7075013537\n" +
            "Thriller:5560179804\n" +
            "Crime:2072716789\n" +
            "Musical:644203359\n" +
            "Documentary:296245577\n" +
            "War:884448681\n" +
            "Sport:705394418\n" +
            "Biography:1057200911\n" +
            "Horror:1585321700\n" +
            "Music:614842717\n" +
            "History:383627678\n" +
            "Western:367221302\n" ],
        [2005,
            "Action:6037930683\n" +
            "Sci-Fi:3541888779\n" +
            "Adventure:7946062665\n" +
            "Family:5458052271\n" +
            "Fantasy:5369884384\n" +
            "Mystery:3172403001\n" +
            "Romance:4957004737\n" +
            "Animation:1794716154\n" +
            "Comedy:8025995139\n" +
            "Crime:3198572085\n" +
            "Thriller:3703016819\n" +
            "Musical:825677137\n" +
            "Drama:5805276301\n" +
            "Horror:1762827151\n" +
            "History:642193508\n" +
            "War:600407517\n" +
            "Sport:1001977773\n" +
            "Biography:756592761\n" +
            "Music:500051543\n" +
            "Western:163301924\n" +
            "Documentary:201989230\n" +
            "Short:74596537\n"],
        [2006,
            "Action:6076202890\n" +
            "Sci-Fi:1711305299\n" +
            "Adventure:8535774737\n" +
            "Fantasy:4010649290\n" +
            "Mystery:2425278193\n" +
            "Thriller:6122142978\n" +
            "Animation:3031091259\n" +
            "Comedy:8375984669\n" +
            "Family:4826933019\n" +
            "Sport:1269864343\n" +
            "Music:809622863\n" +
            "Musical:565744810\n" +
            "Romance:3386180791\n" +
            "Drama:7352761438\n" +
            "Biography:806802941\n" +
            "Crime:2496195044\n" +
            "Horror:1177012823\n" +
            "History:726372827\n" +
            "Documentary:263916072\n" +
            "Short:98230905\n" +
            "War:401538770\n" +
            "Western:44360757\n"],
        [2007,
            "Action:9118815477\n" +
            "Sci-Fi:3661796307\n" +
            "Adventure:9660646109\n" +
            "Fantasy:6808737901\n" +
            "Family:5823194767\n" +
            "Mystery:3607372722\n" +
            "Animation:3476877460\n" +
            "Comedy:8662246076\n" +
            "Romance:4263956620\n" +
            "Drama:7074328519\n" +
            "Horror:2051243297\n" +
            "Thriller:6193995063\n" +
            "Music:1005384420\n" +
            "Musical:1319980853\n" +
            "Crime:2833201252\n" +
            "Biography:946926887\n" +
            "Sport:594876942\n" +
            "War:765469816\n" +
            "History:640934901\n" +
            "Documentary:195721127\n" +
            "Western:70016220\n" +
            "Short:50652463\n" ],
        [2008,"Action:10242357763\n" +
        "Sci-Fi:4008687537\n" +
        "Crime:4102733209\n" +
        "Drama:10419270655\n" +
        "Thriller:6368940766\n" +
        "Adventure:9696740296\n" +
        "Animation:2986650150\n" +
        "Comedy:9276433827\n" +
        "Family:5249347580\n" +
        "Fantasy:5463172133\n" +
        "Musical:862911719\n" +
        "Romance:5937442211\n" +
        "Mystery:2046899675\n" +
        "Horror:1392539163\n" +
        "Music:948158496\n" +
        "History:1146216566\n" +
        "War:1022225140\n" +
        "Western:283762310\n" +
        "Biography:544889235\n" +
        "Sport:356713821\n" +
        "Documentary:93373808\n"],
        [2009,
            "Action:12407142012\n" +
            "Sci-Fi:8275089278\n" +
            "Adventure:13800706331\n" +
            "Fantasy:8934992014\n" +
            "Family:6665354421\n" +
            "Mystery:3736553001\n" +
            "Animation:3797757221\n" +
            "Comedy:9612970814\n" +
            "Drama:8249612214\n" +
            "Romance:4153883724\n" +
            "Thriller:4414070796\n" +
            "Music:1197743164\n" +
            "Musical:871768348\n" +
            "Crime:2065213299\n" +
            "War:668215573\n" +
            "Biography:1282516688\n" +
            "Sport:869629043\n" +
            "Documentary:347073172\n" +
            "History:611714750\n" +
            "Horror:1366504745\n" +
            "Short:55902624\n"],
        [2010,
            "Action:9889988789\n" +
            "Sci-Fi:3711257683\n" +
            "Adventure:12371359585\n" +
            "Animation:4655193394\n" +
            "Comedy:9485816372\n" +
            "Family:9074456794\n" +
            "Fantasy:9278987175\n" +
            "Mystery:4336419917\n" +
            "Thriller:6305239116\n" +
            "Romance:5822564342\n" +
            "Drama:8883871118\n" +
            "Musical:702200565\n" +
            "Crime:2781788109\n" +
            "Biography:1043417076\n" +
            "History:1099411424\n" +
            "Sport:553494815\n" +
            "Horror:1521898824\n" +
            "Western:357000241\n" +
            "Documentary:329026077\n" +
            "Music:558432575\n" +
            "War:493219896\n"],
        [2011,
            "Action:12213396143\n" +
            "Sci-Fi:4735540330\n" +
            "Adventure:13247235016\n" +
            "Family:7702653911\n" +
            "Fantasy:8534340915\n" +
            "Mystery:4549336984\n" +
            "Drama:8280681433\n" +
            "Romance:4235246205\n" +
            "Thriller:6125049864\n" +
            "Animation:4684173702\n" +
            "Comedy:11281107076\n" +
            "Crime:2736563646\n" +
            "Sport:1073313408\n" +
            "Music:1037286503\n" +
            "Musical:1580823549\n" +
            "Western:420546928\n" +
            "Horror:1239854799\n" +
            "War:198214524\n" +
            "Biography:475917249\n" +
            "Documentary:171539049\n" +
            "History:229839514\n" +
            "Short:41644475\n" ],
        [2012,
            "Action:13334619088\n" +
            "Sci-Fi:7270810220\n" +
            "Adventure:14243421654\n" +
            "Thriller:8422670826\n" +
            "Drama:11375380288\n" +
            "Fantasy:7532226467\n" +
            "Animation:4875798752\n" +
            "Comedy:11410085226\n" +
            "Family:5678928389\n" +
            "Romance:4611471411\n" +
            "Mystery:2153646336\n" +
            "Sport:700440391\n" +
            "Musical:937610736\n" +
            "Western:425368238\n" +
            "War:1164991309\n" +
            "Crime:2109480111\n" +
            "Horror:1820162969\n" +
            "Biography:806835278\n" +
            "History:1475385350\n" +
            "Music:665969644\n" +
            "Documentary:124695194\n" +
            "Short:23695388\n"],
        [2013,
            "Action:13220988646\n" +
            "Sci-Fi:8885627569\n" +
            "Adventure:14847639135\n" +
            "Animation:5574382372\n" +
            "Comedy:10661263966\n" +
            "Family:6343514499\n" +
            "Fantasy:8176903352\n" +
            "Musical:1280802282\n" +
            "Crime:5826115972\n" +
            "Drama:9312755709\n" +
            "Thriller:7895255391\n" +
            "Horror:2143923616\n" +
            "Biography:1842205161\n" +
            "Romance:2329713249\n" +
            "Mystery:2067863090\n" +
            "Sport:843859024\n" +
            "Western:350640584\n" +
            "History:441448662\n" +
            "War:513806687\n" +
            "Documentary:100850949\n" +
            "Music:101468217\n"],
        [2014,
            "Action:17428611304\n" +
            "Sci-Fi:11614622413\n" +
            "Adventure:16787130908\n" +
            "Fantasy:6674640186\n" +
            "Comedy:11176894469\n" +
            "Drama:10750115410\n" +
            "Family:6441412627\n" +
            "Romance:4005368442\n" +
            "Thriller:8285474574\n" +
            "Animation:3903657096\n" +
            "Crime:4218161719\n" +
            "Biography:1676975885\n" +
            "War:1757385653\n" +
            "Music:1089843763\n" +
            "Musical:1070749645\n" +
            "Mystery:2520741100\n" +
            "History:940528219\n" +
            "Horror:1211371358\n" +
            "Sport:406871492\n" +
            "Western:87189756\n" +
            "Documentary:34012261\n"],
        [2015,"Action:19150554802\n" +
        "Sci-Fi:11345339366\n" +
        "Adventure:19898679729\n" +
        "Crime:5691715043\n" +
        "Thriller:10875491462\n" +
        "Animation:4501410900\n" +
        "Comedy:11906724596\n" +
        "Family:6144813192\n" +
        "Drama:10368740573\n" +
        "Fantasy:6350305921\n" +
        "Romance:3429616197\n" +
        "Western:751655435\n" +
        "Music:975554178\n" +
        "Horror:1240566346\n" +
        "Mystery:2118260697\n" +
        "Musical:333079941\n" +
        "Biography:1573146179\n" +
        "History:1170794771\n" +
        "Sport:521522319\n" +
        "War:463521981\n" +
        "Documentary:103622475\n" +
        "Reality-TV:68782475\n"],
        [2016,
            "Action:17621419587\n" +
            "Sci-Fi:8622595855\n" +
            "Adventure:17678792159\n" +
            "Animation:8174165365\n" +
            "Comedy:13068725322\n" +
            "Family:9548400662\n" +
            "Fantasy:10814888966\n" +
            "Crime:4230662091\n" +
            "Mystery:3758163556\n" +
            "Drama:10584294739\n" +
            "Musical:3070123492\n" +
            "Romance:4545597047\n" +
            "Music:635316787\n" +
            "Thriller:6086624748\n" +
            "Horror:1838341309\n" +
            "Biography:1584812744\n" +
            "Sport:522060728\n" +
            "History:1041543418\n" +
            "War:799072719\n" +
            "Western:225276463\n" +
            "Documentary:74402331\n"],
        [2017,
            "Action:19013870937\n" +
            "Sci-Fi:11744585403\n" +
            "Adventure:19375357556\n" +
            "Fantasy:14038250858\n" +
            "Family:7242768210\n" +
            "Musical:2573486314\n" +
            "Romance:3222792686\n" +
            "Crime:5719734617\n" +
            "Thriller:10514111963\n" +
            "Animation:4773440352\n" +
            "Comedy:11736513904\n" +
            "Drama:11201994419\n" +
            "War:2994665099\n" +
            "Mystery:4009324022\n" +
            "Horror:2945897774\n" +
            "History:1406877694\n" +
            "Biography:1089188778\n" +
            "Sport:818997237\n" +
            "Music:675747317\n" +
            "Western:192880916\n" +
            "Documentary:26289378\n"],
        [2018,
            "Action:19416158305\n" +
            "Sci-Fi:15226999395\n" +
            "Adventure:19731802907\n" +
            "Animation:4634194121\n" +
            "Comedy:12607584809\n" +
            "Family:6442683000\n" +
            "Fantasy:7575009452\n" +
            "Biography:2178694150\n" +
            "Drama:10501273418\n" +
            "Music:1747883662\n" +
            "Thriller:7129126094\n" +
            "War:867705111\n" +
            "Mystery:3038498209\n" +
            "Sport:969180030\n" +
            "Horror:3154940350\n" +
            "Romance:3354873767\n" +
            "Musical:1815608211\n" +
            "Crime:2838029265\n" +
            "History:809956323\n" +
            "Documentary:124741363\n"],
        [2019,
            "Action:17855606550\n" +
            "Sci-Fi:10619476125\n" +
            "Adventure:21928432307\n" +
            "Drama:17080644676\n" +
            "Animation:7774310370\n" +
            "Family:10735458015\n" +
            "Fantasy:14052778815\n" +
            "Musical:4702091541\n" +
            "Comedy:13146526544\n" +
            "Crime:4071710083\n" +
            "Thriller:8700215439\n" +
            "Romance:3827421590\n" +
            "Horror:2739955345\n" +
            "History:1547096162\n" +
            "Mystery:2661488532\n" +
            "War:786721883\n" +
            "Sport:594667604\n" +
            "Biography:1118176730\n" +
            "Music:423930634\n"],
        [2020,
            "Action:4155510154\n" +
            "Sci-Fi:1311030962\n" +
            "Drama:3578225309\n" +
            "History:621696910\n" +
            "War:685562554\n" +
            "Adventure:2731036947\n" +
            "Animation:1563489040\n" +
            "Fantasy:2708391716\n" +
            "Thriller:2409084675\n" +
            "Comedy:3136886596\n" +
            "Crime:1118577604\n" +
            "Family:2209673575\n" +
            "Horror:567200680\n" +
            "Mystery:604326724\n" +
            "Music:200086240\n" +
            "Musical:176674289\n" +
            "Romance:642335686\n" +
            "Biography:164451428\n" +
            "Sport:76458806\n" +
            "Western:23504011\n" +
            "Documentary:18271692\n" +
            "Short:4853143\n"],
        [2021,
            "Action:11309252452\n" +
            "Sci-Fi:6694401033\n" +
            "Adventure:9200144138\n" +
            "Fantasy:6588523710\n" +
            "Drama:6574882248\n" +
            "History:1147253004\n" +
            "War:953300437\n" +
            "Comedy:5595512421\n" +
            "Thriller:5091522250\n" +
            "Crime:2822740578\n" +
            "Mystery:2231237303\n" +
            "Animation:2604623770\n" +
            "Family:2156644331\n" +
            "Musical:870180721\n" +
            "Horror:1343325424\n" +
            "Sport:268058122\n" +
            "Biography:397420676\n" +
            "Romance:1027816538\n" +
            "Western:146219592\n" +
            "Music:197997433\n" +
            "Short:7658021\n"],
        [2022,
            "Action:13949305645\n" +
            "Sci-Fi:9517072281\n" +
            "Adventure:11724715386\n" +
            "Fantasy:7154720774\n" +
            "Drama:7302155813\n" +
            "Thriller:4798397919\n" +
            "Animation:3069672455\n" +
            "Comedy:6844888244\n" +
            "Crime:3019145732\n" +
            "Family:3440593280\n" +
            "Mystery:2405699087\n" +
            "Romance:1853759064\n" +
            "History:1113950532\n" +
            "War:783027404\n" +
            "Biography:509360232\n" +
            "Music:550997821\n" +
            "Horror:1565091114\n" +
            "Sport:151552862\n" +
            "Musical:213697123\n" +
            "Documentary:151693395\n" +
            "Western:9464198\n"],
        [2023,
            "Action:9621081318\n" +
            "Sci-Fi:5414681027\n" +
            "Adventure:13701062440\n" +
            "Comedy:8854470809\n" +
            "Fantasy:8104333074\n" +
            "Animation:4464127070\n" +
            "Family:4892650768\n" +
            "Biography:1810074255\n" +
            "Drama:5260326160\n" +
            "History:1898406630\n" +
            "Crime:2841072591\n" +
            "Mystery:2596941813\n" +
            "Thriller:5861524233\n" +
            "Musical:1888528294\n" +
            "Romance:2195513599\n" +
            "Horror:2558340648\n" +
            "War:773278833\n" +
            "Sport:725949893\n" +
            "Documentary:317476813\n" +
            "Music:368003190\n" +
            "Western:157026901\n"],
        [2024,
            "Action:3711887797\n" +
            "Sci-Fi:2277260338\n" +
            "Adventure:4392694260\n" +
            "Animation:2086011574\n" +
            "Comedy:3124277276\n" +
            "Drama:3224064693\n" +
            "Family:1876840118\n" +
            "Fantasy:2705969785\n" +
            "Thriller:2442175601\n" +
            "Crime:685315256\n" +
            "Biography:271560552\n" +
            "Music:277963944\n" +
            "Musical:108111231\n" +
            "Horror:495938603\n" +
            "Mystery:361216091\n" +
            "Romance:358298163\n" +
            "Sport:266973683\n" +
            "War:40665801\n" +
            "History:94638858\n" +
            "Western:19077748\n" +
            "Documentary:37135298"]];
    const yearContent = content.find(item => item[0] === year);
    const secondElement = yearContent ? yearContent[1] : null;
    if (secondElement) {
        var data = [];
        var row = secondElement.split("\n");
        for(var i =0;i<row.length-1;i++){
            var genre = row[i].split(":")[0];
            var index = row[i].split(":")[1];
            data.push({ value: index, name: genre });}
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
createPieChart();

