import React, { useState, useEffect } from 'react';

// PUBLIC_INTERFACE
/**
 * Represents a single square on the Tic Tac Toe board.
 * @param {object} props - The properties for the Square component.
 * @param {string} props.value - The value of the square ('X', 'O', or null).
 * @param {function} props.onClick - The function to call when the square is clicked.
 * @returns {JSX.Element} A button representing a square.
 */
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

// PUBLIC_INTERFACE
/**
 * Represents the Tic Tac Toe game board.
 * @returns {JSX.Element} The Tic Tac Toe game component.
 */
function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState('Next player: X');

  // PUBLIC_INTERFACE
  /**
   * Handles a click on a square.
   * @param {number} i - The index of the clicked square.
   */
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  // PUBLIC_INTERFACE
  /**
   * Resets the game to its initial state.
   */
  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setStatus('Next player: X');
  }

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setStatus('Winner: ' + winner);
    } else if (squares.every(square => square !== null)) {
      setStatus('Draw!');
    } else {
      setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
    }
  }, [squares, xIsNext]);

  // PUBLIC_INTERFACE
  /**
   * Renders a single square.
   * @param {number} i - The index of the square to render.
   * @returns {JSX.Element} The rendered square.
   */
  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }

  return (
    <div className="tic-tac-toe-container">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

// PUBLIC_INTERFACE
/**
 * Calculates the winner of the Tic Tac Toe game.
 * @param {Array<string|null>} squares - The current state of the board squares.
 * @returns {string|null} 'X', 'O', or null if there is no winner yet.
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
