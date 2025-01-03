import { Col, Flex, Row } from "antd";
import React from "react";
import { STEP_TWO_DATA } from "@/lib/constants";
import MyInput from "../formInputs/myInput";

const StepTwo = () => {
  return (
    <Flex vertical gap="middle">
      <h1 className="text-4xl font-bold text-customBlue my-10">
        Job Information
      </h1>
      {STEP_TWO_DATA.map((rows, index) => (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} key={index}>
          {rows.map((col) => (
            <Col className="gutter-row" span={8} key={col.key}>
              {col}
            </Col>
          ))}
        </Row>
      ))}

      {/* Row 2------------------------------------------------------------------------------------------------------- */}
      <h1 className="text-4xl font-bold text-customBlue my-10">
        Salary Information
      </h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <MyInput
            placeholder="10"
            label="Gross Salary"
            id="grossSalary"
            type="number"
          />
        </Col>
        <Col className="gutter-row" span={8}>
          <MyInput
            placeholder="10"
            label="Net Salary"
            id="netSalary"
            type="number"
          />
        </Col>
      </Row>
    </Flex>
  );
};

export default StepTwo;
