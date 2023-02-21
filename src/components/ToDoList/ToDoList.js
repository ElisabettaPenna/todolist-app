import React from "react"
import './ToDoList.css';

export default function ToDoList ({list, setList}){

const [isDisabled,setIsDisabled] = React.useState(true)

    function removeTask(i){
        let newList = [...list]
        newList.splice(i, 1)
        setList(newList)
    }

function changeTask(e, i){
    let newList = [...list]
    newList[i] = e.target.value
    setList(newList)
}

const taskList=  
    list.map((task, i) =>{
  return (
   <li key={i} >
         <input className="task" id={"task" + i} value = {task} onChange={(e)=>changeTask(e,i)} disabled={isDisabled}/>   
              <div className="buttons">
                  <button type="button" className="modifica" onClick={()=>(setIsDisabled(!isDisabled))}>
                      {isDisabled?
                        <img src="./edit.png" alt="modifica"/> :
                        <img src="./save.png" alt="salva"/>  
                      }
                  </button>
                  <button type= "button" className="removeTask" onClick= {() =>removeTask (i)}>
                       <img src="./trash.png" alt="cancella"/>  
                  </button>
             </div>
 
    </li>
  )})
 

return (
<>
<main>   
<ul className="taskList">
   <div className="wrapper">
    {taskList}
   </div>
</ul>
</main>
</>
 )
}


