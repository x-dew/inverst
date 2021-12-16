import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Telephone from "./telephone/telephone";
import Img from './img/units-converter-time-converter.684976947c3d.png'
import Notebook from "./notebook/notebook";


function App() {

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

    console.log(latest.RUB)

    return (
        <div className="App">
            <Telephone/>
            <div className='scoreboard'>
                <div className='scoreboard-date'>
                    <div className='scoreboard-text'>
                        <Notebook
                            currencies={currencies}
                            latest={latest}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
