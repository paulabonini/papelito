import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './global.css'
import App from './App.tsx'
import { TeamsContextProvider } from './Contexts/TeamsContext/index.tsx';
import { WordsProvider } from './Contexts/WordsContext/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TeamsContextProvider>
        <WordsProvider>
          <App />
        </WordsProvider>
      </TeamsContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
