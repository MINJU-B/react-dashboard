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
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, HorizontalBar } from "react-chartjs-2";
import GaugeComponent from 'react-gauge-component';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
	Table
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
	chartExample12,
	chartExample13,
	chartExample14,
	chartExample15
} from "variables/charts_2.js";

// 이미지 불러오기
import all from "assets/img/icons/all.png";
import data from "assets/img/icons/data-server.png";
import cloud from "assets/img/icons/cloud-storage.png";
import gpu from "assets/img/icons/gpu.png";
import dr from "assets/img/icons/disaster-recovery.png";

import CPU from "assets/img/icons/computer.png";
import MEM from "assets/img/icons/micro.png";
import DISK from "assets/img/icons/hard-disk.png";
import GPU2 from "assets/img/icons/memory-card.png";


import Header from "components/Headers/Header.js";

const GPUaaS_2 = (props) => {
	if (window.Chart) {
		parseOptions(Chart, chartOptions);
	}

	// 수집데이터 보유 현황
  const [activeNav_2, setActiveNav_2] = useState(1);
  const [chartExample9Data, setChartExample9Data] = useState("data1");
  const toggleNavs_2 = (e, index) => {
    e.preventDefault();
    setActiveNav_2(index);
    setChartExample9Data("data" + index);
  };

	const [activeNav, setActiveNav] = useState(1);
  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
  };	

  const userCards = [
    {
      key: "build",
      title: "장비 구축 건 수",
      value: "8종(74개)",
      goal: "8종",
      iconClass: "fas fa-chart-bar",
      iconBgClass: "bg-danger",
      delta: "100%",
      deltaDirection: "up",
      // deltaText: "Since last month",
    },
    {
      key: "working",
      title: "장비 가동률(%)",
      value: "98.05%",
      goal: "78.4%",      
      iconClass: "fas fa-chart-pie",
      iconBgClass: "bg-danger",
      delta: "125%",
      deltaDirection: "up",
      // deltaText: "Since last week",
    },
    {
      key: "usage",
      title: "장비 이용 기관 수",
      value: "126건",
      goal: "120건",      
      iconClass: "fas fa-database",
      iconBgClass: "bg-danger",
      delta: "105%",
      deltaDirection: "up",
      // deltaText: "Since yesterday",
    },
  ];    

	const data_cap = {
		1 : [
		{ img: all, title: "CPU", desc: "92개" },
		{ img: data, title: "MEMORY", desc: "40개" },
		{ img: cloud, title: "DISK", desc: "35개" },
	],
		2 : [
		{ img: all, title: "CPU", desc: "92개" },
		{ img: data, title: "MEMORY", desc: "40개" },
		{ img: cloud, title: "DISK", desc: "35개" },
	],
		3 : [
		{ img: all, title: "CPU", desc: "92개" },
		{ img: data, title: "MEMORY", desc: "40개" },
		{ img: cloud, title: "DISK", desc: "35개" },
		{ img: cloud, title: "GPU", desc: "35개" },
	],	
};

const usagedata ={
	1 : [//데이터
		{ img: CPU,  title: "CPU",    value: 320, 		now: 3		,unit: "core"},
		{ img: MEM,  title: "Memory", value: 1561.1, 	now: 37.40	,unit: "GB"},
		{ img: DISK, title: "DISK",   value: 7680, 		now: 8		,unit: "TB"},
	],
	2 : [//클라우드
		{ img: CPU,  title: "CPU", 	  value: 1096, 	now: 33.39, unit: "core"},
		{ img: MEM,  title: "Memory", value: 11.00, now: 8.19, 	unit: "TB"},
		{ img: DISK, title: "DISK",   value: 11.85, now: 16.95, unit: "TB"},
		{ img: GPU2, title: "GPU",    value: 12, 	now: 13.2, 	unit: "대"},
	],
	3 : [//GPU
		{ img: CPU,  title: "CPU",    value: 441, 	now: 4,		unit: "core"},
		{ img: MEM,  title: "Memory", value: 5600, 	now: 13.92, unit: "GB"},
		{ img: DISK, title: "DISK",   value: 30137, now: 32.90, unit: "GB"},
		{ img: GPU2, title: "GPU",    value: 9, 	now: 24.6,	unit: "대"},
	],	
}

const selectedData = data_cap[activeNav] || [];
const selectedData_usage = usagedata[activeNav] || [];

	return (
			<>
      <Header title="equipment" subtitle="장비 활용 현황" cards={userCards} />
			{/* <Header/> */}
			{/* Page content */}
      <Container className="mt--8" fluid>
				<Row className="mt-5">
					<Col className="mb-5 mb-xl-0" xl="6">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">장비 보유 현황</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
  							<Row className="flex-nowrap overflow-auto align-items-stretch">
										{[
											{ img: all, title: "All", desc: "74개" },
											{ img: data, title: "Data", desc: "40개" },
											{ img: cloud, title: "Cloud", desc: "17개" },
											{ img: gpu, title: "GPU", desc: "11개"},
											{ img: dr, title: "DR", desc: "6개"},
											].map((item, idx) => (
										<Col key={idx} className="mb-0 d-flex col-5-custom">
											<Card className="shadow w-100 h-90">
        							  <CardBody className="d-flex flex-column align-items-center justify-content-center text-center" >
													{/* 이미지 */}
													<img
														src={item.img}
														alt={item.title}
														style={{ width: "100px", height: "100px" }}
														className="mb-3 mt-2"
													/>

													{/* 텍스트 영역 */}
													<h2 className="mb-1">{item.title}</h2>
													<span className="text-muted text-md">{item.desc}</span>
												</CardBody>
											</Card>
										</Col>
									))}
								</Row>						
							</CardBody>
						</Card>					
					</Col>
					<Col className="mb-5 mb-xl-0" xl="6">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">장비 구축 현황</h2>
									</div>
								</Row>
								<div className="col">
									<Nav className="justify-content-end" pills>
										<NavItem>
											<NavLink
												className={classnames("py-2 px-3", {
													active: activeNav_2 === 1,
												})}
												href="#pablo"
												onClick={(e) => toggleNavs_2(e, 1)}
											>
												<span className="d-none d-md-block">2025</span>
												<span className="d-md-none">o</span>
											</NavLink>
										</NavItem>
									</Nav>
								</div>								
							</CardHeader>
							<CardBody>
								{/* Chart */}
                <div className="chart-sm">
                  <Bar
                    data={chartExample12.data}
                    options={chartExample12.options}
                    getDatasetAtEvent={(e) => console.log(e)}
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
										<h2 className="text-dark mb-0">장비 가동률</h2>
									</div>
								</Row>
								<div className="col">
									<Nav className="justify-content-end" pills>
										<NavItem>
											<NavLink
												className={classnames("py-2 px-3", {
													active: activeNav_2 === 1,
												})}
												href="#pablo"
												onClick={(e) => toggleNavs_2(e, 1)}
											>
												<span className="d-none d-md-block">2025</span>
												<span className="d-md-none">o</span>
											</NavLink>
										</NavItem>
									</Nav>
								</div>										
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className="chart-sm">			
									<Line
										data = {chartExample14.data}
										options = {chartExample14.options}
									></Line>			
								</div>								
							</CardBody>
						</Card>					
					</Col>
					<Col className="mb-5 mb-xl-0" xl="6">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">장비 이용 기관 수</h2>
									</div>
								</Row>
								<div className="col">
									<Nav className="justify-content-end" pills>
										<NavItem>
											<NavLink
												className={classnames("py-2 px-3", {
													active: activeNav_2 === 1,
												})}
												href="#pablo"
												onClick={(e) => toggleNavs_2(e, 1)}
											>
												<span className="d-none d-md-block">2025</span>
												<span className="d-md-none">o</span>
											</NavLink>
										</NavItem>
									</Nav>
								</div>										
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className="chart-sm">			
                  <Bar
                    data={chartExample15.data}
                    options={chartExample15.options}
                  ></Bar>
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
										<h2 className="text-dark mb-0">장비 자원 현황</h2>
									</div>
								</Row>									
								<div className="col">
									<Nav className="justify-content-end" pills>
										<NavItem>
											<NavLink
												className={classnames("py-2 px-3", {
													active: activeNav === 1,
												})}
												href="#pablo"
												onClick={(e) => toggleNavs(e, 1)}
											>
												<span className="d-none d-md-block">DATA</span>
												<span className="d-md-none">M</span>
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={classnames("py-2 px-3", {
													active: activeNav === 2,
												})}
												data-toggle="tab"
												href="#pablo"
												onClick={(e) => toggleNavs(e, 2)}
											>
												<span className="d-none d-md-block">CLOUD</span>
												<span className="d-md-none">W</span>
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={classnames("py-2 px-3", {
													active: activeNav === 3,
												})}
												data-toggle="tab"
												href="#pablo"
												onClick={(e) => toggleNavs(e, 3)}
											>
												<span className="d-none d-md-block">GPU</span>
												<span className="d-md-none">W</span>
											</NavLink>
										</NavItem>										
									</Nav>
								</div>
							</CardHeader>
							<CardBody>
  							<Row className="align-items-stretch">
										{selectedData_usage.map((item, idx) => (
										<Col key={idx} lg="auto" md="6" className="mb-0 d-flex flex-fill">
											<Card className="shadow w-100 h-100">
        							  <CardBody className="d-flex flex-column align-items-center justify-content-center text-center" >
													{/* 이미지 */}
													<img
														src={item.img}
														alt={item.title}
														style={{ width: "130px", height: "130px"}}
														className="mb-2 mt-2"
													/>

													{/* 텍스트 영역 */}
													<h2 className="mb-1 text-xl">{item.title}</h2>
													<span className="text-muted text-lg">{item.value.toLocaleString()}{item.unit}</span>
												</CardBody>
											</Card>
										</Col>
									))}
								</Row>										
							</CardBody>
						</Card>					
					</Col>
					<Col className="mb-5 mb-xl-0" xl="6">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center border-black rounded-sm" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-black mb-0">실시간 자원 사용량</h2>
									</div>
								</Row>
							</CardHeader>
						<CardBody>
  							<Row className="flex-nowrap overflow-auto align-items-stretch">
										{selectedData_usage.map((item, idx) => (										
										<Col key={idx} lg="auto" className="mb-0 d-flex flex-fill">													
											<Card className="shadow w-100 h-100 bg-gradient-default">
												<CardBody className="d-flex flex-column align-items-center justify-content-center text-center" >
													{/* Gauge */}
													<h1 className="text-white mb-0">{item.title}</h1>
													<div>
														<GaugeComponent
															arc={{
																subArcs: chartExample13.options
															}}
															value={item.now}
															style={{ height: "100%", width: "100%" }}																										        
															labels={{
																valueLabel: { formatTextValue: value => item.now + '%' },
															}}														
														/>													
													</div>
												</CardBody>												
											</Card>
										</Col>
									))}
								</Row>	
						</CardBody>
						</Card>					
					</Col>									
				</Row>								
			</Container>
			</>
	);  
}

export default GPUaaS_2;