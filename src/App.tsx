import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import RulesPage from './Pages/Rules';
import TeamsPage from './Pages/Teams';
import WordsPage from './Pages/Words';
import GamePage from './Pages/Game';

function App() {
return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/words" element={<WordsPage />} />
        <Route path="/jogo" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App
