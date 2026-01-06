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
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, Doughnut} from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  initChartScales,	
	chartExample1,
	chartExample2,
	chartExample3,	
	chartExample4,
	chartExample5,
	chartExample6,
	chartExample7			
} from "variables/charts_2.js";

import Header from "components/Headers/Header.js";
import ReactWordcloud from "react-wordcloud";

const User_2 = (props) => {
  if (window.Chart) {
    parseOptions(Chart, chartOptions);
		initChartScales(Chart);
  }

  const userCards = [
    {
      key: "join",
      title: "데이터포털 가입자 수",
      value: "725명",
      goal: "590명",
      iconClass: "fas fa-chart-bar",
      iconBgClass: "bg-danger",
      delta: "123%",
      deltaDirection: "up",
    },
    {
      key: "visit",
      title: "데이터포털 방문자 수",
      value: "12,166명",
      goal: "1,160명",      
      iconClass: "fas fa-chart-pie",
      iconBgClass: "bg-danger",
      delta: "1,048%",
      deltaDirection: "up",
      // deltaText: "Since last week",
    },
    {
      key: "page_view",
      title: "데이터포털 페이지뷰 수",
      value: "221,841건",
      goal: "25,000건",      
      iconClass: "fas fa-database",
      iconBgClass: "bg-danger",
      delta: "887%",
      deltaDirection: "up",
      // deltaText: "Since yesterday",
    },
    {
      key: "event",
      title: "데이터포털 이벤트 발생 수",
      value: "93,214건",
      goal: "60,000건",      
      iconClass: "fas fa-microchip",
      iconBgClass: "bg-danger",
      delta: "155%",
      deltaDirection: "up",
      // deltaText: "Since last month",
    },
  ];  
  
	return (
		<>
			<Header title="USER" subtitle="플랫폼 사용자 현황" cards={userCards} />
      {/* Page content */}
			<Container className="mt--8" fluid>
				<Row className="mt-5">
					<Col className="mb-5 mb-xl-0" xl="6">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">데이터포털 가입자 현황</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className="chart-sm">
                  <Line
                    data={chartExample1.data}
                    options={chartExample1.options}
                  />									
								</div>
							</CardBody>
						</Card>
					</Col>					
					<Col className="mb-5 mb-xl-0" xl="6">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">데이터포털 방문자 현황</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className="chart-sm">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />											
								</div>
							</CardBody>
						</Card>
					</Col>						
				</Row>
				<Row className="mt-3">
					<Col className="mb-5 mb-xl-0" xl="6">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">데이터포털 페이지뷰</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className="chart-sm">
                  <Line
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />										
								</div>
							</CardBody>
						</Card>
					</Col>					
					<Col className="mb-5 mb-xl-0" xl="6">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">데이터포털 이벤트 현황</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className="chart-sm">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />										
								</div>
							</CardBody>
						</Card>
					</Col>											
				</Row>				
				<Row className="mt-3">
					<Col className="mb-5 mb-xl-0" xl="3">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">데이터포털 가입자 현황</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className="chart">
									<Doughnut
										data={chartExample5.data}
										options={chartExample5.options}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>		
					<Col className="mb-5 mb-xl-0" xl="5">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">기관 가입자 현황</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className="chart">
								</div>
							</CardBody>
						</Card>
					</Col>				
					<Col className="mb-5 mb-xl-0" xl="4">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">데이터포털 이용 기관</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className="chart">
									<ReactWordcloud
										callbacks={chartExample7.callback}
										size={chartExample7.size}
										words={chartExample7.words}
										options={chartExample7.options}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>																		
				</Row>							
			</Container>
		</>
	);
};

export default User_2;