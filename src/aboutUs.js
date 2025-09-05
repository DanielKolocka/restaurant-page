function addAboutUs () {
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const headingTitle = document.createElement("h1");
    headingTitle.setAttribute("class", "headingTitle")
    headingTitle.textContent = "About Us";

    container.appendChild(headingTitle);

    const aboutUsDiv = document.createElement("div");
    aboutUsDiv.setAttribute("class", "aboutUs");

    const text1 = document.createElement("h3");
    text1.setAttribute("class", "aboutUsText");
    text1.textContent = "At Sea to Plate, we believe the best seafood is the freshest seafood. Our commitment to unparalleled quality begins with our daily-sourcing philosophy: every piece of fish on your plate was caught and delivered to our kitchen on the very same day. We work directly with local, sustainable fishermen, ensuring that each dish we serve captures the pure, pristine flavors of the ocean at its absolute peak. This dedication to a true sea-to-table experience is what sets us apart, guaranteeing an extraordinary dining experience with every visit.";
    const text2 = document.createElement("h3");
    text2.setAttribute("class", "aboutUsText");
    text2.textContent = "Chef Julian Thorne's journey to the helm of The Daily Catch is a testament to the transformative power of passion and perseverance. Born into a small fishing village, he grew up watching his father and grandfather navigate the unpredictable waters, their lives intertwined with the rhythm of the tides. While other children dreamed of far-off cities, Julian found his inspiration not in the bustling metropolis but in the simple beauty of the day's haul. A tragic storm that claimed his family's boat could have been the end of his connection to the sea, but instead, it became his motivation. He channeled his grief into an unwavering resolve to honor their legacy, traveling the world to apprentice under master chefs and learn techniques that could elevate the humble catch into culinary art. Now, at The Daily Catch, he brings that lifetime of knowledge back to the water's edge, creating dishes that are not just meals, but a heartfelt tribute to the fishermen, the ocean, and the enduring spirit of his family.";

    aboutUsDiv.appendChild(text1);
    aboutUsDiv.appendChild(text2);

    container.appendChild(aboutUsDiv);
    return container;
}

export {addAboutUs}
