import React, { Component } from "react";

//always make use of setstate and never  modify the state directly
//code has to be excuted after the state has been updated ? place the code in the call back function which is the second argument to set statemethod
//when u have to update state based on the previous state value, pass  in a function as a argument instead of the regular object 
//class components
class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        //react call mutiple setstate for single update for better performance
        // this.setState({
        //     count: this.state.count + 1
        // },
        //     () => {
        //         console.log('Callback value:', this.state.count);
        //         //the increment value is getting in the console only in the callback function 
        //     })
        this.setState((prevState, props) =>  ({
            count:prevState.count+1
        }),()=>{
            console.log('Callback value:', this.state.count);
        })
        console.log(this.state.count);// not getting the exact value
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count -{this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter