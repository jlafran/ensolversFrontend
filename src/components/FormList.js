import { useState } from "react";
const FormLists=(props)=> {
    const [name, setName] = useState("");
    const {url}=props;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(name!=""&&name!=null){
        try{
            let res = await fetch(url, {
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
      else{
        alert(`Is empty`)
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