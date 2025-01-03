"use client";
import InputsContext from "@/app/context/InputsContext";
import { Flex, Select } from "antd";
import React, { useContext } from "react";

type optionObj = {
  label: string;
  value: string;
};
type DropdownInputProps = {
  id: string;
  label: string;
  placeholder: string;
  options: Array<optionObj>;
};
const DropdownInput = (props: DropdownInputProps) => {
  const { id, label, placeholder, options } = props;
  const inputCtx = useContext(InputsContext);

  function handleChange(value: string) {
    inputCtx.updateField({ id, value });
  }
  return (
    <Flex vertical>
      <label
        htmlFor={label}
        className="text-customBlue text-xl font-semibold my-1"
      >
        {label}
      </label>
      <Select
        size="large"
        placeholder={placeholder}
        onChange={handleChange}
        options={options}
        // @ts-expect-error aaa
        defaultValue={inputCtx[id] && inputCtx[id]}
      />
    </Flex>
  );
};

export default DropdownInput;
