import { useState, memo, useMemo } from "react";
// react component that copies the given text inside your clipboard
import classnames from "classnames";
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
	Table,
  NavItem,
  NavLink,
  Nav,	
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  initChartScales,	
	chartExample5,
	chartExample6,		
	chartExample15,
	chartExample16
} from "variables/charts_2.js";

import Header from "components/Headers/Header.js";
import ReactWordcloud from "react-wordcloud";

const Assets = (props) => {

	const userCards = [
    {
      key: "join",
      title: "플랫폼 등록 기관 수",
      value: "126개",
      goal: "590명",
      iconClass: "fas fa-chart-bar",
      iconBgClass: "bg-danger",
      delta: "-%",
      deltaDirection: "up",
			results: "증가",
			messege: "전년 대비 산출 예정"
    },
    {
      key: "visit",
      title: "API 호출 수",
      value: "1,671건",
      goal: "0",      
      iconClass: "fas fa-chart-pie",
      iconBgClass: "bg-danger",
      delta: "-%",
      deltaDirection: "up",
			results: "증가",
			messege: "신규 지표 (전년 비교 불가)"
      // deltaText: "Since last week",
    },
    {
      key: "page_view",
      title: "데이터 다운로드 수",
      value: "364건",
      goal: "25,000건",      
      iconClass: "fas fa-database",
      iconBgClass: "bg-danger",
      delta: "-%",
      deltaDirection: "up",
			results: "증가",
			messege: "전년 대비 산출 예정"
      // deltaText: "Since yesterday",
    },
    {
      key: "event",
      title: "제공 데이터/API 수",
      value: "50,678건/84건",
      goal: "60,000건",      
      iconClass: "fas fa-microchip",
      iconBgClass: "bg-danger",
      delta: "-%",
      deltaDirection: "up",
			results: "증가",
			messege: "전년 대비 산출 예정"
      // deltaText: "Since last month",
    },
  ];

	return (
		<>
		<Header title="USER" subtitle="플랫폼 사용자 현황" cards={userCards} />
			<Container className="mt--8" fluid>
				<Row className="mt-5">
					<Col className="mb-5 mb-xl-0" xl="6">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">플랫폼 등록 기관 추이</h2>
									</div>
								</Row>
								<div className="col">
								</div>								
							</CardHeader>
							<CardBody>
								<div className="chart">			
								</div>		
							</CardBody>
						</Card>					
					</Col>					
					<Col className="mb-5 mb-xl-0" xl="6">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">API 기반 서비스 활용 추이</h2>
									</div>
								</Row>
								<div className="col">
								</div>								
							</CardHeader>
							<CardBody>
								<div className="chart">			
								</div>		
							</CardBody>
						</Card>						
					</Col>						
				</Row>
				<Row className="mt-5">
					<Col className="mb-5 mb-xl-0" xl="3">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">플랫폼 등록 기관 추이</h2>
									</div>
								</Row>
								<div className="col">
								</div>								
							</CardHeader>
							<CardBody>
								<div className="chart">			
								</div>		
							</CardBody>
						</Card>					
					</Col>					
					<Col className="mb-5 mb-xl-0" xl="3">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">API 기반 서비스 활용 추이</h2>
									</div>
								</Row>
								<div className="col">
								</div>								
							</CardHeader>
							<CardBody>
								<div className="chart">			
								</div>		
							</CardBody>
						</Card>						
					</Col>			
					<Col className="mb-5 mb-xl-0" xl="6">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">API 기반 서비스 활용 추이</h2>
									</div>
								</Row>
								<div className="col">
								</div>								
							</CardHeader>
							<CardBody>
								<div className="chart">			
                  <Bar
                    data={chartExample16.data}
                    options={chartExample16.options}
                  ></Bar>
								</div>		
							</CardBody>
						</Card>						
					</Col>									
				</Row>
			</Container>
		</>
    );
}

export default Assets;