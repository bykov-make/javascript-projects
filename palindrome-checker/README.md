# Palindrome Checker 🔁

A web application that checks whether a word or phrase is a palindrome - meaning it reads the same forwards and backwards.

## ✨ Features

- **Real-time Validation**: Checks if input is empty before processing
- **Case Insensitive**: Treats uppercase and lowercase letters as the same
- **Special Character Handling**: Ignores punctuation, spaces, and special characters
- **Clean UI**: Simple, intuitive interface with clear results

## 🚀 How to Use

1. Enter any word or phrase in the input field
2. Click the "Check" button
3. See immediately if your text is a palindrome

## 📝 Examples of Palindromes

- **Words**: "racecar", "level", "radar"
- **Phrases**: "A man, a plan, a canal: Panama"
- **Numbers**: "12321"
- **Case Variations**: "RaceCar", "MaDaM"

## 🛠️ How It Works

The algorithm:
1. Converts input to lowercase
2. Removes all non-alphanumeric characters (punctuation, spaces)
3. Reverses the cleaned string
4. Compares original and reversed strings

## 💡 Technical Details

- **Built with**: HTML5, CSS3, Vanilla JavaScript
- **Input Cleaning**: Uses regex `/[^a-z0-9]/g` to remove non-alphanumeric characters
- **String Reversal**: `split('').reverse().join('')` method

## 🎯 Try These Test Cases
- "racecar" ✅ (palindrome)
- "hello" ❌ (not a palindrome)
- "A man, a plan, a canal: Panama" ✅ (palindrome)
- "12321" ✅ (palindrome)

