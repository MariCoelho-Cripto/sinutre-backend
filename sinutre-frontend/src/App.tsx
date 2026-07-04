import { Router } from "./routes";
import './themes.css';  // ← ADICIONE ESTA LINHA
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div data-theme="sinutre">  {/* ← ADICIONE ESTA LINHA */}
      <BrowserRouter>
        {/* Seu app */}
      </BrowserRouter>
    </div>
  );
}

export default App;

export default function App() {
  return <Router />;
}
