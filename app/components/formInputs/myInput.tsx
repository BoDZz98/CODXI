"use client";
import InputsContext from "@/app/context/InputsContext";
import { Flex, Input } from "antd";
import React, { ReactNode, useContext } from "react";

type MyInputProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  suffixIcon?: ReactNode;
};
const MyInput = (props: MyInputProps) => {
  const { id, label, placeholder, type, suffixIcon } = props;
  const inputCtx = useContext(InputsContext);

  function setInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    inputCtx.updateField({ id, value });
  }

  return (
    <Flex vertical>
      <label
        htmlFor={label}
        className="text-customBlue text-xl font-semibold my-1 "
      >
        {label}
      </label>
      <Input
        placeholder={placeholder}
        size="large"
        id={label}
        onBlur={setInput}
        suffix={suffixIcon}
        type={type}
        // @ts-expect-error aaa
        defaultValue={!!inputCtx[id] ? inputCtx[id] : ""}
      />
    </Flex>
  );
};

export default MyInput;
