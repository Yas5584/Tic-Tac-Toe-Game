import { useState } from "react";
export default function Player({name, symbol,isActive}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputvalue, setInputvalue] = useState(name);

  function handleEdit() {
    setIsEditing(isEditing => !isEditing);
    
  }
  const handleChange = (e) => {
    setInputvalue(e.target.value);
  }

  
let playerName=<span className="player-name">{inputvalue}</span>
if (isEditing) {

    playerName=<input type="text" defaultValue={name} onChange={handleChange}/>
}



 return (
     <>
    
     <li className={isActive ? "active" : undefined}>
          <span className="player-name">{playerName}</span>
          <span className="player-name">{symbol}</span>
          <button onClick={handleEdit}>{isEditing? "Save":"Edit"}</button>
          
        </li>
        </>



   

 )

}