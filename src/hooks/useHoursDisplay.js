import { GlobalContext } from "../context/GlobalState";
import { useContext, useEffect, useState } from "react";

export default function useHoursDisplay(hours, prevHours) {
  const { durationType } = useContext(GlobalContext);

  const durationOutput = (
    <>
      {durationType === "daily" ? (
        <h1>{hours.daily} hrs</h1>
      ) : durationType === "weekly" ? (
        <h1>{hours.weekly} hrs</h1>
      ) : durationType === "monthly" ? (
        <h1>{hours.monthly} hrs</h1>
      ) : null}
    </>
  );

  const prevDurationOutput = (
    <>
      {durationType === "daily" ? (
        <p>Yesterday - {prevHours.daily}hrs</p>
      ) : durationType === "weekly" ? (
        <p>Last Week - {prevHours.weekly}hrs</p>
      ) : durationType === "monthly" ? (
        <p> Last Month - {prevHours.monthly}hrs</p>
      ) : null}
    </>
  );

  return [durationOutput, prevDurationOutput]
}
