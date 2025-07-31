const container = document.querySelector(".container")

const btn = document.querySelector(".grid-size")

btn.addEventListener("click", () => {
    let gridSize;
    // Keep prompting until valid input
    while (true) {
        gridSize = prompt("Enter grid size: (can't be larger than 100)");
        if (gridSize > 0 && gridSize <= 100 && !isNaN(gridSize)) {
            gridSize = Number(gridSize);
            break;
        }
        alert("Invalid grid size. Please enter a number between 1 and 100.");
    }

    container.innerHTML = ""

    const squareSize = 100 / gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "lightgreen";
        });
        container.appendChild(square);
    }
});

