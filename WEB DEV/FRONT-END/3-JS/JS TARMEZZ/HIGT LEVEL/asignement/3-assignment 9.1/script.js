const rightSide = document.getElementById("rightSide");
const leftSideItems = [...document.getElementsByClassName("leftSideItems")];
const ActiveClassUser = "activeUser";
const request = new XMLHttpRequest();
const mode = "GET";
let defaultUrl = "https://jsonplaceholder.typicode.com/posts/?userId=";

const menu = document.getElementById("menu");
const leftSide = document.getElementById("leftSide");

let flag = false;
window.onload = UpdateLeftSideWidth();
window.onresize = function () {
  UpdateLeftSideWidth();
};

function UpdateLeftSideWidth() {
  if (!flag) {
    let screenWidth = window.screen.width;
    if (screenWidth > 900) {
      leftSide.style.flexBasis = "27vw";
      leftSide.style.width = "27vw";
    } else if (screenWidth >= 602) {
      leftSide.style.flexBasis = "45vw";
      leftSide.style.width = "45vw";
    } else if (screenWidth > 382) {
      leftSide.style.flexBasis = "50vw";
      leftSide.style.width = "50vw";
    } else {
      leftSide.style.flexBasis = "60vw";
      leftSide.style.width = "60vw";
    }
  }
}
menu.onclick = function () {
  flag = !flag;
  let screenWidth = window.screen.width;

  if (flag) {
    leftSide.style.flexBasis = "2vw";

    if (screenWidth > 900) {
      leftSide.style.width = "40px";
    } else if (screenWidth > 500) {
      leftSide.style.width = "24px";
    } else {
      leftSide.style.width = "20px";
    }
  } else {
    let counter = 2;
    let anim = setInterval(() => {
      counter++;
      leftSide.style.flexBasis = `${counter}vw `;
      leftSide.style.width = `${counter}vw `;

      if (counter == 27 && screenWidth > 900) {
        clearInterval(anim);
      } else if (counter == 50 && screenWidth >= 602) {
        clearInterval(anim);
      } else if (counter == 55 && screenWidth > 400) {
        clearInterval(anim);
      } else if (counter == 60) {
        clearInterval(anim);
      }
    }, 31.81);
  }
};

class ResponseObject {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  getDomResponseStructure() {
    let thisArticle = `

<article>
<h3>${this.title}</h3>
<p class="body">${this.body}</p>
</article>

`;
    return thisArticle;
  }
}

function GetRequestInfo(UserId) {
  let thisUserUrl = getUserUrl(UserId);

  // prepare the request
  prepareRequest(thisUserUrl);

  // send request :
  request.send();

  // get response :
  request.onload = function () {
    if (this.status > 199 && this.status < 300) {
      let FinaleSendArticlesToDom = "";
      FinaleSendArticlesToDom = getFinalDomArticles(
        this.response,
        FinaleSendArticlesToDom
      );
      rightSide.innerHTML = FinaleSendArticlesToDom;
    } else {
      alert(this.status, "bad status ");
    }
  };
}

function getFinalDomArticles(response, FinaleSendArticlesToDom) {
  response.forEach((element) => {
    let obResponse = new ResponseObject(element.title, element.body);
    FinaleSendArticlesToDom += obResponse.getDomResponseStructure();
  });
  return FinaleSendArticlesToDom;
}

function prepareRequest(thisUserUrl) {
  request.open(mode, thisUserUrl);
  request.responseType = "json";
}

function getUserUrl(UserId) {
  return defaultUrl + String(UserId);
}

function handelWitchUserBorder(id) {
  leftSideItems[id].classList.add(ActiveClassUser);
  leftSideItems.forEach((element, index) => {
    if (index != id) element.classList.remove(ActiveClassUser);
  });
}

window.onload = () => {
  GetRequestInfo(1);
};

function ClickThisUser(id) {
  handelWitchUserBorder(id);

  GetRequestInfo(id + 1);
}
