import "./Work.css";
import ellipsis from '../images/icon-ellipsis.svg'
import useHoursDisplay from "../hooks/useHoursDisplay";


const hours = {
  daily: 0,
  weekly: 4,
  monthly: 13,
};

const prevHours = {
  daily: 1,
  weekly: 7,
  monthly: 19,
};

export default function Work() {
    const [durationOutput, prevDurationOutput] = useHoursDisplay(
        hours,
        prevHours
      );

  return (
    <div className="card card__work">
      <div className="card__info card--padding">
        <div className="card__heading">
          <p>Work</p>
          <img src={ellipsis} height="5" width="15"></img>
        </div>
        <div className="card__time-info">
            <div>
            {durationOutput}
            </div>
            <div className="card__time">
            {prevDurationOutput}
            </div>
        </div>
      </div>
    </div>
  );
}
