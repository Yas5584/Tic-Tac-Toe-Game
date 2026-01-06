import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./Winning-Combination";
import GameOver from "./components/GameOver";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
function derrivedCurrentPlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function App() {

  let gameBoard=[...initialGameBoard.map(arr=>[...arr])]
 

  console.log("the array is",[...initialGameBoard])

  // const [activePlayer, setactivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derrivedCurrentPlayer(gameTurns);
  // const gameBoard = initialGameBoard;


  let winner = null;

  for (const turn of gameTurns) {
    console.log("turn is:", turn);
    const { player, square } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const Combination of WINNING_COMBINATIONS) {
    // console.log("combination is", Combination[0])
    const firstSquareSymbol = gameBoard[Combination[0].row][Combination[0].column]
    // console.log("firstsquare symbol ", firstSquareSymbol)
    const secondSquareSymbol = gameBoard[Combination[1].row][Combination[1].column]
    // console.log("second square symbol ", secondSquareSymbol)
    const thirdSquareSymbol = gameBoard[Combination[2].row][Combination[2].column]
    // console.log("third square symbol", thirdSquareSymbol)
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {

      winner = firstSquareSymbol;

    }

  }
const isDraw=gameTurns.length===9  && !winner;  




function handleRestart(){
  setGameTurns([])
  
}


  function handleActiveSquare(rowIdx, colIdx) {
    console.log("clicked", rowIdx, colIdx);
    // setactivePlayer((cureentActivePlayer) => (cureentActivePlayer === 'X' ? 'O' : 'X'));




    setGameTurns((prevTurns) => {
      // let currentPlayer = "X";
      // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "O";
      // }
      const currentPlayer = derrivedCurrentPlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIdx, col: colIdx }, player: currentPlayer }, ...prevTurns]
      console.log(updatedTurns);
      return updatedTurns;
    })

  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
        <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />



      </ol>
      {(winner || isDraw) && <GameOver winner={winner} rematch={handleRestart}/>}
      {/* {isDraw &&<GameOver winner={"draw"} rematch={initialGameBoard}/>} */}
      <GameBoard onSelectSquare={handleActiveSquare} board={gameBoard} winner={winner} />

    </div>
    <Log turns={gameTurns} />

  </main>
}
export default App;
