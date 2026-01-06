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

import katech from "assets/img/icons/katech_2.png";
import connect from "assets/img/icons/connect.png";
import domestic from "assets/img/icons/korea.png";
import oversea from "assets/img/icons/world.png";

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

// // Chart.js global options
// function chartOptions() {
//   // Options
//   var options = {
//     defaults: {
//       global: {
//         responsive: true,
//         maintainAspectRatio: false,
//         defaultColor: mode === "dark" ? colors.gray[700] : colors.gray[600],
//         defaultFontColor: mode === "dark" ? colors.gray[700] : colors.gray[600],
//         defaultFontFamily: fonts.base,
//         defaultFontSize: 13,
//         layout: {
//           padding: 0,
//         },
//         legend: {
//           display: false,
//           position: "bottom",
//           labels: {
//             usePointStyle: true,
//             padding: 16,
//           },
//         },
//         elements: {
//           point: {
//             radius: 0,
//             backgroundColor: colors.theme["primary"],
//           },
//           line: {
//             tension: 0.4,
//             borderWidth: 4,
//             borderColor: colors.theme["primary"],
//             backgroundColor: colors.transparent,
//             borderCapStyle: "rounded",
//           },
//           rectangle: {
//             backgroundColor: colors.theme["warning"],
//           },
//           arc: {
//             backgroundColor: colors.theme["primary"],
//             borderColor: mode === "dark" ? colors.gray[800] : colors.white,
//             borderWidth: 4,
//           },
//         },
//         tooltips: {
//           enabled: true,
//           mode: "index",
//           intersect: false,
//         },
//       },
//       doughnut: {
//         cutoutPercentage: 50,
//         legendCallback: function (chart) {
//           var data = chart.data;
//           var content = "";

//           data.labels.forEach(function (label, index) {
//             var bgColor = data.datasets[0].backgroundColor[index];

//             content += '<span class="chart-legend-item">';
//             content +=
//               '<i class="chart-legend-indicator" style="background-color: ' +
//               bgColor +
//               '"></i>';
//             content += label;
//             content += "</span>";
//           });

//           return content;
//         },
//       },
//     },
//   };

//   // yAxes
//   Chart.scaleService.updateScaleDefaults("linear", {
//     gridLines: {
//       borderDash: [2],
//       borderDashOffset: [2],
//       color: mode === "dark" ? colors.gray[900] : colors.gray[300],
//       drawBorder: false,
//       drawTicks: false,
//       lineWidth: 0,
//       zeroLineWidth: 0,
//       zeroLineColor: mode === "dark" ? colors.gray[900] : colors.gray[300],
//       zeroLineBorderDash: [2],
//       zeroLineBorderDashOffset: [2],
//     },
//     ticks: {
//       beginAtZero: true,
//       padding: 10,
//       callback: function (value) {
//         if (!(value % 10)) {
//           return value;
//         }
//       },
//     },
//   });

//   // xAxes
//   Chart.scaleService.updateScaleDefaults("category", {
//     gridLines: {
//       drawBorder: false,
//       drawOnChartArea: false,
//       drawTicks: false,
//     },
//     ticks: {
//       padding: 20,
//     },
//   });

//   return options;
// }

export const chartOptions = {
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

// Chart.js scale defaults initializer
export const initChartScales = (Chart) => {
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
};

// Parse global options
export const parseOptions = (parent, options) => {
  for (var item in options) {
    if (typeof options[item] !== "object") {
      parent[item] = options[item];
    } else {
      parseOptions(parent[item], options[item]);
    }
  }
};

// 데이터포털 가입자 현황
export const chartExample1 = {
  options: {
    scales: {
      xAxes: [{
        offset: true,
      }],			
			yAxes: [
				{
					id: "y-left",	// 월별
					position: "left",
          ticks: { beginAtZero: true, stepSize: 5},
					scaleLabel: {
						display: true,
						labelString: "월별 가입자 수",
					},
				},
				{
					id: "y-right",	// 누적
					position: "right",
          ticks: { beginAtZero: true, stepSize: 100 },
					gridLines: {
						drawOnChartArea: false, // 왼쪽 축 grid와 겹치지 않게
					},
					scaleLabel: {
						display: true,
						labelString: "누적 가입자 수",
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
          content += yLabel + '명';
          return content;
        },
      },
    },
  },


  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
				type: 'bar',
        label: "월별 가입자 수",
        data: [10, 7, 7, 9, 17, 20, 9, 15 ,28 ,16 ,16 ,10],
				borderWidth: 3,
				yAxisID: 'y-left',
				maxBarThickness: 30,
				backgroundColor: '#11cdef',
      },
      {
				type: 'line',
        label: "누적 가입자 수",
        data: [571, 578, 585, 594, 611, 631, 640, 655, 683, 699, 715, 725],
				borderWidth: 3,
				yAxisID: 'y-right',
      },
    ],
  },
};

// 데이터포털 방문자 현황
export const chartExample2 = {
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
          content += yLabel + '명';
          return content;
        },
      },
    },
  },
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "방문자 수",
        data: [192, 182, 192, 166, 265, 221, 274, 240, 220, 184, 123, 138],
				borderWidth: 3,
      },
    ],
  },
};

// 데이터포털 페이지뷰 현황
export const chartExample3 = {
// 데이터포털 페이지뷰 현황
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value) {
              if (!(value % 100)) {
                //return '$' + value + 'k'
                return value.toLocaleString();
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
          content += yLabel.toLocaleString() + '건';
          return content;
        },
      },
    },
  },
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "이벤트: 페이지 뷰",
        data: [5260, 2625, 2958, 2351, 3621, 4148, 10542, 10442, 11124, 8481, 7026, 10637],
				borderWidth: 3,
      },
    ],
  },
};

// 데이터포털 이벤트 발생 현황
export const chartExample4 = {
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                //return '$' + value + 'k'
                return value.toLocaleString();
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
          content += yLabel.toLocaleString() + '건';
          return content;
        },
      },
    },
  },
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "이벤트 발생 수",
        data: [1986, 814, 921, 714, 1054, 1340, 3193, 3989, 3295, 2637, 1994, 3950],
				borderWidth: 3,
      },
    ],
  },
};

// 데이터포털 가입자 현황(일반/기관)
export const chartExample5 = {
  options: {
    cutoutPercentage: 55, 
    legend: {
      display: true,
			position: "right",
    },		
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.labels[item.index]|| "";
          var value = data.datasets[item.datasetIndex].data[item.index];
          return label + ': ' + value + "명";
        },
      },
    },
  },
  data: {
    labels: ["일반", "기관"],
    datasets: [
      {
        label: "가입자 수",
        data: [338, 387],
        backgroundColor: ["#739BE1", "#5050FF"],
				cutoutPercentage: 30,
      },
    ],
  },
};

// 기관 가입자 현황
export const chartExample6 = {
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
          content += yLabel + '명';
          return content;
        },
      },
    },
  },
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "방문자 수",
        data: [192, 182, 192, 166, 265, 221, 274, 240, 220, 184, 123, 138],
				borderWidth: 2,
      },
    ],
  },
};

// 데이터포털 이용기관
export const chartExample7 = {
	// callback: {
  // 	getWordColor: word => word.value > 20 ? "blue" : "red",
	// },
  options: {
		rotations: 2,
		rotationAngles: [-90, 0],
		fontSizes: [20, 70],
  },
  words: [
  {
    "text": "도로교통공단",
    "value": 176
  },
  {
    "text": "한국자동차연구원",
    "value": 33
  },
  {
    "text": "대구디지털혁신진흥원",
    "value": 21
  },
  {
    "text": "기타",
    "value": 20
  },
  {
    "text": "모비젠",
    "value": 16
  },
  {
    "text": "엑세스랩",
    "value": 4
  },
  {
    "text": "데이터쿡",
    "value": 4
  },
  {
    "text": "(주)유니크",
    "value": 4
  },
  {
    "text": "에스유엠",
    "value": 4
  },
  {
    "text": "FutureDrive",
    "value": 3
  },
  {
    "text": "(주)제타모빌리티",
    "value": 2
  },
  {
    "text": "TASKING Korea Inc",
    "value": 2
  },
  {
    "text": "한국정보통신기술협회",
    "value": 2
  },
  {
    "text": "한국인터넷진흥원",
    "value": 2
  },
  {
    "text": "위베어소프트",
    "value": 2
  },
  {
    "text": "다온",
    "value": 2
  },
  {
    "text": "국민대학교",
    "value": 2
  },
  {
    "text": "서울대학교",
    "value": 2
  },
  {
    "text": "에스지에이솔루션즈",
    "value": 2
  },
  {
    "text": "한국생산기술연구원",
    "value": 2
  },
  {
    "text": "아주대학교",
    "value": 2
  },
  {
    "text": "CREE",
    "value": 2
  },
  {
    "text": "케이포시큐리티(주)",
    "value": 2
  },
  {
    "text": "dSPACE Korea",
    "value": 2
  },
  {
    "text": "모빌위더스",
    "value": 1
  },
  {
    "text": "대구기계부품연구원",
    "value": 1
  },
  {
    "text": "(주)경창산업",
    "value": 1
  },
  {
    "text": "유한대학교",
    "value": 1
  },
  {
    "text": "연세대학교",
    "value": 1
  },
  {
    "text": "성균관대학교",
    "value": 1
  },
  {
    "text": "울산대학교",
    "value": 1
  },
  {
    "text": "한국항공우주산업진흥협회",
    "value": 1
  },
  {
    "text": "데이터얼라이언스",
    "value": 1
  },
  {
    "text": "(주)대영전기",
    "value": 1
  },
  {
    "text": "AVING News Corp",
    "value": 1
  },
  {
    "text": "한국전자기술연구원",
    "value": 1
  },
  {
    "text": "(주)안랩",
    "value": 1
  },
  {
    "text": "현대자동차",
    "value": 1
  },
  {
    "text": "(주)메텍",
    "value": 1
  },
  {
    "text": "42dot",
    "value": 1
  },
  {
    "text": "위드체인지",
    "value": 1
  },
  {
    "text": "트라이월드홀딩스",
    "value": 1
  },
  {
    "text": "더선한 주식회사",
    "value": 1
  },
  {
    "text": "CJ올리브네트웍스",
    "value": 1
  },
  {
    "text": "레보텍",
    "value": 1
  },
  {
    "text": "씨이랩",
    "value": 1
  },
  {
    "text": "한국자동차산업협동조합",
    "value": 1
  },
  {
    "text": "Korea.kr",
    "value": 1
  },
  {
    "text": "보그워너",
    "value": 1
  },
  {
    "text": "MORAI",
    "value": 1
  },
  {
    "text": "인포뱅크",
    "value": 1
  },
  {
    "text": "한국텍트로닉스(주)",
    "value": 1
  },
  {
    "text": "NC",
    "value": 1
  },
  {
    "text": "BHSN.AI",
    "value": 1
  },
  {
    "text": "(주)씨오알엔",
    "value": 1
  },
  {
    "text": "곳간로지스(주)",
    "value": 1
  },
  {
    "text": "고려대학교",
    "value": 1
  },
  {
    "text": "명지전문대학교",
    "value": 1
  },
  {
    "text": "MDS테크",
    "value": 1
  },
  {
    "text": "(주)이엘일렉트릭",
    "value": 1
  },
  {
    "text": "경북대학교",
    "value": 1
  },
  {
    "text": "OPENUP",
    "value": 1
  },
  {
    "text": "차지인",
    "value": 1
  },
  {
    "text": "㈜금룡테크",
    "value": 1
  },
  {
    "text": "(주)대영채비",
    "value": 1
  },
  {
    "text": "(주)이래오토모티브시스템",
    "value": 1
  },
  {
    "text": "모티",
    "value": 1
  },
  {
    "text": "대구가톨릭대학교",
    "value": 1
  },
  {
    "text": "상상할수없는",
    "value": 1
  },
  {
    "text": "기아자동차",
    "value": 1
  },
  {
    "text": "한국기계연구원",
    "value": 1
  },
  {
    "text": "deepmine",
    "value": 1
  },
  {
    "text": "Nota AI",
    "value": 1
  },
  {
    "text": "(주)씨티알모빌리티",
    "value": 1
  },
  {
    "text": "㈜스패로우",
    "value": 1
  },
  {
    "text": "ETAS",
    "value": 1
  },
  {
    "text": "트리즈엔지니어링",
    "value": 1
  },
  {
    "text": "한림기계(주)",
    "value": 1
  },
  {
    "text": "(주)맵퍼스",
    "value": 1
  },
  {
    "text": "(주)라스컴",
    "value": 1
  },
  {
    "text": "(재)대구테크노파크(대구TP)",
    "value": 1
  },
  {
    "text": "컬처메이커스",
    "value": 1
  },
  {
    "text": "IntrepidCS",
    "value": 1
  },
  {
    "text": "(주)퀀텀하이텍",
    "value": 1
  },
  {
    "text": "HL만도",
    "value": 1
  },
  {
    "text": "퓨전월드와이드",
    "value": 1
  },
  {
    "text": "이노뎁",
    "value": 1
  },
  {
    "text": "(주)아이스펙",
    "value": 1
  },
  {
    "text": "규리넷",
    "value": 1
  },
  {
    "text": "레보랩",
    "value": 1
  },
  {
    "text": "스프링클라우드",
    "value": 1
  }
]
};

// 데이터 보유 현황
export const chartExample8 = {
  data1: [
          { img: katech, title: "보유 데이터", desc: "65건" },
          { img: connect, title: "연동 데이터", desc: "31건" },
          { img: domestic, title: "국내 데이터", desc: "12,113건" },
          { img: oversea, title: "해외 데이터", desc: "38,469건" },
          ],
  data2: [
          { img: katech, title: "총 보유량", desc: "65건" },
          { img: connect, title: "연동 데이터", desc: "31건" },
          { img: domestic, title: "국내 데이터", desc: "12,113건" },
          { img: oversea, title: "해외 데이터", desc: "38,469건" },
          ]
};

// 수집데이터 분류 현황
export const chartExample9 = {
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
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "수집데이터",
          data: [2391, 1940, 1464, 1973, 3924, 3632, 1453, 1561, 2345, 2987, 3100, 4234],
          maxBarThickness: 20,
          backgroundColor: "#ced4da",
          maxBarThickness: 30,
        },
        {
          label: "분류데이터",
          data: [382, 293, 1030, 1090, 1030, 1310, 1040, 1090, 1340, 1580, 1620, 1980],
          maxBarThickness: 20,
          backgroundColor: "#5e72e4",
          maxBarThickness: 30,
        },        
      ],
    };
  },
  data2: (canvas) => {  
    return {
    // 해외
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "수집데이터",
          data: [3291, 2093, 4045, 9215, 4016, 6428, 3167, 6389, 4234, 5021, 6123, 7345],
          maxBarThickness: 20,
          backgroundColor: "#ced4da",
          maxBarThickness: 30,
        },
        {
          label: "분류데이터",
          data: [908, 1082, 1460, 1700, 1045, 2064, 904, 1084, 1340, 1580, 1620, 1980],
          maxBarThickness: 20,
          backgroundColor: "#11cdef",       
          maxBarThickness: 30,   
        },        
      ],
    };
  },
};

// 정보자료(데이터) 활용 현황
export const chartExample10 = {
  options: {
    scales: {
      yAxes: [
        {
          // stacked: true,
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
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "조회 수",
          data: [2391, 1940, 1464, 1973, 3924, 3632, 1453, 1561, 2345, 2987, 3100, 4234],
          // borderWidth: 3,
        },    
      ],
    };
  },
  data2: (canvas) => {  
    return {
    // 해외 
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "다운로드 수",
          data: [3291, 2093, 4045, 9215, 4016, 6428, 3167, 6389, 4234, 5021, 6123, 7345],
          // borderWidth: 3,
        },       
      ],
    };
  },
  data3: (canvas) => {  
    return {
    // 해외
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "공유 수",
          data: [3291, 2093, 4045, 9215, 4016, 6428, 3167, 6389, 4234, 5021, 6123, 7345],
          borderWidth: 3,
        },   
      ],
    };
  },  
};

// 정보자료(API) 제공 현황
export const chartExample11 = {
  options: {
    cutoutPercentage: 55, 
    legend: {
      display: true,
			position: "right",
    },		
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.labels[item.index]|| "";
          var value = data.datasets[item.datasetIndex].data[item.index];
          return label + ': ' + value + "건";
        },
      },
    },
  },
  data: {
    labels: ["데이터", "서비스", "자동차산업특화", "AI/알고리즘", "기타(관리)"],
    datasets: [
      {
        label: "가입자 수",
        data: [11, 5, 43, 17, 8],
        backgroundColor: ["#FA6868", "#FACE68","#5A9CB5","#FAAC68","#607B8F"],
				cutoutPercentage: 30,
      },
    ],
  },
};

// modules.exports = {
//   chartOptions, // used inside src/views/Index.js
//   parseOptions, // used inside src/views/Index.js
//   chartExample1, // used inside src/views/Index.js
// 	chartExample2,
// 	chartExample3,
// 	chartExample4,
// 	chartExample5,
// 	chartExample6,
// 	chartExample7	
// };
