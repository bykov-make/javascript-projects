const numberInput= document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkUserInput = () => {
    const inputStr = parseInt(numberInput.value)

    if(inputStr === 0 || inputStr ===""){
        output.style.color = "var(--error-color)";
        output.textContent = "Please enter a number";
        output.classList.remove("hidden");
        return;
    }

    const inputInt = parseInt(numberInput.value)
    if (!numberInput.value || isNaN(inputInt)){
        output.style.color = "var(--error-color)";
        output.textContent = "Please enter a valid number";
        output.classList.remove("hidden");
    }else if (inputInt < 0){
        output.style.color = "var(--error-color)";
        output.textContent = "Please enter a number greater than or equal to 1";
        output.classList.remove("hidden")
    }else if (inputInt >= 4000){
        output.style.color = "var(--error-color)  ";
        output.textContent = "Please enter a number less than or equal to 3999";
    }else{
        output.style.color = "var(--success-color)"
        output.textContent = convertToRoman(inputInt)
        output.classList.remove("hidden")
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