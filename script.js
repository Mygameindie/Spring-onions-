// Array of JSON file paths
const jsonFiles = [
    'underwear1.json',
'onepiece1.json',
'socks1.json',
'expression1.json',
'boxers1.json',
'sweatshirt1.json',
'shoes1.json',
'pants1.json',
'skirt1.json',
'top1.json',
'dress1.json',
'jacket1.json',
'accessories1.json',
'hat1.json'
];

// Helper function to set z-index for categories
function getZIndex(categoryName) {
    const zIndexMap = {
        underwear: 3, 
        onepiece: 5, socks: 5, boxer: 6, sweatshirt: 7, 
        shoe: 8, pants: 9, skirt: 10, top: 11, dress: 12, 
        jacket: 13, accessories: 14, hat: 15
    };
    return zIndexMap[categoryName] || 0;
}

// Load each JSON file
async function loadItemFile(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Error loading file: ${file}`);
        return await response.json();
    } catch (error) {
        console.error(`Failed to load ${file}:`, error);
        return [];
    }
}

// Load items in batches to reduce load time and improve responsiveness
async function loadItemsInBatches(batchSize = 3) {
    const baseContainer = document.querySelector('.base-container');
    const controlsContainer = document.querySelector('.controls');
    
    for (let i = 0; i < jsonFiles.length; i += batchSize) {
        const batch = jsonFiles.slice(i, i + batchSize);

        await Promise.all(batch.map(async file => {
            const data = await loadItemFile(file);
            const categoryName = file.replace('.json', '');
            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('category');

            const categoryHeading = document.createElement('h3');
            categoryHeading.textContent = categoryName;
            categoryContainer.appendChild(categoryHeading);

            data.forEach(item => {
                const itemId = item.id.endsWith('.png') ? item.id : `${item.id}.png`;

                const img = document.createElement('img');
                img.id = itemId;
                img.src = item.src;
                img.alt = item.alt;
                img.classList.add(categoryName);
                img.setAttribute('data-file', file);
                img.style.visibility = item.visibility === "visible" ? "visible" : "hidden";
                img.style.position = 'absolute';
                img.style.zIndex = getZIndex(categoryName);
                baseContainer.appendChild(img);

                const button = document.createElement('img');
                const buttonFile = item.src.replace('.png', 'b.png');
                button.src = buttonFile;
                button.alt = item.alt + ' Button';
                button.classList.add('item-button');
                button.onclick = () => toggleVisibility(itemId, categoryName);
                categoryContainer.appendChild(button);
            });

            controlsContainer.appendChild(categoryContainer);
        }));

        await new Promise(resolve => setTimeout(resolve, 0.1));
    }
}

// Toggle visibility of item images, ensuring mutual exclusivity
function toggleVisibility(itemId, categoryName) {
    const categoryItems = document.querySelectorAll(`.${categoryName}`);
    categoryItems.forEach(item => {
        if (item.id !== itemId) {
            item.style.visibility = 'hidden';
        }
    });

    const selectedItem = document.getElementById(itemId);
    selectedItem.style.visibility = selectedItem.style.visibility === 'visible' ? 'hidden' : 'visible';

    if (selectedItem.style.visibility === 'visible') {
        if (categoryName === 'onepiece1') {
            hideSpecificCategories(['topunderwear1', 'bottomunderwear1']);
        } else if (categoryName === 'dress1') {
            hideSpecificCategories(['top1', 'pants1', 'skirt1', 'sweatshirt1']);
        } else if (categoryName === 'dress2') {
            hideSpecificCategories(['top2', 'pants2', 'skirt2', 'sweatshirt2']);
        } else if (categoryName.startsWith('top1') || categoryName.startsWith('pants1') || categoryName.startsWith('skirt1') || categoryName.startsWith('sweatshirt1')) {
            hideSpecificCategories(['dress1']);
        } else if (categoryName.startsWith('top2') || categoryName.startsWith('pants2') || categoryName.startsWith('skirt2') || categoryName.startsWith('sweatshirt2')) {
            hideSpecificCategories(['dress2']);
		}else if (categoryName === 'topunderwear1', 'bottomunderwear1' ) {
            hideSpecificCategories(['onepiece1']);
        }
    }
}

// Helper function to hide items for specific categories
function hideSpecificCategories(categories) {
    categories.forEach(category => {
        const items = document.querySelectorAll(`.${category}`);
        items.forEach(item => {
            item.style.visibility = 'hidden';
        });
    });
}

function adjustCanvasLayout() {
    const baseContainer = document.querySelector('.base-container');
    const controlsContainer = document.querySelector('.controls');
    const screenWidth = window.innerWidth;

    requestAnimationFrame(() => {
        if (screenWidth <= 600) {
            baseContainer.classList.add('mobile-layout');
            baseContainer.classList.remove('desktop-layout');
            controlsContainer.classList.add('mobile-controls');
            controlsContainer.classList.remove('desktop-controls');
        } else {
            baseContainer.classList.add('desktop-layout');
            baseContainer.classList.remove('mobile-layout');
            controlsContainer.classList.add('desktop-controls');
            controlsContainer.classList.remove('mobile-controls');
        }
    });
}

// Load items and adjust layout on window load
window.onload = () => {
    loadItemsInBatches();
    adjustCanvasLayout();
};

window.addEventListener('resize', adjustCanvasLayout);

// Function to start the game (hide menu, show game)

// Function to start the game (hide menu, show game)
function enterGame() {
    document.querySelector('.main-menu').style.display = 'none';
    document.querySelector('.game-container').style.display = 'block';
}

// Function to remove focus from button after interaction
function blurButton(event) {
    event.preventDefault(); // Prevent default focus behavior
    event.target.blur(); // Remove focus from the button
}

// Function for Button 1: Show Base2 on press, hide on release
function pressButton1(event) {
    blurButton(event);
    document.getElementById("base2-image").style.display = "block";
}

function releaseButton1(event) {
    blurButton(event);
    document.getElementById("base2-image").style.display = "none";
}

// Function for Button 2: Show Base3 on press, hide on release
function pressButton2(event) {
    blurButton(event);
    document.getElementById("base3-image").style.display = "block";
}

function releaseButton2(event) {
    blurButton(event);
    document.getElementById("base3-image").style.display = "none";
}

// Add event listeners to buttons (Support Desktop & Mobile)
document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.querySelector(".button-1");
    const button2 = document.querySelector(".button-2");

    // Button 1 (Base2)
    button1.addEventListener("mousedown", pressButton1);
    button1.addEventListener("mouseup", releaseButton1);
    button1.addEventListener("touchstart", pressButton1, { passive: false });
    button1.addEventListener("touchend", releaseButton1, { passive: false });

   
});

