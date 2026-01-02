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
import { Line, Bar, Pie } from "react-chartjs-2";
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
  chartExample3,
  chartExample4,  
  chartExample5
} from "variables/charts";

const Icons = () => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample3Data, setChartExample3Data] = useState("data1");  

  const [activeNav_cate, setActiveNav_cate] = useState(3);
  const [chartExample4Data, setChartExample4Data] = useState("data3");  

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample3Data("data" + index);
  }

  const toggleNavs_2 = (e, index) => {
    e.preventDefault();
    setActiveNav_cate(index);
    setChartExample4Data("data" + index);
  };

  const userCards = [
    {
      key: "data",
      title: "정보자료(데이터) 개발 수",
      value: "112건",
      goal: "200건",
      iconClass: "fas fa-chart-bar",
      iconBgClass: "bg-danger",
      delta: "56%",
      deltaDirection: "down",
      // deltaText: "Since last month",
    },
    {
      key: "download",
      title: "정보자료 다운로드 수",
      value: "362건",
      goal: "800건",      
      iconClass: "fas fa-chart-pie",
      iconBgClass: "bg-danger",
      delta: "45.2%",
      deltaDirection: "down",
      // deltaText: "Since last week",
    },
    {
      key: "api",
      title: "정보자료(API) 개발 수",
      value: "83건",
      goal: "85건",      
      iconClass: "fas fa-database",
      iconBgClass: "bg-danger",
      delta: "102%",
      deltaDirection: "up",
      // deltaText: "Since yesterday",
    },
  ]; 

  return (
    <>
      <Header title="USER" subtitle="플랫폼 사용자 현황" cards={userCards} />

      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* DATA */}
        <Row>
          <Col className="mb-5 mb-xl-0" xl="6">
            <Card className="shadow">
              <CardHeader className="bg-transparent" style={{height: "95px"}}>
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="mb-0">보유 데이터 현황</h2>
                    <h6 className="mt-2 text-uppercase text-muted ls-1 mb-1">
                      전체 데이터의 대부분이 이미지 데이터로 구성되어 있으며, 텍스트와 3D 데이터는 상대적으로 소규모 비중을 차지함
                    </h6>                    
                  </div>
                </Row>
              </CardHeader>
              <CardBody style={{height: "300px"}}>
               <Row>
                <Col md="3">
                  <Card className="text-center">
                      <CardBody className="d-flex flex-column align-items-center justify-content-center" style={{height: "250px"}}>
                        <img
                          src={require("../../assets/img/icons/all.png")}
                          alt="sample"
                          style={{ width: "70%"}}
                        />
                        <h2 className="text-muted text-xl pt-3">Total</h2>
                        <h3 className="h5 text-xl">18,747GB</h3>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="text-center">
                      <CardBody className="d-flex flex-column align-items-center justify-content-center" style={{height: "250px"}}>
                        <img
                          src={require("../../assets/img/icons/image.png")}
                          alt="sample"
                          style={{ width: "70%"}}/>
                        <h2 className="text-muted text-xl pt-3">Image</h2>
                        <h3 className="h5 text-xl">8,311GB</h3>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="text-center">
                      <CardBody className="d-flex flex-column align-items-center justify-content-center" style={{height: "250px"}}>
                        <img
                          src={require("../../assets/img/icons/csv.png")}
                          alt="sample"
                          style={{ width: "70%"}}
                        />
                        <h2 className="text-muted text-xl pt-3">Text</h2>
                        <h3 className="h5 text-xl">1,201GB</h3>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="text-center">
                      <CardBody className="d-flex flex-column align-items-center justify-content-center" style={{height: "250px"}}>
                        <img
                          src={require("../../assets/img/icons/3d.png")}
                          alt="sample"
                          style={{ width: "70%"}}
                        />
                        <h2 className="text-muted text-xl pt-3">3D</h2>
                        <h3 className="h5 text-xl">246GB</h3>
                      </CardBody>
                  </Card>
                </Col>                                                
              </Row>                
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="6">
            <Card className="shadow">
              <CardHeader className="bg-transparent" style={{height: "85"}}>
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="text-black mb-0">수집 데이터 분류 현황</h2>  
                    <h6 className="mt-2 text-uppercase text-muted ls-1 mb-1">
                      하반기(8~9월)에 데이터 수집량이 집중되며, 국내 데이터가 전체 수집량의 대부분을 차지함
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
                          <span className="d-none d-md-block">국내</span>
                          <span className="d-md-none">o</span>
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
                          <span className="d-none d-md-block">해외</span>
                          <span className="d-md-none">d</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody style={{height:"300px"}}>
                <div className="chart-sm">
                  <Bar
                    data={chartExample3[chartExample3Data]}
                    options={chartExample3.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>            
          </Col>
        </Row>

        <Row className="mt-5">         
          <Col className="mb-5 mb-xl-0" xl="3">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="mb-0">산업별 데이터 수집 현황</h2>                    
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav_cate === 3,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs_2(e, 3)}
                        >
                          <span className="d-none d-md-block">국내</span>
                          <span className="d-md-none">o</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav_cate === 4,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs_2(e, 4)}
                        >
                          <span className="d-none d-md-block">해외</span>
                          <span className="d-md-none">d</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>                  
                </Row>
              </CardHeader>
              <CardBody style={{height:"380px"}}>
                  <Pie
                    data={chartExample4[chartExample4Data]}
                    options={chartExample4.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
              </CardBody>
            </Card>
          </Col>  
          <Col className="mb-5 mb-xl-0" xl="5">
            <Card className="shadow">
              <CardHeader className="bg-d-flex align-items-center" style={{height:"80px"}}>
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="mb-0">데이터 활용 현황</h2>
                    <h6 className="mt-2 text-uppercase text-muted ls-1 mb-1">
                      데이터 조회는 변동성이 크고, 다운로드와 공유는 상대적으로 안정적인 흐름을 보임
                    </h6>                    
                  </div>
                </Row>
               </CardHeader>
               <CardBody style={{height:"380px"}}>
                <div className="chart">
                  <Line
                    data = {chartExample5.data}
                    options = {chartExample5.options}
                  />
                </div>
               </CardBody>
            </Card>
          </Col>                          
          <Col className="mb-5 mb-xl-0" xl="4">
            <Card className="shadow">
              <CardHeader className="g-transparent border-0 d-flex align-items-center" style={{height:"80px"}}>
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">조회수 Top 10 데이터</h3>               
                  </div>  
                </Row>          
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">데이터명</th>
                    <th scope="col">등록기관</th>
                    <th scope="col">조회수</th>
                    <th scope="col">바로가기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>전기차 정밀 충방전 시험 데이터</td>
                    <td>엔모션</td>
                    <td>579</td>
                    <td>
                      <NavLink href="https://www.bigdata-car.kr/portal/ui/meta/search/fullSearch/detail/index.html?postId=5a4446d7-70d0-4f3b-b063-f1c13adf45dd">
                      링크
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td>자율주행차 실도로 주행 데이터</td>
                    <td>아주대학교</td>
                    <td>512</td>
                    <td>
                      <NavLink href="https://www.bigdata-car.kr/portal/ui/meta/search/fullSearch/detail/index.html?postId=edbb2ee4-7808-44f9-9d1c-020f11cc4664">
                      링크
                      </NavLink>
                    </td>                  
                  </tr>      
                  <tr>
                    <td>차량 정비 이미지 데이터</td>
                    <td>트라이월드홀딩스</td>
                    <td>473</td>
                    <td>
                      <NavLink href="https://www.bigdata-car.kr/portal/ui/meta/search/fullSearch/detail/index.html?postId=97e9d8ac-4d2d-40b0-a92a-b0ea8ff81775">
                      링크
                      </NavLink>
                    </td>    
                  </tr>       
                  <tr>
                    <td>SKR-EV OBC(충전), OBD(주행) 데이터</td>
                    <td>SK렌터카</td>
                    <td>466</td>
                    <td>
                      <NavLink href="https://www.bigdata-car.kr/portal/ui/meta/search/fullSearch/detail/index.html?postId=516236e1-f5f2-43d9-9316-cf2ba95e5f79">
                      링크
                      </NavLink>
                    </td>                   
                  </tr>      
                  <tr>
                    <td>운전자 위험상황 모니터링 데이터</td>
                    <td>한국자동차연구원</td>
                    <td>379</td>
                   <td>
                      <NavLink href="https://www.bigdata-car.kr/portal/ui/meta/search/fullSearch/detail/index.html?postId=c9c5b2e4-45da-46ea-84a8-69ea0992529b">
                      링크
                      </NavLink>
                    </td>                     
                  </tr>                                                           
                </tbody>
              </Table>    
              {/* ⬇️ 테이블 하단 영역 */}
              <div className="d-flex justify-content-end align-items-center px-4 py-1">
                <span className="text-muted cursor-pointer mr-3">&lt; 이전 </span>                  
                <span className="text-muted cursor-pointer">다음 &gt; </span>
              </div>                        
            </Card>          
          </Col>                          
        </Row>
      </Container>
    </>
  );
};

{/* <Col lg="3" md="6">
  <CopyToClipboard
    text={"ni ni-align-center"}
    onCopy={() => setCopiedText("ni ni-align-center")}
  >
    <button
      className="btn-icon-clipboard"
      data-clipboard-text="align-center"
      id="tooltip662352101"
      type="button"
    >
      <div>
        <i className="ni ni-align-center" />
        <span>align-center</span>
      </div>
    </button>
  </CopyToClipboard>
  <UncontrolledTooltip
    delay={0}
    trigger="hover focus"
    target="tooltip662352101"
  >
    {copiedText === "ni ni-align-center"
      ? "This was Copied!"
      : "Copy To Clipbord"}
  </UncontrolledTooltip>
</Col> */}
export default Icons;
