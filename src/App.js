import React from 'react';
import './App.css';
import StarWarsProvider from './contexts/StarWarsProvider';
import Filters from './components/Filters';
import Table from './components/Table';

function App() {
  return (
    <StarWarsProvider>
      <main>
        <Filters />
        <Table />
      </main>
    </StarWarsProvider>
  );
}

export default App;
