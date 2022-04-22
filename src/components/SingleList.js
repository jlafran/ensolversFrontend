import { useState } from "react";
export default function SingleLists(todo, index) {
const [name, setName] = useState("");
    
        const handleSubmit = async (event,todo) => {
          event.preventDefault();
          
          try{
              let res = await fetch(`http://localhost:8080/api/listItems/${todo.id}?name=${name}`, {
                method: "PUT",
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              },
              });
    
              setName("");
              alert(`The name you entered was: ${name}`)
              window.location.reload(false)

          }
          catch (err) {
              console.log(err);
          }

        }

        return(
              <div >
                  <h4>{todo.name}</h4>
                  <form  key={index} 
                          onSubmit={handleSubmit}>
                      <label>Edit
                          <input  key={index} 
                              type="text" 
                              value={name}
                              onChange={(e,todo) => setName(e.target.value)} />
                              </label>
                              <input type="submit" />
                  </form>
                  <button>Delete</button>
              </div>
        )
    }