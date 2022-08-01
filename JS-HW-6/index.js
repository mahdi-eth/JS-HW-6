const submit = document.getElementById("submit");

const userDataStorage = JSON.parse(localStorage.getItem("data")) || [];
let userLocalStorage = [...userDataStorage];

const createDets = (event) => {
  event.preventDefault();
  const userData = {
    title: document.getElementById("title").value,
    creator: document.getElementById("creator").value,
    Description: document.getElementById("Description").value,
    image: document.getElementById("image").value,
  };

  userLocalStorage = [];
  userLocalStorage.push(userData);
  localStorage.setItem("data", JSON.stringify(userLocalStorage));
  location.reload();
};

if (userLocalStorage.length > 0) {
  if (
    userLocalStorage[0].title == "" &&
    userLocalStorage[0].Description == "" &&
    userLocalStorage[0].creator == ""
  ) {
    alert("Please fill out all the information");
  };

  if (
    userLocalStorage[0].title !== "" ||
    userLocalStorage[0].Description !== "" ||
    userLocalStorage[0].creator !== ""
  ) {
    userLocalStorage.forEach((item) => {
      const main = document.createElement("ul");

      const formDataHtmlLi = document.createElement("li");
      formDataHtmlLi.className = "formDataHtmlLiclass";

      const formDataHtmlH2 = document.createElement("h2");
      formDataHtmlH2.innerHTML = item.title;

      const formDataHtmlThumbsUp = document.createElement("i");

      if (item.title) {
        formDataHtmlThumbsUp.className =
          localStorage.getItem("formDataHtmlThumbsUp") || "bi bi-heart";
        formDataHtmlThumbsUp.addEventListener("click", () => {
          if (formDataHtmlThumbsUp.className == "bi bi-heart") {
            formDataHtmlThumbsUp.className = "bi bi-heart-fill";
            localStorage.setItem(
              "formDataHtmlThumbsUp",
              formDataHtmlThumbsUp.className
            );
          } else {
            formDataHtmlThumbsUp.className = "bi bi-heart";
            localStorage.setItem(
              "formDataHtmlThumbsUp",
              formDataHtmlThumbsUp.className
            );
          }
        });
      }

      const formDataHtmlThumbsUp2 = document.createElement("i");

      if (item.creator) {
        formDataHtmlThumbsUp2.className =
          localStorage.getItem("formDataHtmlThumbsUp2") || "bi bi-heart";
        formDataHtmlThumbsUp2.addEventListener("click", () => {
          if (formDataHtmlThumbsUp2.className == "bi bi-heart") {
            formDataHtmlThumbsUp2.className = "bi bi-heart-fill";
            localStorage.setItem(
              "formDataHtmlThumbsUp2",
              formDataHtmlThumbsUp2.className
            );
          } else {
            formDataHtmlThumbsUp2.className = "bi bi-heart";
            localStorage.setItem(
              "formDataHtmlThumbsUp2",
              formDataHtmlThumbsUp2.className
            );
          }
        });
      }

      const formDataHtmlThumbsUp3 = document.createElement("i");

      if (item.Description) {
        formDataHtmlThumbsUp3.className =
          localStorage.getItem("formDataHtmlThumbsUp3") || "bi bi-heart";
        formDataHtmlThumbsUp3.addEventListener("click", () => {
          if (formDataHtmlThumbsUp3.className == "bi bi-heart") {
            formDataHtmlThumbsUp3.className = "bi bi-heart-fill";
            localStorage.setItem(
              "formDataHtmlThumbsUp3",
              formDataHtmlThumbsUp3.className
            );
          } else {
            formDataHtmlThumbsUp3.className = "bi bi-heart";
            localStorage.setItem(
              "formDataHtmlThumbsUp3",
              formDataHtmlThumbsUp3.className
            );
          }
        });
      }

      const formDataHtmlThumbsUp4 = document.createElement("i");

      if (item.title) {
        formDataHtmlThumbsUp4.className =
          localStorage.getItem("formDataHtmlThumbsUp4") || "bi bi-heart";
        formDataHtmlThumbsUp4.addEventListener("click", () => {
          if (formDataHtmlThumbsUp4.className == "bi bi-heart") {
            formDataHtmlThumbsUp4.className = "bi bi-heart-fill";
            localStorage.setItem(
              "formDataHtmlThumbsUp4",
              formDataHtmlThumbsUp4.className
            );
          } else {
            formDataHtmlThumbsUp4.className = "bi bi-heart";
            localStorage.setItem(
              "formDataHtmlThumbsUp4",
              formDataHtmlThumbsUp4.className
            );
          }
        });
      }

      const formDataHtmlH3 = document.createElement("h3");
      formDataHtmlH3.innerHTML = item.creator;
      const formDataHtmlDescription = document.createElement("p");
      formDataHtmlDescription.innerHTML = item.Description;
      const formDataHtmlimage = document.createElement("div");
      formDataHtmlimage.className = "ul-image";

      formDataHtmlLi.appendChild(formDataHtmlH2);
      formDataHtmlLi.appendChild(formDataHtmlThumbsUp);
      formDataHtmlLi.appendChild(formDataHtmlH3);
      formDataHtmlLi.appendChild(formDataHtmlThumbsUp2);
      formDataHtmlLi.appendChild(formDataHtmlDescription);
      formDataHtmlLi.appendChild(formDataHtmlThumbsUp3);
      formDataHtmlLi.appendChild(formDataHtmlimage);
      formDataHtmlLi.appendChild(formDataHtmlThumbsUp4);
      main.appendChild(formDataHtmlLi);
      document.body.appendChild(main);
      submit.value = "Edit";
    });
  }
}

submit.addEventListener("click", createDets);
