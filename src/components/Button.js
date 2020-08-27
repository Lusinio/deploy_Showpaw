import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'
function Button(props) {
  return (

    <Link to={props.Link} className='btn-primary'>
      {props.name}
    </Link >

  )
}
export default Button;
