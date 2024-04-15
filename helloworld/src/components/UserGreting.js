import React, { Component } from 'react'

export class UserGreting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogged: true
        }
    }
    // if else
    // render() {
    //     if (this.state.isLogged == true) {
    //         return (
    //             <div>
    //                 Welcome Sanjeev
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div>
    //                 Welcome Guests
    //             </div>)
    //     }

    // }

    // variable
    // render() {
    //     let message
    //     if (this.state.isLogged == true) {
    //             message = <div>Welcome Sanjeev  </div>
    //     } else {
    //             message = <div>Welcome Guests</div>
    //     }
    //     return <div>{message}</div>
    // }

    //terinary
    // render() {
    //     return this.state.isLogged ? (
    //         <div>Welcome Sanjeev</div>
    //     ) : (
    //         <div> Welcome Guests</div>
    //     )
    // }

    // short circuit operator
    render(){
        return this.state.isLogged && <div> Hello Sanjeev</div>
    }
}

export default UserGreting
