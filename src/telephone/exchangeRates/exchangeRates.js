import React from "react";
import img from "../../img/logoTwo.png";
import axios from "axios";
import {useEffect,useState} from "react";
import './exchangeRates.css'

const ExchangeRates = () => {

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
        <div className='exchangeRates'>
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
    )
}

export default ExchangeRates