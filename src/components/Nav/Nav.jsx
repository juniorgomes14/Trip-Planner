import React from "react"
import {Link} from "react-router-dom"
export const  NavLink =({url,title}) => {
    return(
        <>
        <NavLinkWapper>
        <Link to={url}>{title}</Link>
        </NavLinkWapper>
        
        </>
    )
 }
  