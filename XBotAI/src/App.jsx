import './App.css';
import ChatPage from "./Pages/ChatPage";
import HistoryPage from "./Pages/HistoryPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
}

export default App;
