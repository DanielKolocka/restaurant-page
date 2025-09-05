
function addHome () {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("class", "container");

    const homeDiv = document.createElement("div");
    homeDiv.setAttribute("class", "home");

    const nameH1 = document.createElement("h1");
    nameH1.setAttribute("class", "headingTitle")
    nameH1.textContent = "Sea to Plate";

    const descriptionH4 = document.createElement("h4");
    descriptionH4.textContent = "From the sea in the morning, to your plate by nightfall";

    const footerDiv = document.createElement("div");
    const openingDaysP = document.createElement("p");
    openingDaysP.textContent = "Visit us Thursday - Sunday!";


    containerDiv.appendChild(homeDiv);
    homeDiv.appendChild(nameH1);
    homeDiv.appendChild(descriptionH4);
    containerDiv.appendChild(footerDiv);
    footerDiv.appendChild(openingDaysP);

    return containerDiv;
}

export {addHome}