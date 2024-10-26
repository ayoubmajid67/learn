import "./Form.css"
export default function Form() {
	 let title="Login Form"
    return (
		<>
			<form action="">
                {title}
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button>Submit</button>
			</form>
		</>
	);
}
