"use client";
import { Button, Divider, Flex, Steps } from "antd";
import { useState } from "react";
import StepOne from "./components/formSteps/stepOne";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { InputProvider } from "./context/InputProvider";
import StepTwo from "./components/formSteps/stepTwo";
import BreadcrumbAndButtons from "./components/breadcrumbAndButtons";
import StepThree from "./components/formSteps/stepThree";
import StepFour from "./components/formSteps/stepFour";

const steps = [
  {
    title: "Personal Information",
    content: <StepOne />,
  },
  {
    title: "Work Information",
    content: <StepTwo />,
  },
  {
    title: "Education",
    content: <StepThree />,
  },
  {
    title: "Payroll",
    content: <StepFour />,
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const next = () => setCurrent((prevState) => prevState + 1);
  const prev = () => setCurrent((prevState) => prevState - 1);
  const resetHandler = () => setCurrent(0);

  return (
    <InputProvider>
      <Flex vertical className="shadow-2xl w-full h-full rounded-xl p-10">
        {/* Breadcrumb and buttons --------------------------------------------------------------- */}

        <BreadcrumbAndButtons onReset={resetHandler} />
        <Divider className="border-2" />

        {/* Steps --------------------------------------------------------------- */}
        <div className="w-3/5 place-self-center ">
          <Steps current={current} items={items} labelPlacement="vertical" />
        </div>

        <Flex vertical className="px-8">
          <div>{steps[current].content}</div>
          {/* Next and back buttons */}
          <Flex gap='small' className="place-self-end">
            {current > 0 && (
              <Button icon={<ArrowLeftOutlined />} onClick={() => prev()} />
            )}
            {current < steps.length - 1 && (
              <Button icon={<ArrowRightOutlined />} onClick={() => next()} />
            )}
          </Flex>
        </Flex>
      </Flex>
    </InputProvider>
  );
}
