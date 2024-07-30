import React, { useState, useContext } from "react";
import axios from "axios";
import { CarDataContext } from "../contexts/carDataContext";
import CarLoader from "./RaceCarLoader";

function Form() {
  const [plate, setPlate] = useState("");
  const { setCarData, loading, setLoading } = useContext(CarDataContext);
  const [initialSearch, setInitialSearch] = useState(true);

  const searchCarPlate = async () => {
    setLoading(true);
    setInitialSearch(false);
    try {
      const response = await axios.get(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${plate}`
      );
      const fullCar = response.data.result.records[0];
      setCarData(fullCar);
    } catch (err) {
      setCarData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchCarPlate();
        }}
        className="flex flex-col items-center space-y-4"
      >
        <label className="text-lg font-semibold">מספר רכב: </label>
        <input
          required
          type="number"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
          className="p-2 border border-gray-300 rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600"
        >
          סע!
        </button>
      </form>
    </>
  );
}

export default Form;
