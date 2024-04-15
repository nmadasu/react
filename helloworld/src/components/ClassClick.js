import React, { Component } from 'react'

export class ClassClick extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hello"
        }
        // third approach
        // this.clickHandler=this.clickHandler.bind(this)
    }
    // 1st 2nd and 3rd approach
    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    //     //this is undefined in class  component so event binding is necessary
    //     console.log(this);
    // }
    
    //4th approach
    clickHandler=()=>{
        this.setState({
            message:'Goodbye'
        })
    } 
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* to handle the this it is the first approach */}
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                
                {/*secondapproach  */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}

                {/* third approach and it also approach in the official document */}
                {/* <button onClick={this.clickHandler}>CLick</button> */}

                {/* 4th approach */}
                <button onClick={this.clickHandler}>CLick</button>
            </div>
        )
    }
}

export default ClassClick
