# Roman Numeral Converter 🔢➡️🏛️

A web application that converts numbers between modern Arabic numerals and ancient Roman numerals.

## ✨ Features

- **Range Validation**: Handles numbers from 1 to 3999 (standard Roman numeral range)
- **Input Validation**: Checks for empty inputs, non-numbers, and out-of-range values
- **Visual Feedback**: Color-coded results (green for success, red for errors)
- **Clean Algorithm**: Efficient conversion using subtraction method
- **User-Friendly**: Clear error messages for invalid inputs

## 🚀 How to Use

1. Enter any number between 1 and 3999
2. Click the "Convert" button
3. See the Roman numeral equivalent displayed

## 📊 Conversion Examples

| Arabic Number | Roman Numeral |
|---------------|---------------|
| 1             | I             |
| 4             | IV            |
| 9             | IX            |
| 49            | XLIX          |
| 99            | XCIX          |
| 499           | CDXCIX        |
| 999           | CMXCIX        |
| 2024          | MMXXIV        |
| 3999          | MMMCMXCIX     |

## 🛠️ How It Works

The conversion algorithm uses a **greedy subtraction approach**:
- Starts with the largest Roman numeral values (1000 = M)
- Subtracts the value from the input number
- Builds the result string by concatenating symbols
- Continues with progressively smaller values

## ⚠️ Validation Rules

- **Empty input**: "Please enter a number"
- **Non-numbers**: "Please enter a valid number"
- **Numbers < 1**: "Please enter a number greater than or equal to 1"
- **Numbers > 3999**: "Please enter a number less than or equal to 3999"

## 💡 Technical Details

- **Built with**: HTML5, CSS3, Vanilla JavaScript
- **Algorithm**: Greedy subtraction with predefined numeral values
- **Styling**: CSS custom properties for consistent theming
- **Accessibility**: Proper ARIA labels and semantic HTML

## 🎯 Why 3999?
Roman numerals traditionally don't go beyond 3999 (MMMCMXCIX) as there's no standard symbol for 5000 in basic Roman numeral system.