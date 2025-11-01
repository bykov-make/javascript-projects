const numberInput = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const output= document.getElementById("results-div")


function showOutput(message, isError=true){
    output.classList.remove("error", "success", "hidden");
    if (isError){
        output.classList.add("error");
    }else {
        output.classList.add("success");
    }
    output.textContent= message;
    output.style.display = "block"
}

function hideOutput(){
    output.style.display = "none";
    output.classList.remove("error", "success");
}

const checkUserInput = () => {

    const inputValue = numberInput.value.trim();

    if (!inputValue){
        alert("Please provide a phone number");
        return;
    }

    /*if(!numberInput.value || isNaN(inputInt)){
      showOutput("Please provide a phone number");
      return;
    }
  */
    const isValid = validatePhoneNumber(inputValue);

    if (isValid){
        showOutput("Valid US number: " + inputValue, false )
    }else {
        showOutput("Invalid US number: " + inputValue)
    }

}

const clearInput = () => {
    numberInput.value = "";
    output.textContent = "";
    hideOutput();
}

const validatePhoneNumber = (phone) => {
    const phoneRegex =  /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    return phoneRegex.test(phone)
}

checkBtn.addEventListener("click", checkUserInput)
clearBtn.addEventListener("click", clearInput)