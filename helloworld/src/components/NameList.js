import React from 'react'
import PersonList from './PersonList'
function NameList() {

    const persons=[
        {
            id:1,name:'Sanjeev',age:27,profession:'Software Engineer'
        },
        {
            id:2,name:'Janu',age:24,profession:'Actor'
        },
        {
            id:3,name:'Rahul',age:28,profession:'Lawyer'
        }
    ]
// if value should use in the samefunction only
//     const personList=persons.map(person=><h2> I am {person.name}. I am {person.age}. I am {person.profession}</h2>)
//   return (
//     <div>
//       {personList}
//     </div>
//   )
// // }

//     // passing values to the another component
//     const personList=persons.map(person=>(
//         <PersonList key={person.id} person={person}></PersonList>
//     ))
//   return (
//     <div>
//       {personList}
//     </div>
//   )

//when to use indes as key
// the item in  ur list dont have a unique id
// the list is a static list will not change
// the list never reordered or filtered 
    const name=['Sanjeev','Janu','Rahul','Sanjeev']
    const nameList=name.map((name,index)=><h2 key={index}>{index} {name}</h2>)
    return(
        <div>
            {nameList}
        </div>
    )
}

export default NameList
