// Sample block data stored in JSON format
const blockData = [
    { id: 1, name: "Block 1", color: "white", image: "./images/stone.webp" },
    { id: 2, name: "Block 2", color: "white", image: "./images/birch-wood.webp" },
    { id: 3, name: "Block 3", color: "white", image: "./images/birch-planks.webp" },
    { id: 4, name: "Block 4", color: "white", image: "./images/brick.webp" },
    { id: 5, name: "Block 5", color: "brown", image: "./images/dirt.webp" },
    { id: 6, name: "Block 6", color: "white", image: "./images/leaves.webp" },
    { id: 7, name: "Block 7", color: "brown", image: "./images/oak-planks.webp" },
    { id: 8, name: "Block 8", color: "brown", image: "./images/oak-wood.webp" },
    { id: 9, name: "Block 9", color: "white", image: "./images/smooth-stone.webp" },
    { id: 10, name: "Block 10", color: "brown", image: "./images/spruce-wood.webp" },
    // Add more block data as needed
];

// Function to display the modal popup with block options
function openBlockModal(containerId) {
    const modal = document.getElementById("blockModal");
    const modalContent = modal.querySelector(".modal-content");
    modalContent.innerHTML = ""; // Clear previous block options

    // Get the color of the previously selected block in the palette
    const previousColor = document.getElementById(containerId)?.dataset.color;

    // Filter available blocks based on the color relationship of the previous block
    const availableBlocks = blockData.filter(block => block.color === previousColor || !previousColor);

    availableBlocks.forEach(block => {
        const image = document.createElement("img");
        image.src = block.image;
        image.alt = block.name;
        image.addEventListener("click", () => {
            addBlockToPalette(containerId, block);
            modal.style.display = "none"; // Hide modal after block selection
        });
        modalContent.appendChild(image);
    });

    modal.style.display = "block"; // Display modal
}

// Function to add block to the palette
function addBlockToPalette(containerId, block) {
    const container = document.getElementById(containerId);
    container.style.backgroundImage = `url(${block.image})`; // Set background image
    container.dataset.color = block.color; // Set color data attribute
    // container.classList.add('filled'); // Mark container as filled
    // Disable unavailable blocks based on color relationships
    // const remainingContainers = document.querySelectorAll('.block-container:not(.filled)');
    // remainingContainers.forEach(container => {
    //     if (container.dataset.color !== block.color) {
    //         container.classList.add('disabled');
    //     }
    // });
    
}



// Event listener for block container clicks
document.querySelectorAll('.block-container').forEach(container => {
    container.addEventListener('click', () => {
        if (!container.classList.contains('filled') && !container.classList.contains('disabled')) {
            openBlockModal(container.id);
        }
    });
});



// function testJson() {
    
//     for (let i = 0; i < blockData.length; i++) {
//         console.log("id = " + blockData[i].id + " Colour = " + blockData[i].color);
//     }
// }