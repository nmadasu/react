import React from 'react'
import './Stylesheet.css'

function Stylesheet(props) {

  let className=props.primary? 'primary':''
  return (
    // to use more than one css class 
    // <div>
    //   <h1 className='primary font-xl'>Stylesheets</h1>
    // </div>
    <div>
    <h1 className={`${className} font-xl`}>Stylesheets</h1>
  </div>
  )
}

export default Stylesheet
