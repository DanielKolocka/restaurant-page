
function addMenu () {
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const dinnerTitle = document.createElement("h1");
    dinnerTitle.setAttribute("class", "headingTitle")
    dinnerTitle.textContent = "Dinner Menu";

    container.appendChild(dinnerTitle);

    const menuItems  = [
        {
            name: "Blackened Snapper",
            description: "A fillet of red snapper is coated in a spicy blend of herbs and spices, then seared in a hot cast-iron skillet, served with a lime-cilantro butter sauce",
            price: "$69.99"
        },
        {
            name: "Seared Halibut",
            description: "A thick, flaky halibut steak is pan-seared to a golden crust and served over a bed of creamy corn purée with roasted cherry tomatoes",
            price: "$74.99"
        },
        {
            name: "Ahi Tuna Crudo",
            description: "Thinly sliced raw ahi tuna is served with yuzu-infused olive oil, topped with pickled ginger and microgreens",
            price: "$72.99"
        },
        {
            name: "Seared Scallops",
            description: "Pan-seared sea scallops are served on a bed of creamy saffron risotto with a lemon-butter sauce",
            price: "$49.99"
        }
    ];

    
    const menuItemsDiv = document.createElement("div");
    menuItemsDiv.setAttribute("class", "menuItems");

    menuItems.forEach(menuItem => {
        const menuItemDiv = document.createElement("div");
        menuItemDiv.setAttribute("class", "menuItem");

        const itemName = document.createElement("h2");
        itemName.setAttribute("class", "itemName");
        itemName.textContent = menuItem.name;

        const itemDescription = document.createElement("p");
        itemDescription.setAttribute("class", "itemDescription");
        itemDescription.textContent = menuItem.description;

        const itemPrice = document.createElement("h2");
        itemPrice.setAttribute("class", "itemPrice");
        itemPrice.textContent = menuItem.price;

        menuItemDiv.appendChild(itemName);
        menuItemDiv.appendChild(itemDescription);
        menuItemDiv.appendChild(itemPrice);

        menuItemsDiv.appendChild(menuItemDiv);
    });

    container.appendChild(menuItemsDiv);

    return container;
}

export {addMenu}