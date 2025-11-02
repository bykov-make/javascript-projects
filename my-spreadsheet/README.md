# JavaScript Spreadsheet Application 📊

A functional spreadsheet application built with vanilla JavaScript that supports mathematical operations, custom functions, and cell referencing.

## ✨ Features

### Mathematical Operations
- Basic arithmetic: `+`, `-`, `*`, `/`
- Operator precedence handling
- Support for decimal numbers

### Built-in Functions
- **Math**: `sum`, `average`, `median`, `increment`, `random`
- **Statistical**: `even`, `someeven`, `everyeven`
- **Array Manipulation**: `firsttwo`, `lasttwo`, `nodupes` (remove duplicates)
- **Validation**: `has2` (check if array contains 2)

### Cell Referencing
- Reference cells using Excel-style notation (A1, B2, etc.)
- Range support (A1:B10)
- Automatic formula evaluation

## 🚀 Usage

1. **Basic Math**: `=5+3*2`
2. **Cell References**: `=A1+B2`
3. **Functions**: `=SUM(A1:A10)`
4. **Ranges**: `=AVERAGE(A1:B5)`

## 📝 Supported Functions

| Function | Description | Example |
|----------|-------------|---------|
| `SUM` | Sum of values | `=SUM(1,2,3)` → 6 |
| `AVERAGE` | Average of values | `=AVERAGE(1,2,3)` → 2 |
| `MEDIAN` | Median value | `=MEDIAN(1,2,3)` → 2 |
| `EVEN` | Filter even numbers | `=EVEN(1,2,3,4)` → [2,4] |
| `RANDOM` | Random number in range | `=RANDOM(1,10)` → random 1-10 |
| `NODUPES` | Remove duplicates | `=NODUPES(1,2,2,3)` → [1,2,3] |

## 🛠️ Technical Details

- **Grid Size**: A-J columns × 1-99 rows
- **Formula Syntax**: Start with `=`
- **Range Syntax**: `A1:B5`
- **Precedence**: Multiplication/division before addition/subtraction

## 🎯 Example Formulas
- `=A1+SUM(B1:B10)*2`
- `=MEDIAN(A1:A20)`
- `=RANDOM(1,100)`
- `=AVERAGE(A1,B2,C3)`

## 💡 Getting Started
Open `index.html` in your browser and start entering formulas in any cell!


(Yes, this readme was helpfully improved by AI.)