
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Behandelt das GitHub Pages 404-Umleitungsproblem
(function() {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, "", redirect);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
