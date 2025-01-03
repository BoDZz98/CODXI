import { Col, Flex, Row } from "antd";
import React from "react";
import { STEP_FOUR_DATA, STEP_FOUR_DATA_CONT } from "@/lib/constants";
const StepFour = () => {
  return (
    <Flex vertical gap="middle">
      <h1 className="text-4xl font-bold text-customBlue my-10">
        Bank Information
      </h1>
      {STEP_FOUR_DATA.map((rows, index) => (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} key={index}>
          {rows.map((col) => (
            <Col className="gutter-row" span={8} key={col.key}>
              {col}
            </Col>
          ))}
        </Row>
      ))}

      {/* Row 2------------------------------------------------------------------------------------------------------- */}
      <h1 className="text-lg text-customBlue mt-5">
        To have the employee complete this data,{" "}
        <a className="text-blue-500">Click here</a> to send an email
      </h1>
      <h1 className="text-4xl font-bold text-customBlue my-5">
        Deduction Details
      </h1>
      {STEP_FOUR_DATA_CONT.map((rows, index) => (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} key={index}>
          {rows.map((col) => (
            <Col className="gutter-row" span={8} key={col.key}>
              {col}
            </Col>
          ))}
          ,
        </Row>
      ))}
    </Flex>
  );
};

export default StepFour;
