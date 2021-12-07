import React from "react";
import './header.css'

const Header = ()=>{
    return(
        <div>
            <ul className='header'>
                <li>Home</li>
                <li>About</li>
                <li>Documentation</li>
                <li>Playground</li>
            </ul>
        </div>
    )
}

export default Header