import React, { Component } from "react";
//snipet to create for class component is rce
//snipet to create a constructor is rconst
//class components
// class Welcome extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

//destructing the props and states
class Welcome extends Component {
    render() {
        const{name,heroName}=this.props
        // const{stat1,state2}=this.state
        return (
            <div>
                <h1>Welcome {name} a.k.a {heroName}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome