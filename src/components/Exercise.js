import "./Exercise.css";
import useHoursDisplay from "../hooks/useHoursDisplay";


const hours = {
  daily: 1,
  weekly: 4,
  monthly: 11,
};

const prevHours = {
  daily: 1,
  weekly: 5,
  monthly: 18,
};

export default function Exercise() {
    const [durationOutput, prevDurationOutput] = useHoursDisplay(
        hours,
        prevHours
      );

  return (
    <div className="card card__exercise">
      <div className="card__info card--padding">
        <div className="card__heading">
          <p>Exercise</p>
          <img src="/images/icon-ellipsis.svg" height="5" width="15"></img>
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