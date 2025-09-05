import "./styles.css";

import { addHome } from "./home";
import { addMenu } from "./menu";

console.log("hello world");

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(addHome());
// contentDiv.appendChild(addMenu());

