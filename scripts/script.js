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
        gridRowSquare.addEventListener('mouseover', () => {gridRowSquare.classList.toggle('toggleblack')})
        gridColumn.appendChild(gridRowSquare);
    }
}
