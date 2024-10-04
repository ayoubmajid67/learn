import { createContext } from "react";

export let loanInputContext = createContext({
	id: "",
	changeHandler: null,
	value: "",
	text: "input",
	type: "text",
	isRequired: true,
	checked: "",
});
