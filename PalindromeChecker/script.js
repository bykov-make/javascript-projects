const wordInput = document.getElementById("text-input");
const result = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");


const checkPalindrome = () => {
    const word = wordInput.value.trim();

    if (!word){
        alert("Please input a value.")
        return;
    };

    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverseWord = cleanWord.split("").reverse().join("");

    if(cleanWord === reverseWord){
        result.textContent = `${word} is a palindrome.`;
    }else {
        result.textContent = `${word} is not a palindrome`
    }
}

checkBtn.addEventListener('click', checkPalindrome)