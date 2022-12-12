import "./Play.css";
import ellipsis from '../images/icon-ellipsis.svg'
import useHoursDisplay from "../hooks/useHoursDisplay";


const hours = {
  daily: 1,
  weekly: 10,
  monthly: 23,
};

const prevHours = {
  daily: 2,
  weekly: 8,
  monthly: 29,
};

export default function Play() {
  const [durationOutput, prevDurationOutput] = useHoursDisplay(
    hours,
    prevHours
  );

  return (
    <div className="card card__play">
      <div className="card__info card--padding">
        <div className="card__heading">
          <p>Play</p>
          <img src={ellipsis} height="5" width="15"></img>
        </div>
        <div className="card__time-info">
            <div>{durationOutput}</div>
            <div className="card__time">{prevDurationOutput}</div>
        </div>
      </div>
    </div>
  );
}
