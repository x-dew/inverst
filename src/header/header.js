import React from "react";
import './header.css'
import img from '../img/pngwing.com.png'

const Header = () => {
    return (
        <div className='logo'>
            <img src={img} alt=""/>
            <div className='telPartOne telFlex'>
                <div className='telPartTwo telFlex'>
                    <div className='telParThree telFlex'>
                        <div className='telParFour telFlex'>
                            <div className='telParFive telFlex'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header