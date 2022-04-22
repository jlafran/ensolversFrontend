import { useEffect, useState } from "react";
import ServerConfig from "../config/serverConfig";
import FormLists from "./FormList";
const Lists = () => {
    const [todos, setTodos] = useState()

    const fetchApi= async () =>{

        const response= await fetch('http://localhost:8080/api/listItems',
                            {method: 'GET',
                            mode: 'cors',
                            headers: {
                                Accept: 'application/json',
                              'Content-Type': 'application/json'
                            }})
        const JSONDATA= await response.json()
        setTodos(JSONDATA)
    }
    
    useEffect(()=>{
        fetchApi()
    },[])
    
    const [name, setName] = useState("");
    const RenderCard=(todo,index)=>{
  
        const updateText = (e, index) => {
            console.log(e.target.value,index);
            const newName = [...name];
            console.log(newName);
            newName[index][e.target.value] = e.target.value;
            setName(newName)
          }
        

          return(
                <div >
                    <h4 key={index} >{todo.name}</h4>
                    <form >

                    <input type="text" 
                        value={name}
                        onChange={(e) => updateText(e, index)} />
                    <input type="submit" />
                    </form>
                    <button>Delete</button>
                </div>
          )
    }
    

    return (
        <>
            <div>
                <h1>To-Do List</h1>
                {!todos ? "Cargando..." :
                todos.map(RenderCard)}

                <FormLists/>
                
            </div>
        </>
    )
  }
  
  export default Lists