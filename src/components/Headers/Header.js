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

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import StatCard from "components/Headers/StatCard.js";

const calcXl = (count) => {
  // 1개: 12, 2개: 6, 3개: 4, 4개 이상: 3(4개/줄)
  if (count <= 1) return "12";
  if (count === 2) return "6";
  if (count === 3) return "4";
  
  return "3";
};

const Header = ({ title = "", subtitle = "", cards = [] }) => {
  const xl = calcXl(cards.length);

  return (
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-5">
      <Container fluid>
        <Row>
          {cards.map((c, idx) => (
            <StatCard
              key={c.key ?? idx}
              col={c.col ?? { lg: "6", xl }} // 카드 개수에 따라 자동 폭
              title={c.title}
              value={c.value}
              goal={c.goal}
              iconClass={c.iconClass}
              iconBgClass={c.iconBgClass}
              delta={c.delta}
              deltaDirection={c.deltaDirection}
              deltaText={c.deltaText}
              className={c.className}
              result={c.results}
              messege={c.messege}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

const Header_3 = ({ title = "", subtitle = "", cards = [] }) => {
  const xl = calcXl(cards.length);

  return (
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-5">
      <Container fluid>
        <Row>
          {cards.map((c, idx) => (
            <StatCard
              key={c.key ?? idx}
              col={c.col ?? { lg: "6", xl }} // 카드 개수에 따라 자동 폭
              title={c.title}
              value={c.value}
              goal={c.goal}
              iconClass={c.iconClass}
              iconBgClass={c.iconBgClass}
              delta={c.delta}
              deltaDirection={c.deltaDirection}
              deltaText={c.deltaText}
              className={c.className}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

const Header_2 = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-5">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          총 방문자 수
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          12,139
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          총 가입자 수
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">723</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last week</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          누적 데이터 수
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">50,678</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          GPU 작동률
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">49.65%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
// export default Header_2;
