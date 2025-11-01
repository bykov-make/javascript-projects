const numberInput= document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function showOutput(message, isError=true){
    output.style.color = isError ? "var(--error-color)" : "var(--success-color)";
    output.textContent = message;
    output.classList.remove("hidden")
}

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value.trim())

    if (!numberInput.value || isNaN(inputInt)){
        showOutput("Please enter a valid number.");
        return;
    }
    if (inputInt < 1){
        showOutput("Please enter a number greater than or equal to 1");
    }else if (inputInt > 3999){
        showOutput("Please enter a number less than or equal to 3999");
    }else{
        showOutput(convertToRoman(inputInt),false)
    }
}


const convertToRoman = (num) => {
    const romanNum = [{value: 1000, conv: 'M'},
        {value: 900, conv: 'CM'},
        {value: 500, conv: 'D'},
        {value: 400, conv: 'CD'},
        {value: 100, conv: 'C'},
        {value: 90, conv: 'XC'},
        {value: 50, conv: 'L'},
        {value: 40, conv: 'XL'},
        {value: 10, conv: 'X'},
        {value: 9, conv: 'IX'},
        {value: 5, conv: 'V'},
        {value: 4, conv: 'IV'},
        {value: 1, conv: 'I'}]

    let result = '';

    for(const {value, conv} of romanNum){
        while (num >= value){
            console.log(num)
            result += conv;
            num -=value;
        }
    }
    return result;


}


btn.addEventListener("click",checkUserInput)