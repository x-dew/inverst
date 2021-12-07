import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "./axios/axios";

function App() {
    const [state, setState] = useState([])
    const [stateTwo, setStateTwo] = useState([])
    const [action, setAction] = useState('')
    console.log(state)



    useEffect(() => {
        axios.get('https://www.breakingbadapi.com/api/characters')
            .then(res => {
                setState(res.data)
            })
        axios.get('https://breakingbadapi.com/api/death')
            .then(res => {
                setStateTwo(res.data.map(value=>{return  value}).sort((a,b)=>{return  a.death_id-b.death_id}))
            })
    }, [])

    /* const instanceAxios = axios.create({
         baseURL: 'https://passwordutility.net:80/api/password/',
         timeout: 1000,
         headers: {'Accept': 'application/json'}
     });

         instanceAxios.post('generate',{
             length: 25,
             upperCase: true,
             digits: false,
             specialCharacters: true
         })
             .then(res => console.log(res))
             .catch(error => console.log(error))*/

    console.log(stateTwo.length)
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
                <h1>The Breaking Bad</h1>
                <div className='card'>
                    {
                        state.map((value, key) => {
                            return <div className='cardData'>
                                <div onClick={() => {
                                    action === '' ? setAction(value.char_id) : setAction('')
                                }} className="cardDataPosition">
                                    <div style={{width: "30px"}} className="positionLine"></div>
                                    <div style={{width: "40px"}} className="positionLine"></div>
                                    <div style={{width: "22px"}} className="positionLine"></div>
                                </div>
                                <img className='cardImg' src={value.img} alt=""/>
                                <div
                                    className={action === value.char_id ? 'cardText cardTextAfter cardTextTop' : 'cardText cardTextAfter'}>
                                    <p style={{fontWeight: '700'}}>{value.name}</p>
                                    <div className='nickName'>
                                        <img style={{width: '30px'}}
                                             src={'https://images-na.ssl-images-amazon.com/images/I/31NhsG8XFpL._SX425_.jpg'} alt=""/>
                                        <p>{value.nickname}</p>
                                    </div>
                                    <div
                                        className={action === value.char_id ? 'cardTextTopDisabled cardTextTitle' : 'cardTextTopDisabled'}>
                                        <div className='cardTitle'>
                                            <p style={{fontWeight: '700'}}>Id</p>
                                            <p style={{fontSize: '13px'}}>{value.char_id}</p>
                                        </div>
                                        <div className='cardTitle'>
                                            <p style={{fontWeight: '700'}}>Occupation</p>
                                            <p style={{fontSize: '13px'}}>{value.occupation}</p>
                                        </div>
                                        <div className='cardTitle'>
                                            <p style={{fontWeight: '700'}}>Breaking Bad Seasons</p>
                                            <p style={{fontSize: '13px'}}>{value.appearance.join()}</p>
                                        </div>
                                        <div className='cardTitle'>
                                            <p style={{fontWeight: '700'}}>Status</p>
                                            <p style={{fontSize: '13px'}}>{value.status}</p>
                                        </div>
                                        <div className='cardTitle'>
                                            <p style={{fontWeight: '700'}}>{'Cause of death'}</p>
                                            <p style={{fontSize: '13px'}}>{stateTwo[key].cause}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }).slice(Math.floor(Math.random() * (13 - 12 +1)) + 12)
                    }
                </div>

            </header>
        </div>
    );
}

export default App;
