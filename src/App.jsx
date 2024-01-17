import React from "react"
import profilePic from "./assets/image-jeremy.png"
import iconWork from "./assets/icon-work.svg"
import iconPlay from "./assets/icon-play.svg"
import iconStudy from "./assets/icon-study.svg"
import iconExercise from "./assets/icon-exercise.svg"
import iconSocial from "./assets/icon-social.svg"
import iconSelfcare from "./assets/icon-self-care.svg"
import data from "../data.json"

function App() {

const [showDay ,setShowDay] = React.useState(true)
const [showWeek ,setShowWeek] = React.useState(false)
const [showMonth ,setShowMonth] = React.useState(false)

function displayDay() {
  setShowDay(true)
  setShowWeek(false)
  setShowMonth(false)
}

function displayWeek() {
  setShowWeek(true)
  setShowDay(false)
  setShowMonth(false)
}

function displayMonth() {
  setShowMonth(true)
  setShowDay(false)
  setShowWeek(false)
}

  return (
    <div className="container">
      <div className="user-card">
        <div className="user-data">
          <img className="user-img" src={profilePic}/>
          <div className="user-info">
            <p className="user-sub-title">Report for</p>
            <h1 className="user-title"><span>Jeremy</span> Robson</h1>
          </div>
        </div>
        <div className="period-btns">
          <h2 onClick={displayDay} className={showDay ? "day-active" :"stats-period"}>Daily</h2>
          <h2 onClick={displayWeek} className={showWeek ? "week-active" :"stats-period"}>Weekly</h2>
          <h2 onClick={displayMonth} className={showMonth ? "month-active" :"stats-period"}>Montly</h2>
        </div>
      </div>
      <div className="work-card">
        <div className="bg-container">
          <img className="work-icon" src={iconWork} />
        </div>
        <div className="work-stats">
          <div className="card-options">
            <p className="work-title">{data[0].title}</p>
            <p className="work-menu">...</p>
          </div>
          <div className="time-info">
            <h1 className="work-hours">{showDay ? data[0].timeframes.daily.current : ( showWeek ? data[0].timeframes.weekly.current : ( showMonth ? data[0].timeframes.monthly.current : "" )) }hrs</h1>
            <p className="work-past">Last Week - {showDay ? data[0].timeframes.daily.previous : ( showWeek ? data[0].timeframes.weekly.previous : ( showMonth ? data[0].timeframes.monthly.previous : "" )) }hrs</p>
          </div>
        </div>
      </div>
      <div className="play-card">
        <div className="bg-container">
          <img className="play-icon" src={iconPlay} />
        </div>
        <div className="play-stats">
          <div className="card-options">
            <p className="play-title">{data[1].title}</p>
            <p className="play-menu">...</p>
          </div>
          <div className="time-info">
            <h1 className="play-hours">{showDay ? data[1].timeframes.daily.current : ( showWeek ? data[1].timeframes.weekly.current : ( showMonth ? data[1].timeframes.monthly.current : "" )) }hrs</h1>
            <p className="play-past">Last Week - {showDay ? data[1].timeframes.daily.previous : ( showWeek ? data[1].timeframes.weekly.previous : ( showMonth ? data[1].timeframes.monthly.previous : "" )) }hrs</p>
          </div>
        </div>
      </div>
      <div className="study-card">
        <div className="bg-container">
          <img className="study-icon" src={iconStudy} />
        </div>
        <div className="study-stats">
          <div className="card-options">
            <p className="study-title">{data[2].title}</p>
            <p className="study-menu">...</p>
          </div>
          <div className="time-info">
            <h1 className="study-hours">{showDay ? data[2].timeframes.daily.current : ( showWeek ? data[2].timeframes.weekly.current : ( showMonth ? data[2].timeframes.monthly.current : "" )) }hrs</h1>
            <p className="study-past">Last Week - {showDay ? data[2].timeframes.daily.previous : ( showWeek ? data[2].timeframes.weekly.previous : ( showMonth ? data[2].timeframes.monthly.previous : "" )) }hrs</p>
          </div>
        </div>
      </div><div className="exercise-card">
        <div className="bg-container">
          <img className="exercise-icon" src={iconExercise} />
        </div>
        <div className="exercise-stats">
          <div className="card-options">
            <p className="exercise-title">{data[3].title}</p>
            <p className="exercise-menu">...</p>
          </div>
          <div className="time-info">
            <h1 className="exercise-hours">{showDay ? data[3].timeframes.daily.current : ( showWeek ? data[3].timeframes.weekly.current : ( showMonth ? data[3].timeframes.monthly.current : "" )) }hrs</h1>
            <p className="exercise-past">Last Week - {showDay ? data[3].timeframes.daily.previous : ( showWeek ? data[3].timeframes.weekly.previous : ( showMonth ? data[3].timeframes.monthly.previous : "" )) }hrs</p>
          </div>
        </div>
      </div>
      <div className="social-card">
        <div className="bg-container">
          <img className="social-icon" src={iconSocial} />
        </div>
        <div className="social-stats">
          <div className="card-options">
            <p className="social-title">{data[4].title}</p>
            <p className="social-menu">...</p>
          </div>
          <div className="time-info">
            <h1 className="social-hours">{showDay ? data[4].timeframes.daily.current : ( showWeek ? data[4].timeframes.weekly.current : ( showMonth ? data[4].timeframes.monthly.current : "" )) }hrs</h1>
            <p className="social-past">Last Week - {showDay ? data[4].timeframes.daily.previous : ( showWeek ? data[4].timeframes.weekly.previous : ( showMonth ? data[4].timeframes.monthly.previous : "" )) }hrs</p>
          </div>
        </div>
      </div>
      <div className="selfcare-card">
        <div className="bg-container">
          <img className="selfcare-icon" src={iconSelfcare} />
        </div>
        <div className="selfcare-stats">
          <div className="card-options">
            <p className="selfcare-title">{data[5].title}</p>
            <p className="selfcare-menu">...</p>
          </div>
          <div className="time-info">
            <h1 className="selfcare-hours">{showDay ? data[5].timeframes.daily.current : ( showWeek ? data[5].timeframes.weekly.current : ( showMonth ? data[5].timeframes.monthly.current : "" )) }hrs</h1>
            <p className="selfcare-past">Last Week - {showDay ? data[5].timeframes.daily.previous : ( showWeek ? data[5].timeframes.weekly.previous : ( showMonth ? data[5].timeframes.monthly.previous : "" )) }hrs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
