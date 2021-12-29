import React, {useState} from "react";
import './notebook.css'
import Vector from '../img/vector.png'
import img from "../img/logoTwo.png";


/*${data.toLowerCase()}*/

const Notebook = ({currencies, latest}) => {

    const [actionBtn, setActionBtn] = useState(0)
    const [actionBtnTwo, setActionBtnTwo] = useState(0)

    const [actionIndex, setActionIndex] = useState(121)
    const [actionIndexTwo, setActionIndexTwo] = useState(150)

    const [number, setNumber] = useState(1)
    const [arrow, setArrow] = useState(0)

    const indexCurrencies = Object.keys(currencies)
    const indexLatest = Object.keys(latest).map(value => {
        return latest[value]
    })

    console.log(indexLatest)
    console.log(actionIndex)
    console.log(actionIndex)
    console.log(indexLatest[actionIndex])
    console.log(indexLatest[actionIndexTwo])
    console.log(number)
    console.log(indexLatest[actionIndex] * number)


    return (
        <div className='notebook'>
            <div
                className='sum'
                style={actionBtnTwo === 1 ? {zIndex:'-1'} : {zIndex: 1}}
            >
                <h3>У меня есть</h3>
                <div className='sumConvertor'>
                    <input
                        onChange={(event => {
                            setNumber(event.target.value)
                        })}
                        className='notebookInput'
                        name="text"
                        placeholder={number}/>
                    <button
                        onClick={() => {
                            actionBtn === 0 ? setActionBtn(1) : setActionBtn(0)
                        }}
                        type="button"
                        className="notebookBtn">
                        {
                            actionIndex === 121 ? <div>
                                    <div className='country'>
                                        <img
                                            src={`https://wise.com/public-resources/assets/flags/rectangle/rub.png`}
                                            alt=""/>
                                        <div>
                                            <h5>{indexCurrencies[121]}</h5>
                                        </div>
                                    </div>
                                </div> :
                                <div>
                                    <div className='country'>
                                        <img
                                            src={`https://wise.com/public-resources/assets/flags/rectangle/${indexCurrencies[actionIndex].toLowerCase()}.png`}
                                            alt=""/>
                                        <div>
                                            <h5>{indexCurrencies[actionIndex]}</h5>
                                        </div>
                                    </div>
                                </div>
                        }
                        <div
                            className={actionBtn === 1 ? "countrySelection countrySelectionAction" : 'countrySelection'}>
                            {
                                (Object.keys(latest)).map((data, index) => {
                                    return <div onClick={() => setActionIndex(index)}
                                                className="countryСourses actionBtn">
                                        <div className='country'>
                                            <img
                                                src={`https://wise.com/public-resources/assets/flags/rectangle/${data.toLowerCase()}.png`}
                                                alt=""/>
                                            <div>
                                                <h5>{data}</h5>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </button>
                </div>
            </div>
            <div
                 className='arrowSwitching'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#00b9ff"
                     className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="#00b9ff"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </div>
            <div
                className='convertor'
                style={actionBtn === 1 ? {zIndex:'-1'} : {zIndex: 1}}
            >
                <h3>Хочу приобрести</h3>
                <div className='Convertor'>
                    <input
                        disabled={true}
                        className='notebookInput'
                        name="text"
                        placeholder={indexLatest[actionIndexTwo] / indexLatest[actionIndex] * number}/>
                    <button
                        onClick={() => {
                            actionBtnTwo === 0 ? setActionBtnTwo(1) : setActionBtnTwo(0)
                        }}
                        type="button"

                        className="notebookBtn">
                        {
                            actionIndexTwo === 150 ? <div>
                                    <div className='country'>
                                        <img
                                            src={`https://wise.com/public-resources/assets/flags/rectangle/usd.png`}
                                            alt=""/>
                                        <div>
                                            <h5>{indexCurrencies[150]}</h5>
                                        </div>
                                    </div>
                                </div> :
                                <div>
                                    <div className='country'>
                                        <img
                                            src={`https://wise.com/public-resources/assets/flags/rectangle/${indexCurrencies[actionIndexTwo].toLowerCase()}.png`}
                                            alt=""/>
                                        <div>
                                            <h5>{indexCurrencies[actionIndexTwo]}</h5>
                                        </div>
                                    </div>
                                </div>
                        }
                        <div
                            className={actionBtnTwo === 1 ? "countrySelection actionBtnTwo" : 'countrySelection'}>
                            {
                                (Object.keys(latest)).map((data, index) => {
                                    return <div onClick={() => setActionIndexTwo(index)}
                                                className="countryСourses actionBtn">
                                        <div className='country'>
                                            <img
                                                src={`https://wise.com/public-resources/assets/flags/rectangle/${data.toLowerCase()}.png`}
                                                alt=""/>
                                            <div>
                                                <h5>{data}</h5>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notebook