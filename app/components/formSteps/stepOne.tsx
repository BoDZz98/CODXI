import { Col, Flex, Row } from "antd";
import React from "react";
import { STEP_ONE_DATA } from "@/lib/constants";
const StepOne = () => {
  return (
    <Flex vertical gap="middle">
      <h1 className="text-4xl font-bold text-customBlue my-10">
        General Information
      </h1>
      {STEP_ONE_DATA.map((rows, index) => (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} key={index}>
          {rows.map((col) => (
            <Col className="gutter-row" span={8} key={col.key}>
              {col}
            </Col>
          ))}
        </Row>
      ))}
    </Flex>
  );
};

export default StepOne;
