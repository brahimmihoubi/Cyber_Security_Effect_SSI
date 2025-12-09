## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

---

## 🛡️ About The Project

**CyberAI Sentinel** is a modern, interactive dashboard designed to educate users on the complex relationship between Artificial Intelligence and Cybersecurity. It breaks down the topic into three critical sections: **Advantages**, **Risks**, and **Disadvantages**.

Beyond static content, the application integrates a **Generative AI Chatbot** (powered by Google Gemini 2.5 Flash) acting as a "Cybersecurity Analyst Expert." Users can ask specific questions about deepfakes, automated attacks, or defense strategies, receiving instant, context-aware responses.

---

## ✨ Key Features

- **Interactive Dashboard**: Seamlessly switch between Advantages, Risks, and Disadvantages tabs with smooth transitions.
- **AI Chat Assistant**: A floating, collapsible chatbot powered by Google's Gemini 2.5 Flash model, contextually aware of the cybersecurity report.
- **Dynamic UI/UX**: Built with glassmorphism effects, responsive layouts, and fluid animations using Framer Motion.
- **Real-time Streaming**: Chat responses are streamed in real-time for a natural conversational experience.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.

---

## 🛠️ Built With

This project is built using the following technologies:

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Integration**: [Google GenAI SDK](https://www.npmjs.com/package/@google/genai) (Gemini 2.5 Flash)

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/cyberai-sentinel.git
   cd cyberai-sentinel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory (or rename `.env.example` if available).
2. Add your Google Gemini API Key:

   ```env
   API_KEY=your_google_gemini_api_key_here
   ```

   > **Note**: You can get an API key from [Google AI Studio](https://aistudio.google.com/).

3. **Start the development server**
   ```bash
   npm run dev
   ```

---

## 📖 Usage

1. **Explore the Report**: Use the tabs (Advantages, Risks, Disadvantages) to read through the structured analysis of AI in cybersecurity.
2. **Ask the Analyst**: Click the floating robot icon in the bottom-right corner to open the chat interface.
3. **Interact**: Ask questions like:
   - "How does AI help in threat detection?"
   - "What are the risks of deepfakes?"
   - "Explain the cost implications of AI security."

---

## 📂 Project Structure

```
cyberai-sentinel/
├── src/
│   ├── components/
│   │   ├── ChatAssistant.tsx    # Floating AI Chatbot component
│   │   └── CyberCard.tsx        # Card component for displaying points
│   ├── services/
│   │   └── geminiService.ts     # Google Gemini API integration logic
│   ├── App.tsx                  # Main application layout and logic
│   ├── constants.ts             # Static data (Advantages, Risks, etc.) & System Prompts
│   ├── types.ts                 # TypeScript definitions
│   └── main.tsx                 # Entry point
├── .env                         # Environment variables (API Key)
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration
└── vite.config.ts               # Vite configuration
```

---

## 📄 License

Distributed under the ISC License. See `package.json` for more information.
