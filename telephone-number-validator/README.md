# US Telephone Number Validator 📞✅

A web application that validates US telephone numbers in various common formats.

## ✨ Features

- **Multiple Format Support**: Validates various US phone number formats
- **Real-time Validation**: Instant feedback on number validity
- **Visual Indicators**: Color-coded results (green for valid, burgundy for invalid)
- **Input Clearing**: One-click clearing of input and results
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 How to Use

1. Enter a phone number in any supported format
2. Click the "Check Phone" button to validate
3. See immediate feedback on whether the number is valid
4. Use "Clear Phone" to reset the input and results

## 📋 Supported Formats

The validator accepts these US phone number formats:

- `1 555-555-5555`
- `1 (555) 555-5555`
- `1(555)555-5555`
- `1 555 555 5555`
- `5555555555`
- `555-555-5555`
- `(555)555-5555`

## 🎯 Validation Rules

- **Optional country code**: "1" at the beginning (with or without space)
- **Area code**: 3 digits, with or without parentheses
- **Separators**: Optional spaces or hyphens between number groups
- **Format**: Must match standard US telephone number patterns
- **Empty input**: Triggers an alert asking for a phone number

## 💡 Technical Details

- **Built with**: HTML5, CSS3, Vanilla JavaScript
- **Validation**: Regular expression pattern matching
- **Styling**: CSS custom properties with elegant grey-scale theme
- **User Experience**: Clear visual feedback with success/error states
- **Accessibility**: Semantic HTML and proper form labeling

## 🎨 Design Features

- **Clean Interface**: Minimalist design with centered layout
- **Color Coding**:
    - **Success**: Olive green theme for valid numbers
    - **Error**: Burgundy theme for invalid numbers
- **Responsive**: Adapts to different screen sizes
- **Professional**: Grey-scale color scheme with thoughtful typography

## 🔧 Validation Logic

The application uses a robust regular expression to validate numbers:
- Handles optional country code (1)
- Supports parentheses around area code
- Allows various separator formats (spaces, hyphens, or none)
- Ensures proper digit grouping (3-3-4 pattern)

## ⚠️ Error Handling

- **Empty Input**: Alert message prompting for input
- **Invalid Format**: Clear error message with the invalid number displayed
- **User Feedback**: Immediate visual response after validation

---

*Note: This validator specifically checks for US telephone number formats and may not validate international number patterns.*