import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "./header/header";


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
                setLatest(res.data)
            })

    }, [])

    return (
        <div className="App">
            <Header/>
            <div className='scoreboard'>
                <div className='scoreboard-date'>

                </div>
            </div>
        </div>
    );
}

export default App;
