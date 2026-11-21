# Srujan K S – Software Engineer Portfolio

A premium, interactive, and responsive portfolio website designed for **Srujan K S**, Computer Science Engineering student and aspiring Software Engineer based in Bengaluru, India.

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Live Demo & Preview

- **Local Preview**: `http://localhost:4173/`
- **Flagship Project**: **AgriOS** – AI-Assisted Agricultural Procurement Platform
- **Full-Stack Project**: **E-Commerce Web Application Platform**

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion 11](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🌟 Key Features

1. **Cinematic Hero Section**:
   - Dynamic cycling roles (*Software Engineer, Full-Stack Developer, Backend Developer, Problem Solver*).
   - Interactive developer code window with clickable architecture, auth route, and runtime tabs.
   - Quick resume download and 1-click email copy.

2. **Interactive AgriOS Architecture Visualizer**:
   - Layered architecture breakdown: `Client Layer` → `API Gateway` → `Auth & RBAC` → `Controllers` → `Services` → `Repositories` → `PostgreSQL Database`.
   - Stakeholder procurement workflow: `Farmer` → `Buyer` → `Warehouse` → `Logistics` → `Admin`.

3. **Interactive E-Commerce Platform Mockup**:
   - Working real-time search, category filtering, cart incrementor, and subtotal calculation.
   - REST API and database schema badges.

4. **"Experience Through Building" Timeline**:
   - Transparent, project-based engineering journey documenting full-stack architecture, database design, API engineering, and security practices.

5. **Technical Arsenal & Skills**:
   - Categorized cards across Programming Languages, Frontend, Backend, Databases, Tools & DevOps, Cloud, and CS Fundamentals.
   - Zero misleading progress bars.

6. **Academic Background & Certifications**:
   - BMS Institute of Technology and Management (CGPA: 8.41 / 9.02).
   - AWS Certified Cloud Practitioner & NPTEL Large Language Models.

7. **"Beyond the Code"**:
   - Data Structures & Algorithms focus areas (LeetCode / C++).
   - Sleek decorative GitHub contribution visual.

8. **Validated Contact Form & Mail Client Integration**:
   - Full client-side validation for Name, Email, Subject, and Message.
   - Pre-formatted mailto trigger with 1-click copy fallback.

---

## ⚙️ Central Configuration

All personal details, URLs, social links, resume link, projects, and skills are centrally configured in:
```
src/data/portfolioData.ts
```
To update your links or resume:
1. Open `src/data/portfolioData.ts`.
2. Update `PORTFOLIO_CONFIG.socialLinks`:
   - `github`: Your GitHub profile URL
   - `linkedin`: Your LinkedIn profile URL
   - `leetcode`: Your LeetCode profile URL
   - `email`: Your primary email address
   - `resumeUrl`: Path to your resume PDF (e.g. `/Srujan_K_S_Resume.pdf`)

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/srujanks/portfolio.git
cd srujan_portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📦 Deployment

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod
```

---

© 2026 Srujan K S. All rights reserved.
