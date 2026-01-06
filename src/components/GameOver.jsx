export default function GameOver({winner,rematch}){

    return(

         <div id="game-over">
            <h2>Game Over</h2>
            {winner &&<p>Winner is : {winner}</p>}
            {!winner &&<p>Its a Draw</p>}

            <button onClick={rematch}>Rematch!</button>


         </div>


    )
}