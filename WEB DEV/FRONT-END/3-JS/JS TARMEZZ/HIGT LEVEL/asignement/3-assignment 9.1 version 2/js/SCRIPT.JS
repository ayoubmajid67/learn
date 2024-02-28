const DarkModeColor = "var(--PostContainerBgDarkColor)";
const DarkSourceImg = "img/darkMoon.svg";

const LightModeColor = "var(--PostContainerBgLightColor)";
const LightSourceImg = "img/sun.gif";

const bodyBackLight = "var(--bodyBackLight)";
const bodyBackDark = "var(--bodyBackDark)";

btnMode.onclick = function () {
	if (this.classList.contains("Sun")) {
		document.body.style.background = "";
		changeTheme("Sun", "Moon", DarkModeColor, DarkSourceImg, bodyBackDark);
	} else {
		changeTheme("Moon", "Sun", LightModeColor, LightSourceImg, bodyBackLight);
	}
};

function changeTheme(RemovedClass, AddedClass, Mode, ImgSrc, BodyTheme) {
	btnMode.classList.add(AddedClass);
	btnMode.classList.remove(RemovedClass);
	document.body.style.background = BodyTheme;

	btnMode.setAttribute("src", ImgSrc);
	PostSide.style.backgroundColor = Mode;
}


let endOfPage = document.body.scrollHeight;

let flag = false;
btnScrollDown.onclick = function () {
	flag = !flag;
	if (flag) {
		scrollToPosition(endOfPage);
		setTimeout(() => {
			btnScrollDown.setAttribute("src", "img/dropTop.svg");
		}, 240);
	} else {
		scrollToPosition(0);

		setTimeout(() => {
			btnScrollDown.setAttribute("src", "img/dropDown.gif");
		}, 240);
	}
};

function scrollToPosition(Position) {
	window.scrollTo({
		top: Position,
		behavior: "smooth",
	});
}


 function clickBurger(){
	if (UserSide.classList.contains("BurgerClicked")) {
		UserSide.classList.remove("BurgerClicked");
		 
	} else {
		UserSide.classList.add("BurgerClicked");
		
	}
};




