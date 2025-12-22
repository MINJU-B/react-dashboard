/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
const Chart = require("chart.js");
//
// Chart extension for making the bars rounded
// Code from: https://codepen.io/jedtrow/full/ygRYgo
//

Chart.elements.Rectangle.prototype.draw = function () {
  var ctx = this._chart.ctx;
  var vm = this._view;
  var left, right, top, bottom, signX, signY, borderSkipped, radius;
  var borderWidth = vm.borderWidth;
  // Set Radius Here
  // If radius is large enough to cause drawing errors a max radius is imposed
  var cornerRadius = 1;

  if (!vm.horizontal) {
    // bar
    left = vm.x - vm.width / 2;
    right = vm.x + vm.width / 2;
    top = vm.y;
    bottom = vm.base;
    signX = 1;
    signY = bottom > top ? 1 : -1;
    borderSkipped = vm.borderSkipped || "bottom";
  } else {
    // horizontal bar
    left = vm.base;
    right = vm.x;
    top = vm.y - vm.height / 2;
    bottom = vm.y + vm.height / 2;
    signX = right > left ? 1 : -1;
    signY = 1;
    borderSkipped = vm.borderSkipped || "left";
  }

  // Canvas doesn't allow us to stroke inside the width so we can
  // adjust the sizes to fit if we're setting a stroke on the line
  if (borderWidth) {
    // borderWidth shold be less than bar width and bar height.
    var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    var halfStroke = borderWidth / 2;
    // Adjust borderWidth when bar top position is near vm.base(zero).
    var borderLeft = left + (borderSkipped !== "left" ? halfStroke * signX : 0);
    var borderRight =
      right + (borderSkipped !== "right" ? -halfStroke * signX : 0);
    var borderTop = top + (borderSkipped !== "top" ? halfStroke * signY : 0);
    var borderBottom =
      bottom + (borderSkipped !== "bottom" ? -halfStroke * signY : 0);
    // not become a vertical line?
    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    }
    // not become a horizontal line?
    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth;

  // Corner points, from bottom-left to bottom-right clockwise
  // | 1 2 |
  // | 0 3 |
  var corners = [
    [left, bottom],
    [left, top],
    [right, top],
    [right, bottom],
  ];

  // Find first (starting) corner with fallback to 'bottom'
  var borders = ["bottom", "left", "top", "right"];
  var startCorner = borders.indexOf(borderSkipped, 0);
  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  }

  // Draw rectangle from 'startCorner'
  var corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (var i = 1; i < 4; i++) {
    corner = cornerAt(i);
    let nextCornerId = i + 1;
    if (nextCornerId === 4) {
      nextCornerId = 0;
    }

    // let nextCorner = cornerAt(nextCornerId);

    let width = corners[2][0] - corners[1][0];
    let height = corners[0][1] - corners[1][1];
    let x = corners[1][0];
    let y = corners[1][1];
    // eslint-disable-next-line
    var radius = cornerRadius;

    // Fix radius being too large
    if (radius > height / 2) {
      radius = height / 2;
    }
    if (radius > width / 2) {
      radius = width / 2;
    }

    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  }

  ctx.fill();
  if (borderWidth) {
    ctx.stroke();
  }
};

var mode = "light"; //(themeMode) ? themeMode : 'light';
var fonts = {
  base: "Open Sans",
};

// Colors
var colors = {
  gray: {
    100: "#f6f9fc",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#8898aa",
    700: "#525f7f",
    800: "#32325d",
    900: "#212529",
  },
  theme: {
    default: "#172b4d",
    primary: "#5e72e4",
    secondary: "#f4f5f7",
    info: "#11cdef",
    success: "#2dce89",
    danger: "#f5365c",
    warning: "#fb6340",
  },
  black: "#12263F",
  white: "#FFFFFF",
  transparent: "transparent",
};

// Methods

// Chart.js global options
function chartOptions() {
  // Options
  var options = {
    defaults: {
      global: {
        responsive: true,
        maintainAspectRatio: false,
        defaultColor: mode === "dark" ? colors.gray[700] : colors.gray[600],
        defaultFontColor: mode === "dark" ? colors.gray[700] : colors.gray[600],
        defaultFontFamily: fonts.base,
        defaultFontSize: 13,
        layout: {
          padding: 0,
        },
        legend: {
          display: false,
          position: "bottom",
          labels: {
            usePointStyle: true,
            padding: 16,
          },
        },
        elements: {
          point: {
            radius: 0,
            backgroundColor: colors.theme["primary"],
          },
          line: {
            tension: 0.4,
            borderWidth: 4,
            borderColor: colors.theme["primary"],
            backgroundColor: colors.transparent,
            borderCapStyle: "rounded",
          },
          rectangle: {
            backgroundColor: colors.theme["warning"],
          },
          arc: {
            backgroundColor: colors.theme["primary"],
            borderColor: mode === "dark" ? colors.gray[800] : colors.white,
            borderWidth: 4,
          },
        },
        tooltips: {
          enabled: true,
          mode: "index",
          intersect: false,
        },
      },
      doughnut: {
        cutoutPercentage: 50,
        legendCallback: function (chart) {
          var data = chart.data;
          var content = "";

          data.labels.forEach(function (label, index) {
            var bgColor = data.datasets[0].backgroundColor[index];

            content += '<span class="chart-legend-item">';
            content +=
              '<i class="chart-legend-indicator" style="background-color: ' +
              bgColor +
              '"></i>';
            content += label;
            content += "</span>";
          });

          return content;
        },
      },
    },
  };

  // yAxes
  Chart.scaleService.updateScaleDefaults("linear", {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: mode === "dark" ? colors.gray[900] : colors.gray[300],
      drawBorder: false,
      drawTicks: false,
      lineWidth: 0,
      zeroLineWidth: 0,
      zeroLineColor: mode === "dark" ? colors.gray[900] : colors.gray[300],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2],
    },
    ticks: {
      beginAtZero: true,
      padding: 10,
      callback: function (value) {
        if (!(value % 10)) {
          return value;
        }
      },
    },
  });

  // xAxes
  Chart.scaleService.updateScaleDefaults("category", {
    gridLines: {
      drawBorder: false,
      drawOnChartArea: false,
      drawTicks: false,
    },
    ticks: {
      padding: 20,
    },
  });

  return options;
}

// Parse global options
function parseOptions(parent, options) {
  for (var item in options) {
    if (typeof options[item] !== "object") {
      parent[item] = options[item];
    } else {
      parseOptions(parent[item], options[item]);
    }
  }
}

// Example 1 of Chart inside src/views/Index.js (Sales value - Card)
let chartExample1 = {
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: colors.gray[900],
            zeroLineColor: colors.gray[900],
          },
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                return "$" + value.toLocaleString() + "k";
              }
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) {
            content += label;
          }

          content += "$" + yLabel + "k";
          return content;
        },
      },
    },
  },
  data1: (canvas) => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Performance",
          data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
        },
      ],
    };
  },
  data2: (canvas) => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Performance",
          data: [0, 20, 5, 25, 10, 30, 15, 40, 40],
        },
      ],
    };
  },
};

// Example 2 of Chart inside src/views/Index.js (Total orders - Card)
let chartExample2 = {
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                //return '$' + value + 'k'
                return value;
              }
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";
          if (data.datasets.length > 1) {
            content += label;
          }
          content += yLabel;
          return content;
        },
      },
    },
  },
  data: {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [25, 20, 30, 22, 17, 29],
        maxBarThickness: 10,
      },
    ],
  },
};

// Example 2 of Chart inside src/views/Index.js (Total orders - Card)
//Data.js 수집데이터 분류 현황
let chartExample3 = {
  options: {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            callback: function (value) {
              if (!(value % 1000)) {
                //return '$' + value + 'k'
                return value.toLocaleString();
              }
            },
          },
        },
      ],
      xAxes: [
        {
          stacked: true
        }
      ]
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";
          if (data.datasets.length > 1) {
            content += label +': ';
          }
          content += yLabel.toLocaleString() +'건';
          return content;
        },
      },
    },
  },
  data1: (canvas) => {
    // 국내
    return {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      datasets: [
        {
          label: "수집데이터",
          data: [2391, 1940, 1464, 1973, 3924, 3632, 1453, 1561],
          maxBarThickness: 20,
          backgroundColor: "#ced4da",
          maxBarThickness: 30,
        },
        {
          label: "분류데이터",
          data: [382, 293, 1030, 1090, 1030, 1310, 1040, 1090],
          maxBarThickness: 20,
          backgroundColor: "#5e72e4",
          maxBarThickness: 30,
        },        
      ],
    };
  },
  data2: (canvas) => {
    // 해외
    return {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      datasets: [
        {
          label: "수집데이터",
          data: [3291, 2093, 4045, 9215, 4016, 6428, 3167, 6389],
          maxBarThickness: 20,
          backgroundColor: "#ced4da",
          maxBarThickness: 30,
        },
        {
          label: "분류데이터",
          data: [908, 1082, 1460, 1700, 1045, 2064, 904, 1084],
          maxBarThickness: 20,
          backgroundColor: "#11cdef",       
          maxBarThickness: 30,   
        },
      ],
    };
  },
};

//Data.js 산업별 데이터 수집 현황
let chartExample4 = {
  options: {
    legend:{
      display: true,
      position: 'right'
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.labels[tooltipItem.index] || "";
          var value =
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] ?? 0;

          return label + ": " + value.toLocaleString() + '건';
        },
      },
    },
  },
  data3: (canvas) => {
    // 국내
    return {
      labels: ["부품", "제조", "판매/정비", "이용", "관제/사고", "미래차", "기타"],
      datasets: [
        {
          label: "국내",
          data: [428, 12, 4122, 2345, 2664, 321, 510],
          backgroundColor: [
            "#1F3A5F", // 딥 네이비 (메인/기준 컬러)
            "#1DA1F2", // 선명한 블루 (정보/진행)
            "#FFC107", // 비비드 옐로우 (강조/핵심)
            "#E91E63", // 핫 핑크 (이슈/포인트)
            "#00BCD4", // 시안 블루 (보조 정보)
            "#4CAF50", // 그린 (성공/정상)
            "#9C27B0"  // 퍼플 (기타/확장)
          ]
        },
      ],
    };
  },
  data4: (canvas) => {
    // 해외
    return {
      labels: ["부품", "제조", "판매/정비", "이용", "관제/사고", "미래차", "기타"],
      datasets: [
        {
          label: "해외",
          data: [2635, 80, 7612, 3667, 13182, 3370, 1429],
          maxBarThickness: 20,
          backgroundColor: [
            "#1F3A5F", // 딥 네이비 (메인/기준 컬러)
            "#1DA1F2", // 선명한 블루 (정보/진행)
            "#FFC107", // 비비드 옐로우 (강조/핵심)
            "#E91E63", // 핫 핑크 (이슈/포인트)
            "#00BCD4", // 시안 블루 (보조 정보)
            "#4CAF50", // 그린 (성공/정상)
            "#9C27B0"  // 퍼플 (기타/확장)
          ]
        },
      ],
    };
  },
};

// 데이터 활용 현황
let chartExample5 = {
  options:{
    legend:{
      display: true
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.labels[tooltipItem.index] || "";
          var value =
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] ?? 0;

          return label + ": " + value.toLocaleString() + '건';
        },
      },
    },    
  },
  data: {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "공유 수",
        data: [25, 20, 30, 22, 17, 29],
        borderColor: "red",
        backgroundColor: "red",
        fill: false,    
        tension: 0,
        borderWidth: 3    
      },
      {
        label: "다운로드 수",
        data: [170, 300, 210, 109, 107, 90],
        borderColor: "blue",
        backgroundColor: "blue",
        fill: false,    
        tension: 0,
        borderWidth: 3     
      },
      {
        label: "조회 수",
        data: [123, 90, 84, 291, 119, 219],
        borderColor: "green",
        backgroundColor: "green",
        fill: false,   
        tension: 0,
        borderWidth: 3      
      },
    ],
  },    
}

//GPU 보유 현황
let chartExample6 = {
  options:{
    legend:{
      display: true
    },
  },
  data:{
    labels: ["A100", "H100", "L40"],
    datasets: [
      {
        label: "보유량",
        data: [19, 24, 57],
        backgroundColor: ["#F5CD19", "#5BE12C", "#11cdef"],
        cutoutPercentage: 70
      },    
    ],
    }
}

//GPUaasS.js gpu별 사용 현황
let chartExample7 = {
  options:[
      {
        limit: 20,
        color: '#5BE12C',
        showTick: true
      },
      {
        limit: 40,
        color: '#F5CD19',
        showTick: true
      },
      {
        limit: 60,
        color: '#F58B19',
        showTick: true
      },
      {
        limit: 100,
        // color: '#5BE12C',
        color: '#EA4228',
        showTick: true
      },
    ]
}

//gpuass.js gpu 누적 시간
let chartExample8 = {
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: colors.gray[900],
            zeroLineColor: colors.gray[900],
          },
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                return value + "h";
              }
            },
          },
        },
      ],
      xAxes: [
        {
          offset: true
        }
      ]
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) {
            content += label + ': ';
          }

          content += yLabel + "h";
          return content;
        },
      },
    },
  },
  data1: (canvas) => {
    return {
      labels: ["12/14", "12/15", "12/16", "12/17", "12/18", "12/19", "12/20", "12/21"],
      datasets: [
        {
          type: "bar",
          label: "주간 사용 시간",
          data: [0, 10, 20, 10, 30, 15, 40, 20, 60],
          maxBarThickness: 30,
          backgroundColor: "#f3a4b5"
        },
        {
          type: "line",
          label: "누적 시간",
          data: [0, 10, 30, 40, 70, 85, 125, 145, 205],
          borderColor: "#8965e0",
          tension: 0,
          borderWidth: 3
        },        
      ],
    };
  },
  data2: (canvas) => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          type: "bar",
          label: "주간 사용 시간",
          data: [10, 20, 10, 30, 15, 40, 20, 60],
          maxBarThickness: 30,
          backgroundColor: "#f3a4b5"
        },
        {
          type: "line",
          label: "누적 시간",
          data: [10, 30, 40, 70, 85, 125, 145, 205],
          borderColor: "#8965e0",
          tension: 0,
          borderWidth: 3
        },        
      ],
    };
  },  
}

//gpuaas.js 실시간 gpu 사용량
let chartExample9 = {
  options: {
    legend: {
      display: true
    },
    responsive: true,
    cornerRadius: 1,
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          callback: function (value) {
            if (!(value % 2)) {
              return value;
            }
          },
        }        
      }]
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = " ";

          if (data.datasets.length > 1) {
            content += label + ": ";
          }

          content += yLabel + "개";
          return content;
        },
      },
    },
  },
  data:{
    labels: [
              "06:00",
              "07:00",
              "08:00",
              "09:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "14:00",
              "15:00",
              "16:00",
              "17:00",
              "18:00",
            ],
    datasets: [
      {
        label: "l40",
        data: [3, 2, 1, 2, 3, 2, 5, 4, 3, 5, 2, 2, 2],
        // backgroundColor: ["#F5CD19", "#5BE12C", "#11cdef"],
        backgroundColor: "#F5CD19",
        maxBarThickness: 30,
        cornerRadius: 1
      },    
      {
        label: "H100",
        data: [2, 2, 1, 3, 2, 5, 4, 3, 5, 2, 2, 3, 1],
        // backgroundColor: ["#F5CD19", "#5BE12C", "#11cdef"],
        backgroundColor: "#5BE12C",
        maxBarThickness: 30,
        cornerRadius: 1
      },    
      {
        label: "A100",
        data: [0, 1, 0, 2, 3, 4, 5, 2, 3, 5, 4, 1, 1],
        // backgroundColor: ["#F5CD19", "#5BE12C", "#11cdef"],
        backgroundColor: "#11cdef",
        maxBarThickness: 30,
        cornerRadius: 1
      },        
    ],
    }
}

// User.js - 사용자 방문 현황
let chartExample10 = {
  options: {
    scales: {
      xAxes: [{
        offset: true,
      }],
      yAxes: [
        {
          gridLines: {
            color: colors.gray[900],
            zeroLineColor: colors.gray[900],
          },
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                return value.toLocaleString() + "명";
              }
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) {
            content += label;
          }

          content += ' ' + yLabel.toLocaleString() + " 명";
          return content;
        },
      },
    },
  },
  // 월별 방문자 현황
  data1: (canvas) => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          type: "bar",
          label: "방문자 수",
          data: [240, 190, 480, 402, 375, 278, 169, 88],
          maxBarThickness: 30,   
          backgroundColor: "#60A5FA"
        },        
        {
          tpye: "line",
          label: "누적 방문자 수",
          data: [240, 430, 910, 1312, 1687, 1965, 2134, 2222],
          tension: 0,
          borderWidth: 3,    
          borderColor: "#6EE7B7"
        },
      ],
    };
  },

  // 주간 방문자 현황
  data2: (canvas) => {
    return {
      labels: ["Oct-3", "Oct-4", "Nov-1", "Nov-2", "Nov-3", "Nov-4", "Dec-1", "Dec-2"],
      datasets: [
        {
          type: 'bar',
          label: "방문자 수",
          data: [57, 31, 38, 31, 30, 68, 59, 124],
          maxBarThickness: 30,   
          backgroundColor: "#60A5FA"          
        },
        {
          type: 'line',
          label: "누적 방문자 수",
          data: [57, 88, 126, 157, 187, 255, 314, 438],
          tension: 0,
          borderWidth: 3,    
          borderColor: "#6EE7B7"          
        },
      ],
    };
  },
};

// Example 2 of Chart inside src/views/Index.js (Total orders - Card)
// User.js - 가입자 현황
let chartExample20 = {
  options: {
    cutoutPercentage: 0, 
    legend: {
      display: true
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.labels[item.index]|| "";
          var value = data.datasets[item.datasetIndex].data[item.index];
          return label + ': ' + value + "%";
        },
      },
    },
  },
  data: {
    labels: ["일반 사용자", "기관 사용자"],
    datasets: [
      {
        label: "Type",
        data: [46.38, 53.62],
        backgroundColor: ["#739BE1", "#5050FF"]
      },
    ],
  },
};

// User.js - 기관별 가입자 현황
let chartExample30 = {
  options: {
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.labels[item.index]|| "";
          var value = data.datasets[item.datasetIndex].data[item.index] || 0;
          
          return label + ': ' + value + "명";
        },
      },
    },
  },
  data: {
    labels: ["기업", "기관", "학교", "기타"],
    datasets: [
      {
      label: "Type",
      data: [417, 166, 86, 51],      
      backgroundColor: ["#4646CD", "#7878FF", "#4CA975", "#E16A93"],
      maxBarThickness: 40,
    }
    ]
  }
}

let chartExample40 = {
  options: {
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.labels[item.index]|| "";
          var value = data.datasets[item.datasetIndex].data[item.index] ?? 0;
          
          return label + ': ' + value + "GB";
        },
      },
    },
  },
  data:{
    labels: ["사용자_1", "사용자_2", "사용자_3", "사용자_4", "사용자_5"],
    datasets: [
      {
        label: "User",
        data: [78, 64, 53, 42, 31],
        backgroundColor: ["#0A82FF", "#28A0FF", "#46BEFF", "#64D6FF", "#5AE0FF"],
        maxBarThickness: 30
      }
    ]
  }
}
module.exports = {
  chartOptions, // used inside src/views/Index.js
  parseOptions, // used inside src/views/Index.js
  chartExample1, // used inside src/views/Index.js
  chartExample2, // used inside src/views/Index.js
  chartExample3, // used inside src/views/Index.js
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7,  
  chartExample8,
  chartExample9,
  chartExample10, 
  chartExample20, 
  chartExample30, 
  chartExample40,   
};
