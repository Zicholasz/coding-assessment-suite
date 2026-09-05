# 📚 Final Assessment - JavaScript Mastery

A comprehensive coding assessment project showcasing **advanced JavaScript concepts** including code quality, testing, object-oriented programming, recursion, and real-world scenarios. This repository demonstrates professional-grade development practices and problem-solving skills.

## 📋 Project Overview

This assessment consists of 7 modules covering essential and advanced JavaScript topics:

### Core Modules (Required)

1. **Writing Comments** - Best practices for code documentation
2. **Code Style** - Consistent, readable, and maintainable code patterns
3. **Writing Tests** - Unit testing with Jest framework

### Advanced Modules (Optional)

4. **Object-Oriented Programming (OOP)** - Classes, inheritance, and design patterns
5. **Recursive Functions** - Factorial and Fibonacci implementations
6. **Full Coverage Testing** - Comprehensive test suites with high coverage
7. **Real-World Scenario** - E-commerce order management system

## 🎯 Learning Objectives

This project demonstrates proficiency in:

- ✅ **Code Quality** - Comments, naming conventions, and style consistency
- ✅ **Testing** - Unit tests, test cases, edge cases, and coverage reports
- ✅ **OOP Principles** - Classes, methods, inheritance, encapsulation
- ✅ **Functional Programming** - Recursion, pure functions, immutability
- ✅ **Problem Solving** - Real-world application implementation
- ✅ **Best Practices** - Industry-standard patterns and conventions
- ✅ **Debugging** - Error handling and edge case management

## 🛠️ Tech Stack

- **Language**: JavaScript (ES6+)
- **Testing Framework**: Jest
- **Runtime**: Node.js >= 14.x
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/javascript-mastery-assessment.git
   cd javascript-mastery-assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 📁 Project Structure

```
final-assessment/
├── 01-writing-comments/
│   ├── index.js          # Commented code examples
│   └── instruksi.md      # Module instructions
│
├── 02-code-style/
│   ├── index.js          # Code style implementation
│   └── instruksi.md      # Style guidelines
│
├── 03-writing-test/
│   ├── index.js          # Function implementations
│   ├── index.test.js     # Jest test suite
│   ├── package.json
│   └── instruksi.md      # Testing requirements
│
├── optional-04-oop/
│   ├── Item.js           # Item class
│   ├── Inventory.js      # Inventory management system
│   ├── main.js           # Usage examples
│   ├── package.json
│   └── instruksi.md      # OOP requirements
│
├── optional-05-recursive/
│   ├── factorial.js      # Factorial function
│   ├── fibonacci.js      # Fibonacci sequence
│   ├── main.js           # Test implementations
│   ├── package.json
│   └── instruksi.md      # Recursion requirements
│
├── optional-06-full-coverage-testing/
│   ├── index.js          # Complex functions
│   ├── index.test.js     # Full test coverage suite
│   ├── package.json
│   └── instruksi.md      # Coverage requirements
│
└── optional-07-real-world-scenario/
    ├── orders.js         # Order processing logic
    ├── main.js           # Application entry point
    ├── package.json
    └── instruksi.md      # Real-world requirements
```

## 🚀 Running Modules

### 1. Writing Comments
```bash
cd 01-writing-comments
node index.js
```
Demonstrates effective code documentation practices.

### 2. Code Style
```bash
cd 02-code-style
node index.js
```
Shows consistent naming conventions and code formatting.

### 3. Writing Tests
```bash
cd 03-writing-test
npm install
npm test
```
Includes unit tests using Jest framework.

### 4. Object-Oriented Programming
```bash
cd optional-04-oop
npm install
node main.js
```
Inventory management system using classes and OOP principles.

### 5. Recursive Functions
```bash
cd optional-05-recursive
npm install
node main.js
```
Calculates factorials and Fibonacci sequences recursively.

### 6. Full Coverage Testing
```bash
cd optional-06-full-coverage-testing
npm install
npm test
```
Comprehensive test suite with coverage reporting.

### 7. Real-World Scenario
```bash
cd optional-07-real-world-scenario
npm install
node main.js
```
E-commerce order management system.

## 📚 Module Details

### Module 1: Writing Comments
**Key Concepts:**
- JSDoc style comments
- Inline explanations
- Function documentation
- Complex logic explanation

**Files:** `01-writing-comments/index.js`

### Module 2: Code Style
**Key Concepts:**
- camelCase naming convention
- Consistent indentation
- Single quotes for strings
- Semicolon usage
- Function and variable naming standards

**Files:** `02-code-style/index.js`

### Module 3: Writing Tests
**Key Concepts:**
- Test case structure
- Assertion testing
- Edge case handling
- Jest framework usage
- Test naming conventions

**Files:** 
- `03-writing-test/index.js` - Implementation
- `03-writing-test/index.test.js` - Test suite

**Run tests:**
```bash
npm test
```

### Module 4: Object-Oriented Programming
**Key Concepts:**
- Class definition
- Constructor methods
- Instance methods
- Class properties
- Inheritance principles
- Encapsulation

**Classes:**
- `Item` - Product item representation
- `Inventory` - Inventory management

**Features:**
- Add/remove items
- Stock tracking
- Item searching
- Inventory totals

### Module 5: Recursive Functions
**Key Concepts:**
- Base case definition
- Recursive case implementation
- Call stack understanding
- Performance considerations

**Functions:**
- `factorial(n)` - Calculates n!
- `fibonacci(n)` - Returns nth Fibonacci number

### Module 6: Full Coverage Testing
**Key Concepts:**
- Edge case testing
- Boundary testing
- Error condition testing
- Coverage metrics
- Test reports

**Coverage Goals:** 100% function and line coverage

**View coverage report:**
```bash
npm test -- --coverage
```

### Module 7: Real-World Scenario
**Key Concepts:**
- Practical implementation
- Business logic
- Data validation
- Error handling
- System architecture

**Features:**
- Order creation
- Order processing
- Customer management
- Payment handling
- Shipping tracking

## 🧪 Running Tests

### Run all tests
```bash
npm test
```

### Run tests with coverage
```bash
npm test -- --coverage
```

### Run specific test file
```bash
npm test -- filename.test.js
```

### Watch mode
```bash
npm test -- --watch
```

## 📊 Code Quality Standards

This project follows:

- **ESLint Configuration**: Dicoding Academy standards
- **Code Style**: ES6+ best practices
- **Naming Convention**: camelCase for variables/functions, PascalCase for classes
- **Comments**: JSDoc format for functions
- **Testing**: Jest with >80% coverage goal
- **Error Handling**: Try-catch blocks where appropriate

## ✅ Assessment Criteria

Each module is evaluated on:

1. **Correctness** - Functions produce expected output
2. **Readability** - Clear, self-documenting code
3. **Documentation** - Proper comments and explanations
4. **Testing** - Comprehensive test coverage
5. **Best Practices** - Following JavaScript conventions
6. **Edge Cases** - Handling unusual inputs
7. **Performance** - Efficient implementations

## 🎓 Key Learnings

This assessment project demonstrates:

- Advanced JavaScript knowledge
- Professional coding practices
- Test-driven development
- System design thinking
- Problem-solving approach
- Code documentation skills
- Quality assurance mindset

## 📝 License

MIT License - Use for educational purposes.

## 👤 Author

**Nicholas Karsono**

## 🤝 Contributing

This is an assessment project, but contributions and suggestions are welcome.

## 📞 Questions?

For questions about specific modules or implementation details, refer to each module's `instruksi.md` file.

---

**Excellence through continuous learning and practice** 📚✨
