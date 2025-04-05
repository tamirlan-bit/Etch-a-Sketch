console.log("JS works");
const container = document.querySelector('.container');
const btn = document.getElementById('btn');
const input = document.getElementById('inputSize');
const resetBtn = document.getElementById('resetBtn');


function grid(size) {
    for ( let i=0 ; i<size ; i++) {
        const row = createRow();
        for (let j=0 ; j<size ; j++){
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
    e.target.style.backgroundColor = 'lightgreen'; 
  };
const checkInput = (num) => {

}

btn.addEventListener("click", () => {
    const size = input.value;
    checkInput(size);
    grid(size);
  }); 

resetBtn.addEventListener("click", () => {
    for (const item of document.querySelectorAll('.square')){
        item.style.backgroundColor = 'white';
    };
    
});

/*
 


*/