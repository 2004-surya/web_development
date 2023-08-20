//Function to add two numbers and display the result
function calculate(){
    //Get the input values 
    const num1= parseFloat(document.getElementById('num1').value);
    const num2= parseFloat(document.getElementById('num2').value);

    //Check if both inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("please enter valid numbers.");
        return;
    }

    //calculate the sum 
    const sum= num1 + num2;

    //Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Result: ${sum}`;
}