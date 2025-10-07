# AI Portfolio

A modern, minimalist AI Portfolio home page built with React and TailwindCSS.

## Features

- ✨ Animated gradient background with soft pastel tones
- 🌅 Time-based greeting (Good morning/afternoon/evening)
- 💬 Glassmorphism-style AI chat input
- 🎯 Interactive category buttons with hover effects
- 📄 Floating CV download button
- 📱 Fully responsive design
- 🎨 Clean, modern UI with Inter and Space Grotesk fonts

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Tech Stack

- **React** - JavaScript library for building user interfaces
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful & consistent icon toolkit
- **Vite** - Fast build tool and development server

## Project Structure

```
src/
├── pages/
│   └── Home.jsx          # Main portfolio page component
├── App.jsx               # Root component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## Customization

- Update the name in the greeting by modifying the `greeting` state in `Home.jsx`
- Replace the avatar placeholder with your own image
- Customize colors by modifying the gradient classes in the component
- Add your own category buttons or modify existing ones

## Future Enhancements

- Backend integration for AI chat functionality
- Dynamic content loading
- User authentication
- Database integration for portfolio data
