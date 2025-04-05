const container = document.querySelector('.container');
const btn = document.getElementById('btn');
const cleartBtn = document.getElementById('clearBtn');
const colorBtn = document.getElementById('colorBtn');
const grayBtn = document.getElementById('grayBtn');
const blackBtn = document.getElementById('blackBtn');

let currentColor = 'black';
let mode = 'default'; // default, rainbow, etc.

// Function to create the grid
function grid(size) {
    container.innerHTML = '';
    for (let i = 0; i < size; i++) {
        const row = createRow();
        for (let j = 0; j < size; j++) {
            createSquare(row);
        }
    }
}

const createRow = () => {
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    return row;
};

const createSquare = (row) => {
    const square = document.createElement('div');
    square.className = 'square';
    row.appendChild(square);
    square.addEventListener('mouseenter', paintSquare);
};

const paintSquare = (e) => {
    if (mode === 'rainbow') {
        e.target.style.backgroundColor = rainbow();
    }
    else if ( mode === 'grayScale') {
        e.target.style.backgroundColor = grayScale();
    }
    else {
        e.target.style.backgroundColor = currentColor;
    }
};

// Reset the grid colors
cleartBtn.addEventListener("click", () => {
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = 'white';
    });
});

// Grid size input
btn.addEventListener("click", () => {
    let input = parseInt(prompt("Enter a number between 1 and 100"), 10);
    if (input >= 1 && input <= 100) {
        grid(input);
    } else {
        alert("Invalid number, please reload and try again.");
    }
});

// Activate rainbow mode
colorBtn.addEventListener("click", () => {
    mode = 'rainbow';
});

// Activate black mode
blackBtn.addEventListener("click", () => {
    mode = 'default';
    currentColor = 'black';
});

// Activate gray Scale mode
grayBtn.addEventListener("click", () => {
    mode = 'grayScale';
});

// Generate rainbow color
const rainbow = () => `hsl(${Math.floor(Math.random() * 360)}, 90%, 60%)`;

// Generate gray scale color
const grayScale = () => `hsl(0, 0%, ${Math.floor(Math.random() * 100)}%)`;

// Create initial grid
grid(16);