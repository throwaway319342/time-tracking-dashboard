import "./SelfCare.css";
import ellipsis from '../images/icon-ellipsis.svg'
import useHoursDisplay from "../hooks/useHoursDisplay";


const hours = {
  daily: 0,
  weekly: 2,
  monthly: 7,
};

const prevHours = {
  daily: 1,
  weekly: 2,
  monthly: 11,
};

export default function SelfCare() {
  const [durationOutput, prevDurationOutput] = useHoursDisplay(
    hours,
    prevHours
  );

  return (
    <div className="card card__selfcare">
      <div className="card__info card--padding">
        <div className="card__heading">
          <p>Self Care</p>
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
