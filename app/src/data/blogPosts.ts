export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-react",
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and build your first component",
    date: "2024-01-15",
    author: "John Doe",
    content: `# Getting Started with React

React is a powerful JavaScript library for building user interfaces. In this post, we'll explore the fundamentals and create our first component.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".

## Creating Your First Component

Here's a simple React component:

\`\`\`jsx
import React from 'react';

function Welcome() {
  return <h1>Hello, World!</h1>;
}

export default Welcome;
\`\`\`

## Using Props

Props allow you to pass data to components:

\`\`\`jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="React Developer" />
\`\`\`

## State Management

React components can have internal state:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## Key Concepts

- **Components**: Reusable UI pieces
- **Props**: Data passed to components
- **State**: Internal component data
- **JSX**: JavaScript syntax extension

Start building amazing user interfaces with React today!`,
  },
  {
    id: "typescript-basics",
    title: "TypeScript Basics for JavaScript Developers",
    excerpt: "A comprehensive guide to TypeScript fundamentals",
    date: "2024-01-20",
    author: "Jane Smith",
    content: `# TypeScript Basics for JavaScript Developers

TypeScript is a superset of JavaScript that adds static typing. Let's explore the basics!

## Why TypeScript?

TypeScript provides:
- **Static typing** for better error detection
- **Enhanced IDE support** with autocomplete
- **Better documentation** through types
- **Safer refactoring**

## Basic Types

\`\`\`typescript
// String
let name: string = "TypeScript";

// Number
let age: number = 25;

// Boolean
let isActive: boolean = true;

// Array
let numbers: number[] = [1, 2, 3, 4, 5];

// Tuple
let tuple: [string, number] = ["hello", 10];

// Object
let person: { name: string; age: number } = {
  name: "John",
  age: 30
};
\`\`\`

## Interfaces

Interfaces define object shapes:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

function createUser(user: User): User {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    isActive: user.isActive || true
  };
}
\`\`\`

## Functions with Types

\`\`\`typescript
// Function with typed parameters and return
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Function with optional parameters
function greet(name: string, greeting?: string): string {
  return greeting ? \`\${greeting}, \${name}!\` : \`Hello, \${name}!\`;
}
\`\`\`

## Generics

Generics provide type safety with flexibility:

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

// Usage
let output1 = identity<string>("myString");
let output2 = identity(42); // Type inference
\`\`\`

## Union Types

\`\`\`typescript
type Status = "loading" | "success" | "error";

function handleStatus(status: Status) {
  switch (status) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log("Success!");
      break;
    case "error":
      console.log("Error occurred");
      break;
  }
}
\`\`\`

TypeScript makes your JavaScript code more robust and maintainable!`,
  },
  {
    id: "css-grid-layout",
    title: "Mastering CSS Grid Layout",
    excerpt: "Learn how to create responsive layouts with CSS Grid",
    date: "2024-01-25",
    author: "Mike Johnson",
    content: `# Mastering CSS Grid Layout

CSS Grid is a powerful layout system that allows you to create complex web layouts with ease.

## Basic Grid Setup

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  height: 100vh;
}
\`\`\`

## Grid Areas

Define named areas for better organization:

\`\`\`css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

## Responsive Grid

\`\`\`css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
\`\`\`

## Grid Functions

\`\`\`css
/* Using repeat() */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* Using minmax() */
.flexible-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

/* Using fit-content() */
.fit-content-grid {
  display: grid;
  grid-template-columns: fit-content(200px) 1fr;
}
\`\`\`

## Grid Alignment

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  
  /* Align items */
  align-items: center;
  justify-items: center;
  
  /* Align content */
  align-content: space-between;
  justify-content: space-around;
}
\`\`\`

## Practical Example

Here's a complete layout example:

\`\`\`html
<div class="layout">
  <header class="header">Header</header>
  <nav class="sidebar">Sidebar</nav>
  <main class="main">Main Content</main>
  <aside class="aside">Aside</aside>
  <footer class="footer">Footer</footer>
</div>
\`\`\`

\`\`\`css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 250px 1fr 200px;
  grid-template-rows: 80px 1fr 100px;
  min-height: 100vh;
  gap: 20px;
  padding: 20px;
}

.header { grid-area: header; background: #f0f0f0; }
.sidebar { grid-area: sidebar; background: #e0e0e0; }
.main { grid-area: main; background: #ffffff; }
.aside { grid-area: aside; background: #e0e0e0; }
.footer { grid-area: footer; background: #f0f0f0; }
\`\`\`

CSS Grid provides incredible flexibility for modern web layouts!`,
  },
];
