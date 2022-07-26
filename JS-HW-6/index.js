export const submit = document.getElementById("submit");

const userDataStorage = JSON.parse(localStorage.getItem("data")) || [];
export let userLocalStorage = [...userDataStorage];
console.log(userLocalStorage);

export const createDets = (event) => {
  event.preventDefault();
  const userData = {
    title: document.getElementById("title").value,
    creator: document.getElementById("creator").value,
    Description: document.getElementById("Description").value,
    image: document.getElementById("image").value,
  };
  console.log(userData);
  userLocalStorage.push(userData);
  localStorage.setItem("data", JSON.stringify(userLocalStorage));
  console.log(localStorage.getItem("data"));
};
if (userLocalStorage !== null) {
userLocalStorage.forEach((item) => {
  const formDataHtmlLi = document.createElement("li");
  formDataHtmlLi.className = "formDataHtmlLiclass";
  const formDataHtmlH2 = document.createElement("h2");
  formDataHtmlH2.innerHTML = item.title;
  const formDataHtmlH3 = document.createElement("h3");
  formDataHtmlH3.innerHTML = item.creator;
  const formDataHtmlDescription = document.createElement("p");
  formDataHtmlDescription.innerHTML = item.Description;
  const formDataHtmlimage = document.createElement("img");
  formDataHtmlimage.setAttribute("src", item.image
);

  formDataHtmlLi.appendChild(formDataHtmlH2);
  formDataHtmlLi.appendChild(formDataHtmlH3);
  formDataHtmlLi.appendChild(formDataHtmlDescription);
  formDataHtmlLi.appendChild(formDataHtmlimage);
  document.body.appendChild(formDataHtmlLi);
})};

submit.addEventListener("click", createDets);
