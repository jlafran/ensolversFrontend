import React from "react";
import Lists from "../components/Lists";

class ListItems extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listItems:[]
        };
    }

    render(){
        return (
        <Lists />
        )
    }

};

export default ListItems;