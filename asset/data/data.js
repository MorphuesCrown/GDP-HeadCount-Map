// Fake Employees Raw Data
const Employees = [
    {"name": "Anna", "location": "上海市", "province": "上海市", "lat": 31.231706, "lng": 121.472644, 'group': '021', 'specialist': '3DEXCITE', 'distance': '-'},
    {"name": "BB", "location": "上海市", "province": "上海市", "lat": 31.231706, "lng": 121.472644, 'group': '021', 'specialist': 'CATIA, 3D', 'distance': '-'},
    {"name": "Chris", "location": "上海市", "province": "上海市", "lat": 31.231706, "lng": 121.472644, 'group': '021', 'specialist': 'DELMIA', 'distance': '-'},
    {"name": "Danford", "location": "上海市", "province": "上海市", "lat": 31.231706, "lng": 121.472644, 'group': '001', 'specialist': '3D', 'distance': '-'},
    {"name": "Erika", "location": "南京市", "province": "江苏省", "lat": 32.041544, "lng": 118.767413, 'group': '021', 'specialist': 'DELMIA', 'distance': '-'},
    {"name": "John", "location": "无锡市", "province": "江苏省", "lat": 31.57, "lng": 120.30, 'group': '021', 'specialist': 'DELMIA', 'distance': '-'},
    {"name": "Finka", "location": "青岛市", "province": "山东省", "lat": 36.675807, "lng": 117.000923, 'group': '021', 'specialist': '3D', 'distance': '-'},
    {"name": "Grim", "location": "北京市", "province": "北京市", "lat": 39.904989, "lng": 116.405285, 'group': '021', 'specialist': 'CATIA', 'distance': '-'},
    {"name": "Hibana", "location": "广州市", "province": "广东省", "lat": 23.125178, "lng": 113.280637, 'group': '001', 'specialist': '3D', 'distance': '-'},
    {"name": "Irana", "location": "广州市", "province": "广东省", "lat": 23.125178, "lng": 113.280637, 'group': '021', 'specialist': 'DELMIA', 'distance': '-'},
    {"name": "Jack", "location": "深圳市", "province": "广东省", "lat": 22.547, "lng": 114.085947, 'group': '001', 'specialist': 'CATIA', 'distance': '-'},
    {"name": "Kusumi", "location": "重庆市", "province": "重庆市", "lat": 29.533155, "lng": 106.504962, 'group': '021', 'specialist': 'BIOVIA', 'distance': '-'},
    {"name": "Karim", "location": "杭州市", "province": "浙江省", "lat": 30.287459, "lng": 120.153576, 'group': '006', 'specialist': 'CATIA, 3D', 'distance': '-'},
    {"name": "Brian", "location": "杭州市", "province": "浙江省", "lat": 30.287459, "lng": 120.153576, 'group': '021', 'specialist': 'CATIA, 3D', 'distance': '-'},
]

// GDP Raw Data
const GDP = [
    {"name": "广东省", "GDP": 129118.6, "lng": 113.280637, "lat": 23.125178},
    {"name": "江苏省", "GDP": 122875.6, "lng": 118.767413, "lat": 32.041544},
    {"name": "山东省", "GDP": 87435.1, "lng": 117.000923, "lat": 36.675807},
    {"name": "辽宁省", "GDP": 28975.1, "lng": 123.429096, "lat": 41.796767},
    {"name": "浙江省", "GDP": 77715.4, "lng": 120.153576, "lat": 30.287459},
    {"name": "河北省", "GDP": 42370.4, "lng": 114.502461, "lat": 38.045474},
    {"name": "河南省", "GDP": 61345.1, "lng": 113.665412, "lat": 34.757975},
    {"name": "上海市", "GDP": 44652.8, "lng": 121.472644, "lat": 31.231706},
    {"name": "四川省", "GDP": 56749.8, "lng": 104.065735, "lat": 30.659462},
    {"name": "湖北省", "GDP": 53734.9, "lng": 114.298572, "lat": 30.584355},
    {"name": "湖南省", "GDP": 48670.4, "lng": 112.982279, "lat": 28.19409},
    {"name": "黑龙江省", "GDP": 15901, "lng": 126.642464, "lat": 45.756967},
    {"name": "福建省", "GDP": 53109.9, "lng": 119.306239, "lat": 26.075302},
    {"name": "安徽省", "GDP": 45045, "lng": 117.283042, "lat": 31.86119},
    {"name": "北京市", "GDP": 41611, "lng": 116.405285, "lat": 39.904989},
    {"name": "广西壮族自治区", "GDP": 26300.9, "lng": 108.320004, "lat": 22.82402},
    {"name": "云南省", "GDP": 28954.2, "lng": 102.712251, "lat": 25.040609},
    {"name": "江西省", "GDP": 32074.7, "lng": 115.892151, "lat": 28.676493},
    {"name": "吉林省", "GDP": 13070.2, "lng": 125.3245, "lat": 43.886841},
    {"name": "山西省", "GDP": 25642.6, "lng": 112.549248, "lat": 37.857014},
    {"name": "陕西省", "GDP": 32772.7, "lng": 108.948024, "lat": 34.263161},
    {"name": "重庆市", "GDP": 29129, "lng": 106.504962, "lat": 29.533155},
    {"name": "天津市", "GDP": 16311.3, "lng": 117.190182, "lat": 39.125596},
    {"name": "内蒙古自治区", "GDP": 23158.7, "lng": 111.670801, "lat": 40.818311},
    {"name": "新疆维吾尔自治区", "GDP": 17741.3, "lng": 87.617733, "lat": 43.792818},
    {"name": "贵州省", "GDP": 20164.6, "lng": 106.713478, "lat": 26.578343},
    {"name": "甘肃省", "GDP": 11201.6, "lng": 103.823557, "lat": 36.058039},
    {"name": "海南省", "GDP": 6818.2, "lng": 110.33119, "lat": 20.031971},    
    {"name": "青海省", "GDP": 3610.1, "lng": 101.778916, "lat": 36.623178},
    {"name": "宁夏回族自治区", "GDP": 5069.6, "lng": 106.278179, "lat": 38.46637},
    {"name": "西藏自治区", "GDP": 2132.6, "lng": 91.132212, "lat": 29.660361},
]

// Province Adjacency Table
const ProvinceAdjacency = {
      '北京市': ['北京市', '河北省', '天津市'] ,
      '天津市': ['天津市', '北京市', '河北省'] ,
      '河北省': ['北京市', '河北省', '天津市', '山西省', '内蒙古自治区', '辽宁省', '河南省', '山东省'] ,
      '山西省': ['内蒙古自治区', '山西省', '河北省', '河南省', '陕西省'] ,
      '内蒙古自治区': ['内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '河北省', '山西省', '陕西省', '宁夏回族自治区', '甘肃省'] ,
      '辽宁省': ['内蒙古自治区', '吉林省', '河北省', '辽宁省'] ,
      '吉林省': ['吉林省', '黑龙江省', '辽宁省', '内蒙古自治区'] ,
      '黑龙江省': ['黑龙江省', '吉林省', '内蒙古自治区'] ,
      '上海市': ['上海市', '江苏省', '浙江省'] ,
      '江苏省': ['江苏省', '上海市', '浙江省', '安徽省', '山东省'] ,
      '浙江省': ['浙江省', '上海市', '江苏省', '安徽省', '福建省', '江西省'] ,
      '安徽省': ['安徽省', '浙江省', '江苏省', '山东省', '河南省', '湖北省', '江西省'] ,
      '福建省': ['福建省', '浙江省', '江西省', '广东省', '台湾省'] ,
      '江西省': ['江西省', '湖南省', '福建省', '广东省', '湖北省', '安徽省', '浙江省'] ,
      '山东省': ['山东省', '河北省', '河南省', '安徽省', '江苏省'] ,
      '河南省': ['河南省', '河北省', '山西省', '陕西省', '湖北省', '安徽省', '山东省'] ,
      '湖北省': ['湖北省', '陕西省', '河南省', '安徽省', '江西省', '湖南省', '重庆市'] ,
      '湖南省': ['湖南省', '湖北省', '江西省', '广东省', '广西壮族自治区', '贵州省', '重庆市'] ,
      '广东省': ['广东省', '海南省', '福建省', '江西省','湖南省', '广西壮族自治区', '香港特别行政区', '澳门特别行政区'] ,
      '广西壮族自治区': ['广西壮族自治区', '湖南省', '广东省', '贵州省', '云南省'] ,
      '海南省': ['海南省', '广东省'] ,
      '重庆市': ['重庆市', '四川省', '湖北省', '湖南省', '贵州省', '陕西省'] ,
      '四川省': ['四川省', '重庆市', '云南省', '贵州省', '西藏自治区', '青海省', '甘肃省', '陕西省'] ,
      '贵州省': ['贵州省', '四川省', '重庆市', '湖南省', '广西壮族自治区', '云南省', '四川省'] ,
      '云南省': ['云南省', '贵州省', '广西壮族自治区', '四川省', '西藏自治区'] ,
      '西藏自治区': ['西藏自治区', '云南省', '四川省', '青海省', '新疆维吾尔自治区'] ,
      '陕西省': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '湖北省', '重庆市', '四川省', '山西省', '内蒙古自治区'] ,
      '甘肃省': ['甘肃省', '青海省', '宁夏回族自治区', '陕西省', '四川省', '西藏自治区', '新疆维吾尔自治区'] ,
      '青海省': ['青海省', '甘肃省', '新疆维吾尔自治区', '西藏自治区', '四川省'] ,
      '宁夏回族自治区': ['宁夏回族自治区', '甘肃省', '陕西省', '内蒙古自治区'] ,
      '新疆维吾尔自治区': ['青海省', '甘肃省', '新疆维吾尔自治区', '西藏自治区'],
      '香港特别行政区': ['香港特别行政区', '广东省', '澳门特别行政区'],
      '澳门特别行政区': ['香港特别行政区', '广东省', '澳门特别行政区'],
      '台湾省': ['台湾省', '福建省']
    };

// MEL Employees Raw Data
// Employees = [
//     ${foreach e in feed.entries}
//         {
//             "name": ${e.metas['emp_name']},
//             "location": ${e.metas['actual_work_place']},
//             "province": ${e.metas['emp_location_province']},
//             "lng": ${e.metas['emp_location_lng']},
//             "lat": ${e.metas['emp_location_lat']},
//             "group": ${e.metas['emp_team']},
//             "specialist": ${e.metas['brands']},
//             "distance": "-"
//         }
//     ${/foreach}
// ]

// Calculate total headcounts & national GDP
const total_headcounts = Employees.length
const national_GDP = GDP.reduce((accumulator, p) => {
    return accumulator + p.GDP;
  }, 0);

// Construct GDP data for map visualization with Echarts
const GDP_HC_map = GDP.map((item) => {
    return Object.assign({}, { name: item.name, value: [item.lng, item.lat, item.GDP, 0, (total_headcounts * item.GDP / national_GDP).toFixed(1)]})
});

Employees.forEach(e => {
    let result = GDP_HC_map.filter( item => {
        return item.name == e.province
    })[0]
    result.value[3]++;
});

// Prepare data for series 0
const GDP_map = GDP_HC_map.map(item => {
    return Object.assign({}, { name: item.name, value: [item.value[0], item.value[1], item.value[2], 'GDP']})
})

// prepare data for series 1
const HC_map = GDP_HC_map.map(item => {
    return Object.assign({}, { name: item.name, value: [item.value[0], item.value[1], item.value[3], 'HC']})
})

// Construct Province Table for DataTables
const GDP_HC_DataTable = GDP_HC_map.map(item => {
    return Object.assign({}, {name: item.name, GDP: item.value[2], HeadCounts: item.value[3], HeadCounts_est: item.value[4]});
});

function rankGDP() {
    GDP_HC_DataTable.sort((a, b) => b.GDP - a.GDP);
    for(var i = 0; i < GDP_HC_DataTable.length; i++) {
        GDP_HC_DataTable[i]['Rank'] = i+1;
    }
}

rankGDP();