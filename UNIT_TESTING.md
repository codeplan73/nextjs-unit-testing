# 🧪 Next.js Notes App — Unit Testing Practice

This is a simple project built with **Next.js** focused on learning and practicing **unit testing** using **React Testing Library** and **Jest**.

## 📌 Project Overview

The application is a minimal notes app that allows users to:

- Add notes
- Fetch and display data from an external API
- Render UI based on fetched data

For API integration, the project uses data from:

- https://jsonplaceholder.typicode.com

The primary goal of this project is **not feature complexity**, but to understand how to properly write, structure, and run unit tests in a modern React/Next.js environment.

---

## 🚀 Key Features

- ✅ Add notes functionality
- ✅ Fetch data using `fetch` API
- ✅ Display API data in UI
- ✅ Fully unit-tested components and logic
- ✅ Mocked API calls for deterministic testing

---

## 🧪 Testing Focus

This project emphasizes:

### 1. Component Testing

- Rendering components correctly
- Verifying UI updates based on state/props
- Testing user interactions (click, input, etc.)

### 2. API Mocking

- Mocking `fetch` calls to avoid real network requests
- Using controlled mock data for predictable tests
- Ensuring components behave correctly with mocked responses

### 3. Isolation

- Each unit test focuses on a single piece of logic
- External dependencies (like APIs) are mocked

---

## 🛠️ Tech Stack

- **Next.js**
- **React**
- **Jest**
- **React Testing Library**

---

## 📂 Example Test Cases

Some of the scenarios covered:

- Rendering the notes list
- Adding a new note
- Fetching and displaying API data
- Handling loading and error states
- Mocking API responses using `jest.fn()` or `global.fetch`

---

## 🔧 Running the Project

```bash
npm install
npm run dev
```
