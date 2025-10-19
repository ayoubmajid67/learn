import "./Tag.css";

export default function Tag({ tagBtn = "Tag button", children }) {
	return (
		<div className="tag">
			<button >Tag button</button>
		   {children}
		</div>
	);
}
