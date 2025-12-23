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
import { Line, Bar, Doughnut, HorizontalBar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
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
  chartExample10,
  chartExample20,
  chartExample30,
  chartExample40,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample10Data, setChartExample10Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample10Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="text-white mb-0">사용자 방문 현황</h2>
                    <h6 className="mt-2 text-uppercase text-light ls-1 mb-1">
                      월별 방문자 수는 하반기로 갈수록 완만한 증가세를 유지하며, 누적 방문자는 안정적으로 확대되고 있음
                    </h6>
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
                          <span className="d-none d-md-block">Month</span>
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
                          <span className="d-none d-md-block">Week</span>
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
                    data={chartExample10[chartExample10Data]}
                    options={chartExample10.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="mb-0">가입자 현황</h2>
                    <h6 className="mt-2 text-uppercase text-muted ls-1 mb-1">
                      기관 사용자가 전체 가입자의 과반을 차지하며, B2B 중심의 사용자 구조가 유지되고 있음
                    </h6>                    
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* chart */}
                <div className="chart">
                  <Doughnut
                    data={chartExample20.data}
                    options={chartExample20.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="4">
            <Card className="shadow">
              <CardHeader className="border-1">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">기관별 가입자 현황</h3>
                    <h6 className="mt-2 text-uppercase text-muted ls-1 mb-1"> 
                    기업 가입자가 가장 높은 비중을 차지하며, 기관·학교 순으로 사용자 분포가 형성됨</h6>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* chart */}
                <div className="chart">
                  <Bar
                    data={chartExample30.data}
                    options={chartExample30.options}
                  />
                </div>
              </CardBody>              
            </Card>            
          </Col>
          <Col className="mb-5 mb-xl-0" xl="4">
            <Card className="shadow">
              <CardHeader className="border-1">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">MyDisk 사용 현황</h3>
                    <h6 className="mt-2 text-uppercase text-muted ls-1 mb-1">
                      상위 사용자 중심으로 저장소 사용량이 집중되며, 사용자 간 사용 편차가 뚜렷하게 나타남</h6>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* chart */}
                <div className="chart">
                  <HorizontalBar
                    data={chartExample40.data}
                    options={chartExample40.options}
                  />
                </div>
              </CardBody>   
            </Card>
          </Col>                        
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-1">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">이벤트 현황</h3>
                    <h6 className="mt-2 text-uppercase text-muted ls-1 mb-1">
                    이벤트 데이터 분석 결과, 트래픽 증가 대비 사용자 참여도 성장은 제한적이며 인터랙션 유도 전략이 필요</h6>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
              <Col>
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Page view
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          7,026
                        </span>
                      </div>
                      <Col className="col-auto">
                        {/* <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div> */}
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <span className="text-success mr-2">
                            <i className="fa fa-arrow-up" /> 17.46%
                          </span>{" "}
                          <span className="text-nowrap">Since last month</span>
                        </p>                        
                      </Col>
                    </Row>
                    <p className="mt-2 mb-0 text-muted text-sm">
                      <span className="text-nowrap">페이지 조회 수는 전월 대비 증가하며 콘텐츠 접근성이 개선되고 있음</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>

              <Col>
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Scroll
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          1,148
                        </span>
                      </div>
                      <Col className="col-auto">
                        {/* <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div> */}
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <span className="text-success mr-2">
                            <i className="fa fa-arrow-up" /> 3.48%
                          </span>{" "}
                          <span className="text-nowrap">Since last month</span>
                        </p>                        
                      </Col>
                    </Row>
                    <p className="mt-2 mb-0 text-muted text-sm">
                      <span className="text-nowrap">스크롤 수 증가로 사용자의 페이지 체류 및 탐색 행동이 확대됨</span>
                    </p>                    
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          User_Engagement
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          846
                        </span>
                      </div>
                      <Col className="col-auto">
                        {/* <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div> */}
                        <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          <i className="fa fa-arrow-down" /> 13.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p>                      
                      </Col>
                    </Row>
                    <p className="mt-2 mb-0 text-muted text-sm">
                      <span className="text-nowrap">사용자 참여도는 소폭 감소하여, 인터랙션 유도를 위한 개선이 필요함</span>
                    </p>                    
                  </CardBody>
                </Card>
              </Col>
                     
              </CardBody>                 
            </Card>          
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
