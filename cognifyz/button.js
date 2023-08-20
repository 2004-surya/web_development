//Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color='#';
    for (let i=0;i<6;i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//Function to change the button color when clicked
function changeColor(){
    const colorButton = document.getElementById('colorButton');
    const randomColor = getRandomColor();
    colorButton.style.backgroundColor = randomColor;
}