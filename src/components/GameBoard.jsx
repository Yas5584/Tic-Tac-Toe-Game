



export default function GameBoard({onSelectSquare,board,winner}){
    // const [gameBoard,setGameboard]=useState(initialGameBoard);
  


    // function handleGameboardClick(rowIdx,colIdx){
    //     // updating state the game board immutably
    //     // setGameboard((prevGameBoard)=>{
    //     //     console.log(...prevGameBoard);
    //     //    const updatedGameBoard=[...prevGameBoard.map((innerarray)=>[...innerarray])];
    //     //    console.log(updatedGameBoard);
    //     //    updatedGameBoard[rowIdx][colIdx]=activePlayerSymbol;
    //     //    console.log(updatedGameBoard);
    //     //    return updatedGameBoard;
    //     // })

    //     // onSelectSquare();
    // }
return(
    <ol id="game-board">
        {board.map((rows,rowindex)=>(<li key={rowindex} >
                <ol>
            {rows.map((value,colindex)=>(
                <li key={colindex} ><button onClick={()=>onSelectSquare(rowindex,colindex)} disabled={value!==null || winner !== null}>{value}</button>
               </li>
                
            )
             ) }
                </ol>
             </li>
            ))}

          

    </ol> 
)


}
