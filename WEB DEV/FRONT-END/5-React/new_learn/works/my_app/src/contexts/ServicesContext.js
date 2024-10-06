import { createContext } from "react";

const servicesList = [
	{
		id: 1,
		name: "service 1",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero asperiores tempora. Quia ut hic, doloremque assumenda velit enim dolores quaerat. Voluptatum animi inventore",
	},
	{
		id: 2,
		name: "service 2",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero asperiores tempora. Quia ut hic, doloremque assumenda velit enim dolores quaerat. Voluptatum animi inventore",
	},
	{
		id: 3,
		name: "service 3",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero asperiores tempora. Quia ut hic, doloremque assumenda velit enim dolores quaerat. Voluptatum animi inventore",
	},
];
export const servicesListContext = createContext(servicesList);
