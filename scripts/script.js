// Create a webpage with a 16x16 grid of square divs.
// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
const container = document.querySelector('#container')
// Create 16 rows of 16 divs arranged in a column
for(a=0; a < 16; a++){
    let gridColumn = document.createElement('div');
    gridColumn.classList.add('gridColumn')
    container.appendChild(gridColumn);
    for(b=0; b < 16; b++){
        let gridRowSquare = document.createElement('div');
        gridRowSquare.classList.add('gridRowSquare');
        gridRowSquare.addEventListener('mouseover', () => {gridRowSquare.classList.add('toggleblack')})
        gridColumn.appendChild(gridRowSquare);
    }
}
const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', () => {reset()})
function reset(){
    container.innerHTML = '';
    let numPerSide = prompt('how many');
    numPerSide = Number(numPerSide);
    console.log(numPerSide);
}
// Add a button to the top of the screen which will clear the current grid and send the user a popup asking
// for the number of squares per side for the new grid. Once entered, the new grid should be generated 
// in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. 
// Tip: Set the limit for the user input to a maximum of 100. 
// A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
