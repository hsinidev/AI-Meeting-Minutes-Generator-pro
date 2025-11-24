# 🚀 AI Meeting Minutes Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmeeting.doodax.com&label=Live%20Demo)](https://meeting.doodax.com)

**Effortless Documentation for the Modern Professional.**

The AI Meeting Minutes Generator is a high-performance, client-side web application designed to transform chaotic meeting notes into structured, professional Markdown templates instantly. Built with React, TypeScript, and Tailwind CSS, it offers a secure, privacy-first solution for Project Managers, Developers, and Agile teams.

---

### 🌟 [LIVE DEMO: meeting.doodax.com](https://meeting.doodax.com) 🌟

---

## ✨ Key Features

*   **🔒 Privacy First:** 100% Client-side processing. Your meeting data never leaves your browser.
*   **⚡ Instant Generation:** Real-time Markdown formatting as you type.
*   **🌌 Immersive UX:** Features a stunning, animated galaxy background with a glassmorphism UI.
*   **📝 Smart Action Items:** Dynamic task management with owners and deadlines (SMART goals compliant).
*   **💾 Flexible Export:** One-click Copy to Clipboard or simulate DOCX download.
*   **📱 Fully Responsive:** Optimized for Desktop, Tablet, and Mobile.
*   **🔍 SEO Optimized:** Includes rich JSON-LD Schema and semantic HTML5 structure.

## 📂 Project Structure

```bash
ai-meeting-minutes-generator/
├── components/          # React UI Components
│   ├── Layout.tsx       # Main wrapper, Galaxy Background, Footer
│   ├── Modal.tsx        # Reusable Pop-up logic
│   ├── MinutesGenerator.tsx # Main application logic & Form
│   └── SeoArticle.tsx   # SEO Content block & Schema
├── lib/
│   └── TemplateGenerator.ts # Pure TS logic for Markdown parsing
├── public/              # Static Assets
│   ├── favicon.svg      # Branding
│   ├── robots.txt       # Crawler directives
│   └── sitemap.xml      # SEO Sitemap
├── App.tsx              # Application Entry & State
├── index.html           # HTML5 Shell & Meta Tags
├── index.tsx            # React DOM Mount
└── README.md            # Documentation
```

## 🛠️ Technology Stack

*   **Frontend:** React 18+ (via ES Modules)
*   **Styling:** Tailwind CSS (CDN)
*   **Language:** TypeScript
*   **Animation:** HTML5 Canvas API

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/hsinidev/meeting-minutes-generator.git
    ```
2.  **Serve:**
    Since this uses ES Modules and CDN imports, you do not need `npm install`. Simply serve the root directory.
    ```bash
    npx live-server
    ```

## 🤝 Contributing

Contributions are welcome! Please submit a Pull Request or open an Issue.

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
  <strong>Powered by <a href="https://github.com/hsinidev">HSINI MOHAMED</a></strong><br>
  Part of the <a href="https://doodax.com">Doodax.com</a> Ecosystem.
</div>
