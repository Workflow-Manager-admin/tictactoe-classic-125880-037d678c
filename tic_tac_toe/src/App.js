import React from 'react';
import './App.css';
import TicTacToe from './TicTacToe'; // Import the TicTacToe component

// PUBLIC_INTERFACE
/**
 * The main application component.
 * Renders the TicTacToe game.
 * @returns {JSX.Element} The App component.
 */
function App() {
  return (
    <div className="app">
      <header>
        <h1>Tic Tac Toe Classic</h1>
      </header>
      <main>
        <TicTacToe />
      </main>
    </div>
  );
}

export default App;