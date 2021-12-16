import React from 'react'
import './HomeHeader.css'
import {Link} from "react-router-dom"

function HomeHeader() {
    return (
        <div className="homeHeader">
            <div className="homeHeader__left">
                <Link to ="/">
                <img src="https://www.freepnglogos.com/pics/logo-facebook.png" alt="Facebook Logo" className="homeHeader__logo" />
                </Link>

            </div>
            
        </div>
    )
}

export default HomeHeader


