import "./Tag.css";

export default function Tag({ tagBtn , children }) {
if(!tagBtn) tagBtn="Tag button";
if(!children) children="";
	return (
		<div className="tag">
			<button >Tag button</button>
		   {children}
		</div>
	);
}
