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


    return (
        <div className='notebook'>
            <div className='sum'>
                <h3>У меня есть</h3>
                <div className={arrow === 1 ? 'sumConvertor sumConvertorArrow' : 'sumConvertor'}>
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
            <div onClick={() => arrow === 0 ? setArrow(1) : setArrow(0)}
                 className='arrowSwitching'>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px"
                     className="icon">
                    <path
                        d="M18.19 4.49l-.7.7L20.29 8H7.5v1h12.79l-2.8 2.81.7.7 4.02-4.01-4.02-4.01zM6.51 12.19l-.7-.7-4.02 4.01 4.02 4.01.7-.7L3.71 16H16.5v-1H3.71l2.8-2.81z"
                        fill="#00b9ff"></path>
                </svg>
            </div>
            <div className='convertor'>
                <h3>Хочу приобрести</h3>
                <div className={arrow === 1 ? 'Convertor sumConvertorArrow' : 'Convertor'}>
                    <input
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