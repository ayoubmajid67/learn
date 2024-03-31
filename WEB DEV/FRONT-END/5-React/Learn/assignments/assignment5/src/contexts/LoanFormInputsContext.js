import { createContext } from "react";
export let LoanInputsContext = createContext({ type: "text", value: "", id: "", handelChange: null, placeholder: "", IsRequired: true });
