"use client";
import InputsContext from "@/app/context/InputsContext";
import { DatePicker, Flex } from "antd";
import React, { useContext } from "react";

type MyInputProps = {
  id: string;
  label: string;
  placeholder: string;
};
const DateInput = ({ id, label, placeholder }: MyInputProps) => {
  const inputCtx = useContext(InputsContext);
  // @ts-expect-error aaa
  function setInput(date: Dayjs) {
    inputCtx.updateField({ id, value: date });
  }

  return (
    <Flex vertical>
      <label
        htmlFor={label}
        className="text-customBlue text-xl font-semibold my-1"
      >
        {label}
      </label>
      <DatePicker
        placeholder={placeholder}
        size="large"
        id={label}
        onChange={setInput}
        // @ts-expect-error aaa
        value={inputCtx[id] ? inputCtx[id] : ""}
      />
    </Flex>
  );
};

export default DateInput;
