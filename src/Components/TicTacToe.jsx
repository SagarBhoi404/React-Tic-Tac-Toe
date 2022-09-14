import React, { useState } from 'react'
import Square from './Square'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
var Audio_btn_click = new Audio('audio/button-pressed.mp3');
var Audio_btn_reset = new Audio('audio/board-start.mp3');
var Audio_btn_win = new Audio('audio/win.mp3');

const TicTacToe = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setisXTurn] = useState(true);
  const handleOnClick = (index) => {
    Audio_btn_click.play();
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? 'X' : "O";
    setState(copyState)
    setisXTurn(!isXTurn)
  }

  const checkWinner = () => {
    const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let logic of winners) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        Audio_btn_win.play()
        return state[a];
      }
    }

    return false;

  }
  const isWinner = checkWinner();

  const handleReset = () => {
    setState(Array(9).fill(null))
    Audio_btn_win.pause()
    Audio_btn_reset.play()
  }
  return (
    <>
      <div className='Wrapper'>
        <h1 className='Heading'>Tic Tac Toe</h1>
        <div className='Board'>
          {isWinner ? <>
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <h2 style={{ color: "white" }}>🥇 {isWinner} won the game 🥇</h2>
              </div></> :
            <Card >
              <CardContent>
                <h3 style={{ textAlign: 'center' }}> {isXTurn ? "X" : "O"} Turn</h3>
                <div className="Board_row">
                  <Square value={state[0]} onClick={() => handleOnClick(0)}></Square>
                  <Square value={state[1]} onClick={() => handleOnClick(1)}></Square>
                  <Square value={state[2]} onClick={() => handleOnClick(2)}></Square>
                </div>
                <div className="Board_row">
                  <Square value={state[3]} onClick={() => handleOnClick(3)}></Square>
                  <Square value={state[4]} onClick={() => handleOnClick(4)}></Square>
                  <Square value={state[5]} onClick={() => handleOnClick(5)}></Square>
                </div>
                <div className="Board_row">
                  <Square value={state[6]} onClick={() => handleOnClick(6)}></Square>
                  <Square value={state[7]} onClick={() => handleOnClick(7)}></Square>
                  <Square value={state[8]} onClick={() => handleOnClick(8)}></Square>
                </div>
              </CardContent>

            </Card>
          }
        </div>
        <Button variant="contained" color="success" style={{ marginTop: "20px", marginBottom: '20px' }} onClick={handleReset}>{isWinner ? 'Play Again' :'Reset'}</Button>
        <Typography variant="h6" gutterBottom>
          Developed By Sagar Bhoi ❤️
        </Typography>
      </div>
    </>
  )
}

export default TicTacToe