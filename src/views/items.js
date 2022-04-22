import React from "react";
import Item from "../components/Item";

class Items extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:this.props.location.state.todo,
        }

    }

    render(){
        return (
            <>
        <Item value={this.state.value} />

        </>
        )
    }

};

export default Items;