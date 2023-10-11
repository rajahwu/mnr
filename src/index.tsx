import { createRoot } from "react-dom/client";
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    }
  }
}

const App = () => {
  return <div>Hello react</div>
}

const container = document.getElementById("app")

if (container) {
  const root = createRoot(container)
  root.render(<App />)
} else {
  console.error("Element with id 'app' not found")
}
