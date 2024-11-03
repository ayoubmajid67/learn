import { createContext ,useContext,useState} from "react";
import Toast from "../Components/Toast/Toast";

 const ToastContext = createContext({});


export const ToastProvider =({children})=>{

	const [openToastStat, setOpenToastStat] = useState({
		open: false,
		message: "This is a success Alert inside a Snackbar!",
	});
    return (
    <ToastContext.Provider  value={{ openToastStat, setOpenToastStat }} >
        	<Toast />
        {children}
    </ToastContext.Provider>    
    )
};

export const useToast = ()=>useContext(ToastContext); 
