import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    
    const RenderCard=(todo,index)=>{
        const handleSubmit = async (event) => {
            event.preventDefault();
            try{
                let res = await fetch(`http://localhost:8080/api/listItems/${todo.id}?name=${todo.name}`, {
                  method: "PUT",
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                  body: JSON.stringify({
                    name: todo.name,
                  }),
                });
                
                alert(`The name you entered was: ${todo.name}`)
                window.location.reload(false)
                
            }
            catch (err) {
                console.log(err);
            }
            
          }
  
        const updateFieldChanged = index => e => {
            console.log(todo.name)
          console.log('index: ' + index);
          console.log('property name: ' + e.target.name);
          let newArr = [...todos]; // copying the old datas array
          newArr[index].name = e.target.value; // replace e.target.value with whatever you want to change it to
          setTodos(newArr);
        }

        const handleDelete = async (event) => {
          event.preventDefault();
          try{
              let res = await fetch(`http://localhost:8080/api/listItems/${todo.id}`, {
                method: "DELETE",
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              },
                body: JSON.stringify({
                  name: todo.name,
                }),
              });
              
              alert(`The name you deleted was: ${todo.name}`)
              window.location.reload(false)
              
          }
          catch (err) {
              console.log(err);
          }
        }

          return(
                <div >
                    <h4 key={index} > <Link to={{pathname: '/items',state:{todo}}} >{todo.name}</Link></h4>
                    <form key={index} onSubmit={handleSubmit}>
                        <label>Edit Name:
                            <input type="text" name="name" value={todo.name} onChange={
                                updateFieldChanged(index)}/>
                            <input type="submit" />
                        </label>
                    </form>
                    <button onClick={handleDelete} >Delete</button>
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