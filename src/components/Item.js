import { useEffect, useState } from "react";

const Item = (props) => {
    const lists=props.value
    const id=lists.id
    const [list, setList] = useState()

    const fetchApi= async () =>{

        const response= await fetch(`http://localhost:8080/api/listItems/${id}/item`,
                            {method: 'GET',
                            mode: 'cors',
                            headers: {
                                Accept: 'application/json',
                              'Content-Type': 'application/json'
                            }})
        const JSONDATA= await response.json()
        setList(JSONDATA)
    }
    
    useEffect(()=>{
        fetchApi()
    },[])

    const RenderCard=(item,index)=>{
          return(
                <div >
                    {console.log(item)}
                    <h4 key={index} > {item.name}</h4>
                </div>
          )
    }

    return (
        <>
            <div>
                <h1>{lists.name}</h1>
                {!list ? "Lista vacia" :
                list.map(RenderCard)}

            </div>
        </>
    )
  }
  
  export default Item