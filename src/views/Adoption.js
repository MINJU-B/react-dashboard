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

const Adoption = (props) => {

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
                  <Bar
                    data={chartExample15.data}
                    options={chartExample15.options}
                  ></Bar>
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
				<Row className="mt-5">
					<Col className="mb-5 mb-xl-0" xl="4">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">플랫폼 이용 기관 유형 분포</h2>
									</div>
								</Row>
								<div className="col">
								</div>								
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className="chart" style={{height:"320px"}}>
									<Doughnut
										data={chartExample6.data}
										options={chartExample6.options}
									/>
								</div>
							</CardBody>						
						</Card>				
					</Col>											
					<Col className="mb-5 mb-xl-0" xl="4">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">다운로드 상위 데이터 Top5</h2>
									</div>
								</Row>
								<div className="col">
								</div>								
							</CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col" style={{ fontSize: "18px" }}>데이터명</th>
										<th scope="col" style={{ fontSize: "18px" }}>제공기관</th>										
                    <th scope="col" style={{ fontSize: "18px" }}>다운로드 수</th>									
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontSize: "18px", padding:"17px 24px"}}>전기차 충전인프라(충전기) 데이터</td>
                    <td style={{ fontSize: "18px", padding:"17px 24px"}}>차지인</td>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>72</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "18px", padding:"17px 24px"}}>전기차 정밀 충방전시험 데이터</td>
                    <td style={{ fontSize: "18px", padding:"17px 24px"}}>엔모션</td>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>64</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "18px", padding:"17px 24px"}}>차량 정비 이미지 데이터</td>
                    <td style={{ fontSize: "18px", padding:"17px 24px"}}>트라이월드홀딩스</td>
                    <td style={{ fontSize: "18px", padding:"17px 24px"}}>58</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "18px", padding:"17px 24px"}}>융합센서를 활용한 실시간 교통행태정보</td>
                    <td style={{ fontSize: "18px", padding:"17px 24px"}}>한국도로교통공단</td>
                    <td style={{ fontSize: "18px", padding:"17px 24px"}}>31</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "18px", padding:"17px 24px"}}>자율주행차 실도로 주행 데이터</td>
                    <td style={{ fontSize: "18px", padding:"17px 24px"}}>아주대학교</td>
                    <td style={{ fontSize: "18px", padding:"17px 24px"}}>15</td>
                  </tr>																											
                </tbody>
              </Table>
						</Card>						
					</Col>		
					<Col className="mb-5 mb-xl-0" xl="4">
						<Card className="bg-gradient-neutral shadow">	{/* 차트 배경 색 */}
							<CardHeader className="bg-transparent d-flex align-items-center" style={{ height: "60px" }}>
								<Row>
									<div className="col">
										<h2 className="text-dark mb-0">API 호출 상위 서비스 Top5</h2>
									</div>
								</Row>
								<div className="col">
								</div>								
							</CardHeader>
							<Table className="align-items-center table-flush table-font-lg" responsive>
								<thead className="thead-light">
									<tr>
										<th scope="col" style={{ fontSize: "18px"}}>API명</th>
										<th scope="col" style={{ fontSize: "18px" }}>제공기관</th>
										<th scope="col" style={{ fontSize: "18px" }}>호출수</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>ChatGPT AP</td>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>OpenAI</td>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>1,172</td>						
									</tr>
									<tr>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>자동차 산업 특화 챗봇</td>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>한국자동차연구원</td>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>43</td>						
									</tr>
									<tr>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>Document parsing</td>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>Upstage</td>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>13</td>						
									</tr>
									<tr>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>Document OCR</td>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>Upstage</td>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>4</td>						
									</tr>
									<tr>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>Embeddings API</td>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>Upstage</td>
										<td style={{ fontSize: "18px", padding:"17px 24px"}}>4</td>						
									</tr>																											
								</tbody>
							</Table>
						</Card>						
					</Col>											
				</Row>				
			</Container>
		</>
    );
}

export default Adoption;