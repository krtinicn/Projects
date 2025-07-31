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
        square.dataset.darkness = 0
        square.addEventListener("mouseover", () => {
            let darkness = Number(square.dataset.darkness);
            if (darkness < 10) {
                darkness += 1;
                square.dataset.darkness = darkness;
                // const r = Math.floor(Math.random() * 256); // 0–255
                // const g = Math.floor(Math.random() * 256);
                // const b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgba(0, 0, 0, ${darkness / 10})`;
        }});
        container.appendChild(square);
    }
});

