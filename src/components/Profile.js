import './Profile.css'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

export default function Profile() {

    const { changeDuration } = useContext(GlobalContext)

    const changeToDaily = () => {
        changeDuration('daily')
    }

    const changeToWeekly = () => {
        changeDuration('weekly')
    }

    const changeToMonthly = () => {
        changeDuration('monthly')
    }

    return (
        <div className="profile__card">
            <div className="profile__info">
                <img src='/images/image-jeremy.png' height="100" width="100"></img>
                <div>
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className="timeframe">
                <p onClick={changeToDaily}>Daily</p>
                <p onClick={changeToWeekly}>Weekly</p>
                <p onClick={changeToMonthly}>Monthly</p>
            </div>
        </div>
    )
}