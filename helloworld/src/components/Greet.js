import React from "react";

//snipet to create for fuction component is rfce

// function Greet(){
//     return <h1>Hello Sanjeev</h1>
// }

// export const Greet=()=><h1>Hello Sanjeev</h1>

//function components

// export const Greet=(props)=>{
//     return (
//     <div>
//     <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//         {props.children}
//     </div>)
// }

//destructing of props in function component using E6
//method 1
// export const Greet=({name,heroName})=>{
//     return (
//     <div>
//     <h1>Hello {name} a.k.a {heroName}</h1>
//     </div>)
// }

//method 2
export const Greet = (props) => {
    const { name, heroName } = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {props.children}
        </div>)
}

// export default Greet