import "./styles.css";

import { addHome } from "./home";
import { addMenu } from "./menu";
import { addAboutUs } from "./aboutUs";

const contentDiv = document.querySelector("#content");

const homeButton = document.querySelector(".homeButton");
homeButton.addEventListener("click", () => {
    contentDiv.replaceChildren();
    contentDiv.appendChild(addHome());
});

const menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", () => {
    contentDiv.replaceChildren();
    contentDiv.appendChild(addMenu());
});

const aboutButton = document.querySelector(".aboutButton");
aboutButton.addEventListener("click", () => {
    contentDiv.replaceChildren();
    contentDiv.appendChild(addAboutUs());
});

contentDiv.appendChild(addHome());
// contentDiv.appendChild(addMenu());
// contentDiv.appendChild(addAboutUs());

