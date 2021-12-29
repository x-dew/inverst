import React, {useEffect, useState} from "react";
import './telephone.css'
import img from '../img/logoTwo.png'
import logo from '../img/converLogo.png'
import axios from "axios";
import CNY from '../img/cny.png'
import RUS from '../img/rus.png'
import BRL from '../img/brl.png'
import AED from '../img/arl.png'
import KZT from '../img/krz.jpg'
import ExchangeRates from "./exchangeRates/exchangeRates";

const Telephone = () => {

    return (
        <div className='telephoneBlock'>
            <div className='telPartOne telFlex'>
                <div className='telPartTwo telFlex'>
                    <div className='telParThree telFlex'>
                        <div className='telParFour telFlex'>
                            <div className='telParFive'>
                                <div className='telParFive-line'>
                                    <div className='telParFive-line__microphone'></div>
                                </div>
                                <ExchangeRates/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Telephone