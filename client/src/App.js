import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Quotes from './components/Quotes';
import { NavBar } from './components/NavBar/NavBar';

import { useState } from 'react';
import { SearchResultsList } from './components/NavBar/SearchResultsList';

function App() {

  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const handleResultClick = (result) => {
    setSelectedResult(result);
  };

  return (
    <div className="App">
      <div className='search-bar-container'>
        <NavBar setResults={setResults} />
        <SearchResultsList results={results} onResultClick={handleResultClick} />
      </div>
      <Quotes selectedResult={selectedResult}/>
    </div>
  );
}

export default App;
