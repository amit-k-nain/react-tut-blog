import React,{Component} from "react";

export default class DemoClassComponent extends Component
{
    constructor(){
        super();
        this.state={
            // name:"Amit",
            count:1
        }

        this.counter = this.counter.bind(this);
    }

    // name()
    // {
    //     this.setState({name:this.state.name+" Kumar Nain"});
    // }

    counter()
    {
        // this.name();
        this.setState({count:this.state.count+1});
    }

    render(){
        return(
            <div className="App">
                <h1> {this.state.count}</h1>
                <button onClick={this.counter}>Update Me</button>
            </div>
        );
    }
}