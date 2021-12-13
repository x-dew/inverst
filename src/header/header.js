import React, {useEffect, useState} from "react";
import './header.css'
import img from '../img/pngwing.com.png'
import axios from "axios";
import CNY from '../img/cny.png'
import RUS from '../img/rus.png'
import BRL from '../img/brl.png'
import AED from '../img/arl.png'
import KZT from '../img/krz.jpg'

const Header = () => {

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
        <div className='logo'>
            <img src={img} alt=""/>
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
                                    <div className='countryСourses'>
                                        <div className='country'>
                                            <img src={CNY} alt=""/>
                                            <div>
                                                <h5>CNY</h5>
                                                <p>Китайский юань</p>
                                            </div>
                                        </div>
                                        <div className='courseComparison'>
                                            <p>{latest.CNY}</p>
                                            <p className='textMargin'>CN¥</p>
                                        </div>
                                    </div>
                                    <div className='countryСourses'>
                                        <div className='country'>
                                            <img src={RUS} alt=""/>
                                            <div>
                                                <h5>RUS</h5>
                                                <p>Россиские рубли</p>
                                            </div>
                                        </div>
                                        <div className='courseComparison'>
                                            <p>{latest.RUB}</p>
                                            <p className='textMargin'>₽</p>
                                        </div>
                                    </div>
                                    <div className='countryСourses'>
                                        <div className='country'>
                                            <img src={BRL} alt=""/>
                                            <div>
                                                <h5>BRL</h5>
                                                <p>Бразильский реал</p>
                                            </div>
                                        </div>
                                        <div className='courseComparison'>
                                            <p>{latest.BRL}</p>
                                            <p className='textMargin'>$</p>
                                        </div>
                                    </div>
                                    <div className='countryСourses'>
                                        <div className='country'>
                                            <img src={AED} alt=""/>
                                            <div>
                                                <h5>AED</h5>
                                                <p>Эмиратский дирам</p>
                                            </div>
                                        </div>
                                        <div className='courseComparison'>
                                            <p>{latest.AED}</p>
                                            <p className='textMargin'>.د.إ • Dh</p>
                                        </div>
                                    </div>
                                    <div className='countryСourses'>
                                        <div className='country'>
                                            <img src={KZT} alt=""/>
                                            <div>
                                                <h5>KZT</h5>
                                                <p>Казахский тенге</p>
                                            </div>
                                        </div>
                                        <div className='courseComparison'>
                                            <p>{latest.KZT}</p>
                                            <p className='textMargin'>₸</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header