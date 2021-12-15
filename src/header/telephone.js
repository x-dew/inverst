import React, {useEffect, useState} from "react";
import './telephone.css'
import img from '../img/logoTwo.png'
import logo from '../img/logo.png'
import axios from "axios";
import CNY from '../img/cny.png'
import RUS from '../img/rus.png'
import BRL from '../img/brl.png'
import AED from '../img/arl.png'
import KZT from '../img/krz.jpg'

const Telephone = () => {

    const [currencies, setCurrencies] = useState([])
    const [latest, setLatest] = useState([])
    useEffect(() => {
        axios.get('https://openexchangerates.org/api/currencies.json ')
            .then(res => {
                setCurrencies(res.data)
            })
        axios.get('https://openexchangerates.org/api/latest.json?app_id=870e2799faff44f68cc10d618ec6e5e3')
            .then(res => {
                setLatest(res.data.rates)
            })

    }, [])

    return (
        <div className='telephone'>
            <div className='logo'>
                <img src={img} alt=""/>
                <img className='logotype' src={logo} alt=""/>
            </div>

            <div className='telPartOne telFlex'>
                <div className='telPartTwo telFlex'>
                    <div className='telParThree telFlex'>
                        <div className='telParFour telFlex'>
                            <div className='telParFive'>
                                <div className='telParFive-line'>
                                    <div className='telParFive-line__microphone'></div>
                                </div>
                                <h1>Курсы валют</h1>
                                <div className='courses'>

                                    {
                                        (Object.keys(latest)).map(data => <div className='countryСourses'>
                                            <div className='country'>
                                                <img
                                                    src={`https://wise.com/public-resources/assets/flags/rectangle/${data.toLowerCase()}.png`}
                                                    alt=""/>
                                                <div>
                                                    <h5>{data}</h5>
                                                </div>
                                            </div>
                                            <div className='courseComparison'>
                                                <p>{latest[data]}</p>
                                                <p className='textMargin'>{data}</p>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Telephone