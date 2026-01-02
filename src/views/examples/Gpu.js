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
import { Line, Bar, Doughnut } from "react-chartjs-2";
import GaugeComponent from 'react-gauge-component';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
	chartExample6,
	chartExample7,
	chartExample8,
	chartExample9
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const GPUaaS = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample8Data, setChartExample8Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample8Data("data" + index);
  };

  const userCards = [
    {
      key: "build",
      title: "장비 구축 건 수",
      value: "8종",
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
      value: "74.56",
      goal: "78.4%",      
      iconClass: "fas fa-chart-pie",
      iconBgClass: "bg-danger",
      delta: "95.1%",
      deltaDirection: "down",
      // deltaText: "Since last week",
    },
    {
      key: "usage",
      title: "장비 이용 기관 수",
      value: "112건",
      goal: "120건",      
      iconClass: "fas fa-database",
      iconBgClass: "bg-danger",
      delta: "93.3%",
      deltaDirection: "down",
      // deltaText: "Since yesterday",
    },
  ];    

  return (
    <>
      <Header title="USER" subtitle="플랫폼 사용자 현황" cards={userCards} />
      {/* Page content */}
      <Container className="mt--7" fluid>
				<Row>
					<Col className="mb-5 mb-xl-0" xl="3">
						<Card className="shadow">
							<CardHeader className="bg-transparent">
								<Row className="align-items-center">
									<div className="col">
										<h2 className="mb-0">GPU 보유 현황</h2>
									</div>              
								</Row>
							</CardHeader>
							<CardBody style={{height:"300px"}}>
								<Doughnut
									data={chartExample6.data}
									options={chartExample6.options}
									// getDatasetAtEvent={(e) => console.log(e)}
								/>
							</CardBody>
						</Card>
					</Col>  
          <Col className="mb-5 mb-xl-0" xl="9">
					<Card className="shadow">
						<CardHeader className="bg-transparent">
						<Row className="align-items-center">
							<div className="col">
								<h2 className="mb-0">GPU별 사용 현황</h2>						
							</div>
						</Row>
						</CardHeader>
						<CardBody>
               <Row>
                <Col md="3">
                  <Card className="text-center">
                      <CardBody className="bg-gradient-default d-flex flex-column align-items-center justify-content-center">
												<div>
													<GaugeComponent
														arc={{
															subArcs: chartExample7.options
														}}
														value={13.04}
														style={{ height: "150%", width: "100%" }}																										        
														labels={{
            									valueLabel: { formatTextValue: value => value + '%' },
														}}
													/>
												</div>
                    		<h2 className="text-white mb-0">Total</h2>
                      </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="text-center">
                      <CardBody className="bg-gradient-default d-flex flex-column align-items-center justify-content-center">
												<div>
													<GaugeComponent
														arc={{
															subArcs: chartExample7.options
														}}
														value={56.52}
														style={{ height: "150%", width: "100%" }}																										        
														labels={{
            									valueLabel: { formatTextValue: value => value + '%' },
														}}
													/>
												</div>
                    		<h2 className="text-white mb-0">NVIDIA A100</h2>
                      </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="text-center">
                      <CardBody className="bg-gradient-default d-flex flex-column align-items-center justify-content-center">
												<div>
													<GaugeComponent
														arc={{
															subArcs: chartExample7.options
														}}
														value={37.78}
														style={{ height: "150%", width: "100%" }}																										        
														labels={{
            									valueLabel: { formatTextValue: value => value + '%' },
														}}
													/>
												</div>
                    		<h2 className="text-white mb-0">NVIDIA H100</h2>
                      </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="text-center">
                      <CardBody className="bg-gradient-default d-flex flex-column align-items-center justify-content-center">
												<div>
													<GaugeComponent
														arc={{
															subArcs: chartExample7.options
														}}
														value={17.39}
														style={{ height: "150%", width: "100%" }}																										        
														labels={{
            									valueLabel: { formatTextValue: value => value + '%' },
														}}
													/>
												</div>
                    		<h2 className="text-white mb-0">NVIDIA L40s</h2>
                    </CardBody>
                  </Card>
                </Col>                                                
              </Row>   
						</CardBody>
					</Card>
					</Col>					
				</Row>
				<Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="6">
						<Card className="shadow">
							<CardHeader className="bg-transparent">
								<Row className="align-items-center">
									<div className="col">
										<h2 className="mb-0">GPU 누적 사용시간</h2>
                    <h6 className="mt-2 stext-uppercase text-muted ls-1 mb-1">
											GPU 누적 사용시간이 주 후반으로 갈수록 가파르게 증가하며, 지속적인 연산 수요 확대가 확인됨</h6>
									</div>              
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
													<span className="d-none d-md-block">Week</span>
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
													<span className="d-none d-md-block">Month</span>
													<span className="d-md-none">W</span>
												</NavLink>
											</NavItem>
										</Nav>
									</div>									
								</Row>
							</CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample8[chartExample8Data]}
                    options={chartExample8.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
						</Card>						
					</Col>					
          <Col className="mb-5 mb-xl-0" xl="6">
						<Card className="shadow">
							<CardHeader className="bg-transparent">
								<Row className="align-items-center">
									<div className="col">
										<h2 className="mb-0">실시간 GPU 사용량</h2>
                    <h6 className="mt-2 text-uppercase text-muted ls-1 mb-1">
											GPU 사용은 오전 후반부터 증가해 정오 전후에 정점을 형성하며, A100과 H100 중심의 고성능 GPU 활용도가 높음
										</h6>
									</div>              
								</Row>
							</CardHeader>
							<CardBody>
								<div className='chart'>
									<Bar
									   data={chartExample9.data}
										 options={chartExample9.options}
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

export default GPUaaS;