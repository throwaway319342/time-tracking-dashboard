import "./Study.css";
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

export default function Study() {
    const [durationOutput, prevDurationOutput] = useHoursDisplay(
        hours,
        prevHours
      );

  return (
    <div className="card card__study">
      <div className="card__info card--padding">
        <div className="card__heading">
          <p>Study</p>
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