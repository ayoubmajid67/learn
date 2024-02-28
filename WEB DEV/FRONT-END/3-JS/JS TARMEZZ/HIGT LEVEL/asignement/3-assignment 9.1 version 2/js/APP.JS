let UsersUrl = "https://jsonplaceholder.typicode.com/users";
let mode = "GET";
let PostUrl = "https://jsonplaceholder.typicode.com/posts/?userId=";
window.onload = function () {
	ManageUserRequest();
	ManagePostRequest(1);
};

class Request {
	constructor(mode, url) {
		this.mode = mode;
		this.url = url;
		this.newRequest = new XMLHttpRequest(mode, url);
		this.Response = "";
	}

	SetRequestParams() {
		// set the default params of request :
		this.newRequest.open(this.mode, this.url);

		// set the response type :
		this.newRequest.responseType = "json";
	}

	sendRequest() {
		this.newRequest.send();
	}
	SendToDom(ParentElement, Structure) {
		ParentElement.innerHTML = Structure;
	}
}

function ManageUserRequest() {
	let UserRequest = new Request(mode, UsersUrl);
	UserRequest.SetRequestParams();
	UserRequest.sendRequest();

	UserRequest.newRequest.onload = function () {
		if (this.status >= 200 && this.status < 300) {
			console.log("Good connection with the server : ");
			let Users = UserRequest.newRequest.response;

			let Structure = GetDomStructure(Users);

			UserRequest.SendToDom(UserSide, Structure);
		} else {
			alert("Bad connection with the server :  ");
		}
	};
}

function GetDomStructure(Users) {
	let Structure = `<img src="img/icons8-burger-bar-64.svg" alt="" id="BurgerBar" onClick=clickBurger(); />`;
	Users.forEach((User) => {
		if (User.id == 1) {
			Structure += `
                <article class="isSelected" onClick=ManagePostRequest(${User.id})>
                <h4>${User.username}</h4>
                <h6>${User.email}</h6>
                </article>
                `;
		} else {
			Structure += `
                <article class="" onClick=ManagePostRequest(${User.id})>
                <h4>${User.username}</h4>
                <h6>${User.email}</h6>
                </article>
                `;
		}
	});
	return Structure;
}

function ManagePostRequest(UserId) {
	AddBorderToSelectedUser(UserId);

	let PostsRequest = new Request(mode, PostUrl + UserId);
	console.log(PostUrl + UserId);
	PostsRequest.SetRequestParams();
	PostsRequest.sendRequest();

	PostsRequest.newRequest.onload = function () {
		if (this.status >= 200 && this.status < 300) {
			console.log("Good connection with the server : ");
			let Posts = PostsRequest.newRequest.response;

			let Structure = GetPostsDomStructure(Posts);

			PostsRequest.SendToDom(PostSide, Structure);
		} else {
			alert("Bad connection with the server :  ");
		}
	};
}

function AddBorderToSelectedUser(UserId) {
	let UsersArticles = document.querySelectorAll("#UserSide article");

	UsersArticles.forEach((User) => {
		if (User.classList.contains("isSelected")) {
			User.classList.remove("isSelected");
		}
	});

	UsersArticles[UserId - 1].classList.add("isSelected");
}

function GetPostsDomStructure(Posts) {
	let Structure="";
	Posts.forEach((Post) => {
		Structure += `
            <article>
            <h4>${Post.title}</h4>
            <hr />
            <p>${Post.body}</p>
           </article>
                `;
	});
	return Structure;
}
