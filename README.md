## 🚀 Next.js Professional Portfolio | Midterm Project

A high-performance, modular portfolio built with **Next.js 15**, focusing on clean architecture, dynamic routing, and a "Design-to-Code" workflow. This project serves as a comprehensive showcase of web design, full-stack development, and UI/UX principles.

**🔗 Live Demo:** [https://portfolio-midterm-delta.vercel.app/](https://portfolio-midterm-delta.vercel.app/)

---

## ✨ Core Features & Implementation

### 🎨 UI & Design Fidelity
- **Mockup Accuracy:** The UI is a pixel-perfect implementation of the original Figma design, featuring a professional dark-themed aesthetic with high-contrast accents.
- **Theme Support:** Integrated **Light/Dark Mode** functionality by default.
- **Responsive Layout:** Optimized for all device fragments, ensuring a seamless experience from mobile to desktop.

### 🏗️ Advanced Page Architecture
- **Server-First Approach:** Page files are kept lean and do not use `"use client"`. They act strictly as entry points that compose **Section Components**.
- **Separation of Concerns:** All client-side logic and hooks are encapsulated within dedicated components to maximize SEO and performance.

### 🚦 Dynamic Routing & Data
Implemented complex routing structures as per project requirements:
- **Single Dynamic Segments:** Individual blog post pages.
- **Catch-all Segments:** Category pages that handle nested routes without root folder interference.
- **Optional Catch-all Segments:** A robust Date Filter system that scopes the root folder for organized content discovery.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Modern UI/UX with Glassmorphism)
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Deployment:** Vercel

---

## 📂 Component Architecture

Following strict clean code practices, the project is organized into a modular folder structure:

```text
├── app/                  # Lean page files (Server Components)
├── components/
│   ├── common/           # Global elements (Navbar, Footer)
│   ├── features/         # Page-specific modules (Portfolio, Blog, Contact)
│   ├── ui/               # Reusable atomic elements (Buttons, Cards, Badges)
│   └── providers/        # Context providers (ThemeProvider)
├── constants/            # Static data and configuration
├── lib/                  # Utility functions and helper logic
└── public/               # Optimized assets and imagery
```

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/portfolio-midterm.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## 📝 Clean Code Practices
- **Descriptive Naming:** Clear and semantic folder, file, and variable naming conventions.
- **Optimized Componentization:** UI elements are wrapped in components only where beneficial, avoiding "component hell" while maintaining reusability.
- **Type Safety:** Built with a focus on structured data flow and predictable state management.

---

**Developed by Jashen Loberanes** *Web Designer & Developer | Technopreneur*