// Select the first div (header) and create a new sub-heading element (h3)
var headerDiv = document.getElementById("header");
var subHeading = document.createElement("h3");

// Set the text content and style for the sub-heading
subHeading.textContent = "Buy high quality organic fruits online";
subHeading.style.fontStyle = "italic";

// Insert the sub-heading after the main heading
headerDiv.appendChild(subHeading);

// Select the second div (fruits section) and create a new paragraph element
var fruitsDiv = document.querySelector("div:nth-child(2)");
var totalFruitsParagraph = document.createElement("p");

// Set the text content for the paragraph and its id
totalFruitsParagraph.textContent = "Total fruits: 4";
totalFruitsParagraph.id = "fruits-total";

// Insert the paragraph before the unordered list
fruitsDiv.insertBefore(totalFruitsParagraph, fruitsDiv.firstChild);
