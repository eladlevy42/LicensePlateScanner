import React, { useContext, useState } from "react";
import { CarDataContext } from "../contexts/carDataContext";
import CarLoader from "./RaceCarLoader";

function DataCard() {
  const { carData, loading } = useContext(CarDataContext);
  const [initialSearch, setInitialSearch] = useState(true);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <CarLoader />
      </div>
    );
  }

  if (!carData && !initialSearch) {
    return (
      <div className="card">
        <h6 className="card-title"> רכב לא נמצא </h6>
      </div>
    );
  }

  if (!carData) {
    return null; // Do not display anything if it's the first search or no data
  }

  const {
    degem_nm,
    degem_cd,
    baalut,
    tokef_dt,
    moed_aliya_lakvish,
    tozeret_nm,
    shnat_yitzur,
    kinuy_mishari,
    ramat_gimur,
    delek_nm,
    kvutzat_zihum,
    nefah_manoa,
    koah_sus,
    hanaa_nm,
    merkav,
  } = carData;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-4/5 md:w-1/2 lg:w-1/3">
      <h6 className="text-xl font-bold mb-2">
        {tozeret_nm} {kinuy_mishari}
      </h6>
      <ul className="list-none pl-5">
        <li>יצרן: {tozeret_nm}</li>
        <li>מודל: {kinuy_mishari}</li>
        <li>שנת ייצור: {shnat_yitzur}</li>
        <li>נפח מנוע: {nefah_manoa}</li>
        <li>כוח סוס: {koah_sus}</li>
        <li>הנעה: {hanaa_nm}</li>
        <li>סוג דלק: {delek_nm}</li>
        <li>דרגת זיהום: {kvutzat_zihum}</li>
        <li>רמת גימור: {ramat_gimur}</li>
        <li>מרכב: {merkav}</li>
        <li>בעלות: {baalut}</li>
        <li>טסט בתוקף עד: {tokef_dt}</li>
        <li>תאריך עלייה לכביש: {moed_aliya_lakvish}</li>
      </ul>
    </div>
  );
}

export default DataCard;
