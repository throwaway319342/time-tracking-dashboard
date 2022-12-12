import "./Social.css";
import useHoursDisplay from "../hooks/useHoursDisplay";


const hours = {
  daily: 1,
  weekly: 5,
  monthly: 21,
};

const prevHours = {
  daily: 3,
  weekly: 10,
  monthly: 23,
};

export default function Social() {
    const [durationOutput, prevDurationOutput] = useHoursDisplay(
        hours,
        prevHours
      );

  return (
    <div className="card card__social">
      <div className="card__info card--padding">
        <div className="card__heading">
          <p>Social</p>
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
