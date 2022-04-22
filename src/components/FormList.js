import { useState } from "react";
const FormLists=()=> {
    const [name, setName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            let res = await fetch("http://localhost:8080/api/listItems", {
              method: "POST",
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
              body: JSON.stringify({
                name: name,
              }),
            });
    
            setName("");
            alert(`The name you entered was: ${name}`)
            window.location.reload(false)
            
        }
        catch (err) {
            console.log(err);
        }
        
      }


    return (

      <form onSubmit={handleSubmit}>
        <label>Enter your name:

          <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} />

        </label>
        <input type="submit" />
      </form>

    )
  }

  export default FormLists