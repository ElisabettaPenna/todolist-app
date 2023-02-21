import React from "react"
import './App.css';
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import ToDoList from "./components/ToDoList/ToDoList";
import Footer from "./components/Footer/Footer";

function App() {
  

    const [list, setList] = React.useState([])
    
    
  return (

    <div className="App">
    <Navbar />
    <Form 
    list={list}
    setList={setList}
    />
    <ToDoList 
    list={list}
    setList={setList}
    />
    <Footer 
    list={list}
    setList={setList}
    />
    </div>
  );
}

export default App;
