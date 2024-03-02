import './content.css'

export default function content() {
	return (
		<div className="content">
			<h1>Hello world</h1>
            <button onClick={btnClick} >Click Here</button>
		</div>
	);
}

function btnClick(){
    console.log("You Clicked At me ")

}
