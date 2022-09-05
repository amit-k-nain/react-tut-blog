import React,{Component} from "react";

export default class StudentClassComponent extends Component
{
    constructor(){
        super();
        this.state={
            name:"Amit",
            // count:1
        }

        this.updateName = this.updateName.bind(this);
    }

    updateName()
    {
        this.setState({name:this.state.name+" Kumar Nain"});
    }

    // counter()
    // {
    //     // this.name();
    //     this.setState({count:this.state.count+1});
    // }

    render(){
        return(
            <div className="App">
                <h1> {this.state.name}</h1>
                <button onClick={this.updateName}>Update Name</button>
            </div>
        );
    }
}