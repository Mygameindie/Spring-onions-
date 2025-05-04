function applyPreset1() {
    // Hide all clothing items first (except underwear, boxers, and sweatshirt)
    hideSpecificCategories([
    "top1",
    "pants1",
    "skirt1",
    "shoes1",
    "jacket1",
    "dress1",
    "hat1",
    "underwear1"
]);

    // Ensure that the required items are explicitly set to visible
    showItem("top1_1.png", "top1"); 
    showItem("top2_1.png", "top2"); 
    showItem("pants2_1.png", "pants2"); 
    showItem("skirt1_1.png", "skirt1"); 
    showItem("shoes1_1.png", "shoes1");
    showItem("shoes2_1.png", "shoes2");
	showItem("underwear1_1.png", "underwear1"); 
}

function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
        selectedItem.style.visibility = "visible"; // Force visibility
        selectedItem.style.display = "block"; // Ensure it's not hidden
        selectedItem.style.position = "absolute"; // Keep absolute positioning
        selectedItem.style.left = "0"; // Ensure alignment
        selectedItem.style.top = "0"; // Reset any displacement
        selectedItem.style.zIndex = getZIndex(categoryName); // Apply correct layering
    } else {
        console.warn(`Item not found: ${itemId} in category ${categoryName}`);
    }
}



function applyUnderwearOnlyPreset() {
    // Hide all clothing items except underwear and boxers
    hideSpecificCategories([
    "top1",
    "pants1",
    "skirt1",
    "shoes1",
    "jacket1",
    "dress1",
    "hat1",
    "underwear1"
]);

    // Ensure top and bottom underwear remain visible
    showItem("underwear1_2.png", "underwear1"); 
    }

function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
        selectedItem.style.visibility = "visible"; // Force visibility
        selectedItem.style.display = "block"; // Ensure it's not hidden
        selectedItem.style.position = "absolute"; // Keep absolute positioning
        selectedItem.style.left = "0"; // Ensure alignment
        selectedItem.style.top = "0"; // Reset any displacement
        selectedItem.style.zIndex = getZIndex(categoryName); // Apply correct layering
    } else {
        console.warn(`Item not found: ${itemId} in category ${categoryName}`);
    }
}

function applyCustomPreset() {
    // Hide all clothing items first
    hideSpecificCategories([
    "top1",
    "pants1",
    "skirt1",
    "shoes1",
    "jacket1",
    "dress1",
    "hat1",
    "underwear1"
]);

    // Show newly uploaded items
    showItem("pants1_1.png", "pants1");
    showItem("top1_1.png", "top1");
    showItem("shoes1_1.png", "shoes1");
	showItem("underwear1_1.png", "underwear1"); 
}


function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
        selectedItem.style.visibility = "visible";
        selectedItem.style.display = "block";
        selectedItem.style.position = "absolute";
        selectedItem.style.left = "0";
        selectedItem.style.top = "0";
        selectedItem.style.zIndex = getZIndex(categoryName);
    } else {
        console.warn(`Item not found: ${itemId} in category ${categoryName}`);
    }
}

function applypiratePreset() {
    // Hide all clothing items first
    hideSpecificCategories([
    "top1",
    "pants1",
    "skirt1",
    "shoes1",
    "jacket1",
    "dress1",
    "hat1",
    "underwear1"
]);

    // Show updated outfit pieces
    showItem("top1_2.png", "top1");
    showItem("pants1_2.png", "pants1");
    showItem("shoes1_2.png", "shoes1");
	showItem("underwear1_1.png", "underwear1"); 
}

function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
        selectedItem.style.visibility = "visible";
        selectedItem.style.display = "block";
        selectedItem.style.position = "absolute";
        selectedItem.style.left = "0";
        selectedItem.style.top = "0";
        selectedItem.style.zIndex = getZIndex(categoryName);
    } else {
        console.warn(`Item not found: ${itemId} in category ${categoryName}`);
    }
}

function applyfashionPreset() {
    // Hide all clothing items first
    hideSpecificCategories([
    "top1",
    "pants1",
    "skirt1",
    "shoes1",
    "jacket1",
    "dress1",
    "hat1",
    "underwear1"
]);

    // Show updated outfit pieces
    showItem("top1_3.png", "top1");
    showItem("pants1_3.png", "pants1");
    showItem("shoes1_3.png", "shoes1");
	showItem("underwear1_1.png", "underwear1"); 
}

function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
        selectedItem.style.visibility = "visible";
        selectedItem.style.display = "block";
        selectedItem.style.position = "absolute";
        selectedItem.style.left = "0";
        selectedItem.style.top = "0";
        selectedItem.style.zIndex = getZIndex(categoryName);
    } else {
        console.warn(`Item not found: ${itemId} in category ${categoryName}`);
    }
}