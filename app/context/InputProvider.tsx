import { ReactNode, useReducer } from "react";
import InputCtx, {
  defaultValues,
  Input,
  InputsAction,
  InputsState,
} from "./InputsContext";
import React from "react";

type inputProviderProps = {
  children: ReactNode;
};
const InputsReducer = (state: InputsState, action: InputsAction) => {
  if (action.type === "UPDATE") {
    return { ...state, [action.input!.id]: action.input!.value };
  } else {
    // console.log(defaultValues);

    return defaultValues;
  }
};

export const InputProvider = ({ children }: inputProviderProps) => {
  const [inputsState, dispatchInputsAction] = useReducer(
    InputsReducer,
    defaultValues
  );

  function inputHandler(input: Input) {
    dispatchInputsAction({
      type: "UPDATE",
      input,
    });
  }

  function resetHandler() {
    dispatchInputsAction({
      type: "RESET",
    });
  }

  const inputCtx = {
    ...inputsState,
    updateField: inputHandler,
    reset: resetHandler,
  };
  return <InputCtx.Provider value={inputCtx}>{children}</InputCtx.Provider>;
};
