import React from "react";

export interface InputsState {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface InputsAction {
  type: string;
  input?: { id: string; value: string };
}

export type Input = {
  id: string;
  value: string;
};

export const defaultValues = {
  firstName: "",
  middleName: "",
  lastName: "",
};

const InputsContext = React.createContext({
  ...defaultValues,
  updateField: (input: Input) => {},
  reset: () => {},
});

export default InputsContext;
