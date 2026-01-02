// components/Cards/StatCard.js
import React from "react";
import { Card, CardBody, CardTitle, Col, Row, Progress } from "reactstrap";

/**
 * StatCard (Argon Dashboard KPI Card)
 * - 카드 1개를 렌더링
 * - layout은 고정, 내용만 props로 주입
 */
const StatCard = ({
  col = { lg: "6", xl: "3" }, // 페이지별 카드 수에 따라 조절 가능
  title,
  value,
  goal, // 정량적 목표 (예: 10000)
  iconClass = "fas fa-chart-bar",
  iconBgClass = "bg-danger",
  deltaDirection, // "up" | "down" | undefined
  delta, // 예: "3.48%" (정량적 목표)
  deltaText = "정량적 목표",
  className = "",
}) => {
  const dir = deltaDirection;

  const deltaColorClass =
    dir === "up" ? "text-success" : dir === "down" ? "text-danger" : "text-muted";
  const deltaIconClass =
    dir === "up" ? "fa fa-arrow-up" : dir === "down" ? "fa fa-arrow-down" : "";

  return (
    <Col lg={col.lg} xl={col.xl}>
      <Card className={`card-stats mb-4 mb-xl-0 ${className}`.trim()}>
        <CardBody>
          <Row>
            <div className="col">
              <CardTitle tag="h5" className="h3 text-lg text-gray-dark mb-1">
                {title}
              </CardTitle>
              <span className="h2 text-xl mb-0">{value}</span>
              <span className="h2 text-muted mb-0"> | {goal}</span>              
            </div>

            {/* <Col className="col-auto">
              <div className={`icon icon-shape ${iconBgClass} text-white rounded-circle shadow`}>
                <i className={iconClass} />
              </div>
            </Col> */}
          </Row>

          {(delta !== undefined || deltaText) && (
            <p className="mt-1 mb-0 text-default text-lg font-weight-normal">
              <span className="text-nowrap">{deltaText} </span>
              {delta !== undefined ? (
                <span className={`${deltaColorClass} mr-2 font-weight-bold`}>
                  {delta}
                </span>
              ) : null}
              <span>달성</span>              
            </p>
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default StatCard;
