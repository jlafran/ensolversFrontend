import { useEffect, useState } from "react";
import FormLists from "./FormList";

const Item = (props) => {
    const folder=props.value
    const id=folder.id
    const [listItems, setListItems] = useState()

    const fetchApi= async () =>{

        const response= await fetch(`http://localhost:8080/api/listItems/${id}/item`,
                            {method: 'GET',
                            mode: 'cors',
                            headers: {
                                Accept: 'application/json',
                              'Content-Type': 'application/json'
                            }})
        const JSONDATA= await response.json()
        setListItems(JSONDATA)
    }
    
    useEffect(()=>{
        fetchApi()
    },[])

    const RenderCard=(item,index)=>{
        const handleSubmit = async (event) => {
            event.preventDefault();
            try{
                let res = await fetch(`http://localhost:8080/api/item/${item.id}?name=${item.name}`, {
                  method: "PUT",
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                  body: JSON.stringify({
                    name: item.name,
                  }),
                });
                
                alert(`The name you entered was: ${item.name}`)
                window.location.reload(false)
                
            }
            catch (err) {
                console.log(err);
            }
            
          }

        const updateFieldChanged = index => e => {
            console.log(item)
          console.log('index: ' + index);
          console.log('property name: ' +item.name);
          let newArr = [...listItems]; // copying the old datas array
          newArr[index].name = e.target.value; // replace e.target.value with whatever you want to change it to
          setListItems(newArr);
        }

        const handleDelete = async (event) => {
            event.preventDefault();
            try{
                let res = await fetch(`http://localhost:8080/api/listItems/${id}/item/${item.id}`, {
                  method: "DELETE",
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                  body: JSON.stringify({
                    name: item.name,
                  }),
                });
                
                alert(`The name you deleted was: ${item.name}`)
                window.location.reload(false)
                
            }
            catch (err) {
                console.log(err);
            }
          }

          return(
                <div className="wrapper-item-card">
                    <h4 key={index} className="medium" > {item.name}</h4>

                    <form key={index} onSubmit={handleSubmit}>
                        <label className="regular">Edit Name:
                            <input type="text" className="input" name="name" value={item.name} onChange={
                                updateFieldChanged(index)}/>
                            <input  className="regular button" type="submit" value={"Change"} />
                        </label>
                    </form>
                    <button className="semibold "onClick={handleDelete} >Finished</button>
                </div>
          )
    }

    return (
        <>
            <div className="items">
                <h1 className="bold" >List: {folder.name}</h1>
                {!listItems ? "Cargando..." :
                listItems.map(RenderCard)}
                <FormLists url={`http://localhost:8080/api/listItems/${id}/item`}/>
                <button className="delete"><a href="/">Back</a></button>
            </div>
        </>
    )
  }
  
  export default Item