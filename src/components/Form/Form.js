import React from "react"
import './Form.css';


export default function Form ({list, setList}){

  const [inputValue, setInputValue] = React.useState("");
  
    function handleToDoChange(event){
    setInputValue(event.target.value);
    }

    function submitTask(e) {
      e.preventDefault();
  setList([...list, 
    inputValue])
  setInputValue(""); 
  }

  return (
<>

<form onSubmit={submitTask}>
<input 
     placeholder="Devo ricordarmi di..." 
     className="inputForm" 
     type="text"
     onChange= {handleToDoChange}
     name= "inputForm"
     value= {inputValue}
     />
     <button type= "submit" className="Aggiungi">Aggiungi</button>
    
</form>



  

</>

  )}