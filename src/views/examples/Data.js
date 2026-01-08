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
// react component that copies the given text inside your clipboard
import classnames from "classnames";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import Chart from "chart.js";
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
	Table,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { 
  chartOptions,
  parseOptions,  
	chartExample9,
	chartExample10,	
	chartExample11,
	chartExample5
} from "variables/charts_2.js";

// 이미지 불러오기
import katech from "assets/img/icons/katech_2.png";
import connect from "assets/img/icons/connect.png";
import domestic from "assets/img/icons/korea.png";
import oversea from "assets/img/icons/world.png";

const Data = (props) => {
	// 데이터 보유 현황
  const [activeNav_1, setActiveNav_1] = useState(1);
  const [chartExample8Data, setChartExample8Data] = useState("data1");
  const toggleNavs_1 = (e, index) => {
    e.preventDefault();
    setActiveNav_1(index);
    setChartExample8Data("data" + index);
  };

	// 수집데이터 보유 현황
  const [activeNav_2, setActiveNav_2] = useState(1);
  const [chartExample9Data, setChartExample9Data] = useState("data1");
  const toggleNavs_2 = (e, index) => {
    e.preventDefault();
    setActiveNav_2(index);
    setChartExample9Data("data" + index);
  };

	// 정보자료(데이터) 활용 현황
  const [activeNav_3, setActiveNav_3] = useState(1);
  const [chartExample10Data, setChartExample10Data] = useState("data1");
  const toggleNavs_3 = (e, index) => {
    e.preventDefault();
    setActiveNav_3(index);
    setChartExample10Data("data" + index);
  };

	if (window.Chart) {
		parseOptions(Chart, chartOptions);
	};

  const userCards = [
    {
      key: "data",
      title: "정보자료(데이터) 개발 수",
      // value: "112건",
      value: "50,678건",
      goal: "200건",
      iconClass: "fas fa-chart-bar",
      iconBgClass: "bg-danger",
      delta: "25,339%",
      deltaDirection: "up",
    },
    {
      key: "download",
      title: "플랫폼 활용(다운로드, API 호출) 건수",
      value: "1,610건",
      goal: "800건",      
      iconClass: "fas fa-chart-pie",
      iconBgClass: "bg-danger",
      delta: "201.25%",
      deltaDirection: "up",
    },
    {
      key: "api",
      title: "정보자료(API) 개발 수",
      value: "85건",
      goal: "83건",      
      iconClass: "fas fa-database",
      iconBgClass: "bg-danger",
      delta: "102%",
      deltaDirection: "up",
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
										<h2 className="text-dark mb-0">데이터 보유 현황</h2>
									</div>
								</Row>
								{/* <div className="col">
									<Nav className="justify-content-end" pills>
										<NavItem>
											<NavLink
												className={classnames("py-2 px-4", {
													active: activeNav_1 === 1,
												})}
												href="#pablo"
												onClick={(e) => toggleNavs_1(e, 1)}
											>
												<span className="d-none d-md-block">유형</span>
												<span className="d-md-none">M</span>
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={classnames("py-2 px-4", {
													active: activeNav_1 === 2,
												})}
												data-toggle="tab"
												href="#pablo"
												onClick={(e) => toggleNavs_1(e, 2)}
											>
												<span className="d-none d-md-block">산업</span>
												<span className="d-md-none">W</span>
											</NavLink>
										</NavItem>
									</Nav>
								</div> */}
							</CardHeader>
							<CardBody>
  							<Row className="align-items-stretch">
										{[
											{ img: katech, title: "보유 데이터", desc: "65건" },
											{ img: connect, title: "연동 데이터", desc: "31건" },
											{ img: domestic, title: "국내 데이터", desc: "12,113건" },
											{ img: oversea, title: "해외 데이터", desc: "38,469건" },
											].map((item, idx) => (
										<Col key={idx} lg="3" md="6" className="mb-0 d-flex">
											<Card className="shadow w-100 h-100">
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
										<h2 className="text-dark mb-0">수집데이터 분류 현황</h2>                    
									</div>                  
								</Row>
									<div className="col">
										<Nav className="justify-content-start" pills>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeNav_2 === 1,
													})}
													href="#pablo"
													onClick={(e) => toggleNavs_2(e, 1)}
												>
													<span className="d-none d-md-block">2024</span>
													<span className="d-md-none">o</span>
												</NavLink>
											</NavItem>
										</Nav>
									</div>
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
													<span className="d-none d-md-block">국내</span>
													<span className="d-md-none">o</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeNav_2 === 2,
													})}
													data-toggle="tab"
													href="#pablo"
													onClick={(e) => toggleNavs_2(e, 2)}
												>
													<span className="d-none d-md-block">해외</span>
													<span className="d-md-none">d</span>
												</NavLink>
											</NavItem>
										</Nav>
									</div>
							</CardHeader>
              <CardBody>
                <div className="chart-sm">
                  <Bar
                    data={chartExample9[chartExample9Data]()}
                    options={chartExample9.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
						</Card>
					</Col>									
				</Row>

				<Row className="mt-3">
				{/* 					
					<Col className="mb-5 mb-xl-0" xl="6">
						<Card className="bg-gradient-neutral shadow">	
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">정보자료(데이터) 활용 현황</h2>
									</div>
								</Row>
								<div className="col">
									<Nav className="justify-content-end" pills>
										<NavItem>
											<NavLink
												className={classnames("py-2 px-4", {
													active: activeNav_3 === 1,
												})}
												href="#pablo"
												onClick={(e) => toggleNavs_3(e, 1)}
											>
												<span className="d-none d-md-block">조회</span>
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={classnames("py-2 px-4", {
													active: activeNav_3 === 2,
												})}
												data-toggle="tab"
												href="#pablo"
												onClick={(e) => toggleNavs_3(e, 2)}
											>
												<span className="d-none d-md-block">다운로드</span>
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={classnames("py-2 px-4", {
													active: activeNav_3 === 3,
												})}
												data-toggle="tab"
												href="#pablo"
												onClick={(e) => toggleNavs_3(e, 3)}
											>
												<span className="d-none d-md-block">공유</span>
											</NavLink>
										</NavItem>										
									</Nav>
								</div>
							</CardHeader>
							<CardBody>								
								</Row>
								<div style={{height:"260px"}}>						
									<Line
										data={chartExample10[chartExample10Data]()}
										options={chartExample10.options}
										getDatasetAtEvent={(e) => console.log(e)}
									/>				
								</div>
							</CardBody>
						</Card>
					</Col>	 
					*/}		
					<Col className="mb-5 mb-xl-0" xl="3">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">정보자료(API) 제공 현황</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div style={{height:"260px"}}>						
									<Doughnut
										data={chartExample11.data}
										options={chartExample11.options}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>				
					<Col className="mb-5 mb-xl-0" xl="3">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">정보자료(API) 활용 Top5</h2>
									</div>
								</Row>
							</CardHeader>
              <Table className="align-items-center table-flush table-font-lg" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">API명</th>
                    <th scope="col">제공기관</th>
                    <th scope="col">호출수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ChatGPT AP</td>
                    <td>OpenAI</td>
                    <td>1,172</td>						
                  </tr>
                  <tr>
                    <td>자동차 산업 특화 챗봇</td>
                    <td>한국자동차연구원</td>
                    <td>43</td>						
                  </tr>
                  <tr>
                    <td>Document parsing</td>
                    <td>Upstage</td>
                    <td>13</td>						
                  </tr>
                  <tr>
                    <td>Document OCR</td>
                    <td>Upstage</td>
                    <td>4</td>						
                  </tr>
                  <tr>
                    <td>Embeddings API</td>
                    <td>Upstage</td>
                    <td>4</td>						
                  </tr>																											
                </tbody>
              </Table>
						</Card>
					</Col>			
					<Col className="mb-5 mb-xl-0" xl="3">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">보유데이터 조회 Top5</h2>
									</div>
								</Row>
							</CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">데이터명</th>
                    <th scope="col">제공기관</th>
                    <th scope="col">조회수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>전기차 정밀 충방전시험 데이터</td>
                    <td>엔모션</td>
                    <td>606</td>						
                  </tr>
                  <tr>
                    <td>SKR-EV OBC(충전), OBD(방전) 데이터</td>
                    <td>SK렌터카</td>
                    <td>509</td>						
                  </tr>
                  <tr>
                    <td>전기차 충전인프라(충전기) 데이터</td>
                    <td>차지인</td>
                    <td>288</td>						
                  </tr>
                  <tr>
                    <td>운전자 위험상황 모니터링 데이터</td>
                    <td>한국자동차연구원</td>
                    <td>279</td>						
                  </tr>
                  <tr>
                    <td>배터리 관리 시스템(BMS) 검사 결과 데이터</td>
                    <td>대구디지털혁신진흥원</td>
                    <td>242</td>						
                  </tr>																											
                </tbody>
              </Table>
						</Card>
					</Col>				
					<Col className="mb-5 mb-xl-0" xl="3">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">보유데이터 다운로드 Top5</h2>
									</div>
								</Row>
							</CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">데이터명</th>
										<th scope="col">제공기관</th>										
                    <th scope="col">다운로드 수</th>									
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>전기차 충전인프라(충전기) 데이터</td>
                    <td>차지인</td>
										<td>72</td>
                  </tr>
                  <tr>
                    <td>전기차 정밀 충방전시험 데이터</td>
                    <td>엔모션</td>
										<td>64</td>
                  </tr>
                  <tr>
                    <td>차량 정비 이미지 데이터</td>
                    <td>트라이월드홀딩스</td>
                    <td>58</td>
                  </tr>
                  <tr>
                    <td>융합센서를 활용한 실시간 교통행태정보</td>
                    <td>한국도로교통공단</td>
                    <td>31</td>
                  </tr>
                  <tr>
                    <td>자율주행차 실도로 주행 데이터</td>
                    <td>아주대학교</td>
                    <td>15</td>
                  </tr>																											
                </tbody>
              </Table>
						</Card>
					</Col>																			
				</Row>

{/* 				<Row className="mt-3">			
					<Col className="mb-5 mb-xl-0" xl="4">
						<Card className="bg-gradient-neutral shadow">	
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">보유데이터 조회 Top5</h2>
									</div>
								</Row>
							</CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">데이터명</th>
                    <th scope="col">조회수</th>
                    <th scope="col">바로가기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>전기차 정밀 충방전시험 데이터</td>
                    <td>엔모션</td>
                    <td>606</td>						
                  </tr>
                  <tr>
                    <td>SKR-EV OBC(충전), OBD(방전) 데이터</td>
                    <td>SK렌터카</td>
                    <td>509</td>						
                  </tr>
                  <tr>
                    <td>전기차 충전인프라(충전기) 데이터</td>
                    <td>차지인</td>
                    <td>288</td>						
                  </tr>
                  <tr>
                    <td>운전자 위험상황 모니터링 데이터</td>
                    <td>한국자동차연구원</td>
                    <td>279</td>						
                  </tr>
                  <tr>
                    <td>배터리 관리 시스템(BMS) 검사 결과 데이터</td>
                    <td>대구디지털혁신진흥원</td>
                    <td>242</td>						
                  </tr>																											
                </tbody>
              </Table>
						</Card>
					</Col>					
					<Col className="mb-5 mb-xl-0" xl="4">
						<Card className="bg-gradient-neutral shadow">
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">보유데이터 다운로드 Top5</h2>
									</div>
								</Row>
							</CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">데이터명</th>
										<th scope="col">제공기관</th>										
                    <th scope="col">다운로드 수</th>									
                    <th scope="col">바로가기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>전기차 충전인프라(충전기) 데이터</td>
                    <td>차지인</td>
										<td>72</td>
                    <td>링크</td>						
                  </tr>
                  <tr>
                    <td>전기차 정밀 충방전시험 데이터</td>
                    <td>엔모션</td>
										<td>64</td>
                    <td>링크</td>						
                  </tr>
                  <tr>
                    <td>차량 정비 이미지 데이터</td>
                    <td>트라이월드홀딩스</td>
                    <td>58</td>
                    <td>링크</td>						
                  </tr>
                  <tr>
                    <td>융합센서를 활용한 실시간 기반 교통행태정보 수집</td>
                    <td>한국도로교통공단</td>
                    <td>31</td>
                    <td>링크</td>						
                  </tr>
                  <tr>
                    <td>자율주행차 실도로 주행 데이터</td>
                    <td>아주대학교</td>
                    <td>15</td>
                    <td>링크</td>						
                  </tr>																											
                </tbody>
              </Table>
						</Card>
					</Col>		
					<Col className="mb-5 mb-xl-0" xl="4">
						<Card className="bg-gradient-neutral shadow">	
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">자율주행 학습데이터 보유리스트</h2>
									</div>
								</Row>
							</CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">데이터명</th>
                    <th scope="col">제공기관</th>
                    <th scope="col">바로가기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Multi‑Camera Multi‑Object Tracking</td>
                    <td>42dot</td>
                    <td>링크</td>						
                  </tr>
                  <tr>
                    <td>Argoverse 1 Stereo Dataset</td>
                    <td>Argoverse</td>
                    <td>링크</td>						
                  </tr>
                  <tr>
                    <td>Microsoft Common Objects in Context</td>
                    <td>Microsoft</td>
                    <td>링크</td>						
                  </tr>
                  <tr>
                    <td>Berkeley DeepDrive(BDD) 100K</td>
                    <td>UC 버클리</td>
                    <td>링크</td>						
                  </tr>
                  <tr>
                    <td>Audi Autonomous Driving Dataset</td>
                    <td>Audi</td>
                    <td>링크</td>						
                  </tr>																											
                </tbody>
              </Table>
						</Card>
					</Col>														
				</Row>			 */}					
			</Container>
		</>
	);
};

export default Data;
