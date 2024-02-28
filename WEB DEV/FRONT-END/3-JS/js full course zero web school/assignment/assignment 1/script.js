let body = document.querySelector("body");

//start upDown animation ----------------------------- :
function getAnimation() {
	let parentDiv = document.createElement("div");
	parentDiv.classList.add("parent");
	let h3Anim = document.createElement("h3");
	h3Anim.textContent = "Build By Ayoub Majid";
	let pointsDiv = document.createElement("div");
	pointsDiv.classList.add("points");

	for (let i = 1; i <= 3; i++) {
		let tempPointDiv = document.createElement("div");

		tempPointDiv.classList.add(`point${i}`);
		pointsDiv.appendChild(tempPointDiv);
	}

	// append elements to parent div :
	parentDiv.appendChild(h3Anim);
	parentDiv.appendChild(pointsDiv);

	return parentDiv;
}

function pushAnimationToDom() {
	let startPointsComment = document.createComment("Start upDown animation ");
	let endPointsComment = document.createComment("End upDown animation ");

	body.appendChild(startPointsComment);
	body.appendChild(getAnimation());
	body.appendChild(endPointsComment);
}

pushAnimationToDom();

var parent = document.querySelector(".parent");

function delay(milliseconds) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
function scrollToTop() {
	document.documentElement.scrollTop = 0; // For modern browsers
	document.body.scrollTop = 0; // For older browsers
}

async function upDownAnim() {
	scrollToTop();
	parent.style.display = "flex";
	for (let i = 1; i >= 0; i -= 0.01) {
		parent.style.opacity = i;
		await delay(24);
	}
	parent.style.display = "none";
}
upDownAnim();

// start header ----------------------------- :
function getHeader() {
	let header = document.createElement("header");
	let nav = document.createElement("nav");
	nav.classList.add("navBar");
	let h1Header = document.createElement("h1");
	h1Header.classList.add("title");
	h1Header.textContent = "ELZERO";

	let ulHeader = document.createElement("ul");
	let arrLiList = [];
	let arrLiContent = ["Home", "About", "Services", "Contact"];
	for (let i = 0; i < 4; i++) {
		arrLiList.push(document.createElement("li"));
		arrLiList[i].textContent = arrLiContent[i];
	}
	arrLiList.forEach((li) => {
		ulHeader.appendChild(li);
	});

	nav.appendChild(h1Header);
	nav.appendChild(ulHeader);

	header.appendChild(nav);

	return header.cloneNode(true);
}
function pushHeader() {
	let startComment = document.createComment("start header");
	let endHeader = document.createComment("end header");
	body.appendChild(startComment);
	body.appendChild(getHeader());
	body.appendChild(endHeader);
}
pushHeader();
// start main content ----------------------------- :

function getMainContent() {
	let main = document.createElement("main");
	let products = document.createElement("div");
	products.classList.add("products");

	let product = document.createElement("div");

	product.classList.add("product");
	let h1Product = document.createElement("h1");
	h1Product.classList.add("ProductNumber");
	let pProduct = document.createElement("p");
	pProduct.textContent = "Product";
	product.appendChild(h1Product);
	product.appendChild(pProduct);

	for (let i = 1; i <= 50; i++) {
		let tempProduct = product.cloneNode(true);
		tempProduct.firstChild.textContent = i;
		products.appendChild(tempProduct);
	}
	return products;
}
function pushProductsToDom() {
	let startMainContentComment = document.createComment("start main Content");
	let endMainContentComment = document.createComment("end main Content");
	body.appendChild(startMainContentComment);
	body.appendChild(getMainContent());
	body.appendChild(endMainContentComment);
}
pushProductsToDom();

// start footer  ----------------------------- :

function getFooter() {
	let footerDom = document.createElement("footer");

	let h2Footer = document.createElement("h2");
	h2Footer.innerHTML = "Copyright &copy 2023";

	footerDom.appendChild(h2Footer);

	return footerDom;
}

function pushFooterToDom() {
	let startFooterComment = document.createComment("start Footer");
	let endFooterComment = document.createComment("end Footer");

	body.appendChild(startFooterComment);
	body.append(getFooter());
	body.appendChild(endFooterComment);
}
pushFooterToDom();