import { Button, Col, Flex, Row } from "antd";
import React from "react";
import { STEP_THREE_DATA, STEP_THREE_DATA_CONT } from "@/lib/constants";
import { PlusOutlined } from "@ant-design/icons";
const StepThree = () => {
  return (
    <Flex vertical gap="middle">
      <h1 className="text-4xl font-bold text-customBlue my-10">
        Educational Information
      </h1>
      {STEP_THREE_DATA.map((rows, index) => (
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
        Certifications & Training
      </h1>
      {STEP_THREE_DATA_CONT.map((rows, index) => (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} key={index}>
          {rows.map((col) => (
            <Col className="gutter-row" span={8} key={col.key}>
              {col}
            </Col>
          ))}
          {/* Only in the second row */}
          {index === 1 && (
            <Col className="gutter-row" span={4}>
              <Flex vertical>
                <label className="text-white text-xl  my-1 ">a</label>
                <Button key={6} size="large" icon={<PlusOutlined />}>
                  Add Certification
                </Button>
              </Flex>
            </Col>
          )}
          ,
        </Row>
      ))}
    </Flex>
  );
};

export default StepThree;
