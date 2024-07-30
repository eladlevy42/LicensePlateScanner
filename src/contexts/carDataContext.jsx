import React, { createContext, useState } from "react";

// Create a context
export const CarDataContext = createContext();

// Create a provider component
export const CarDataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [carData, setCarData] = useState(null);

  return (
    <CarDataContext.Provider
      value={{ carData, setCarData, loading, setLoading }}
    >
      {children}
    </CarDataContext.Provider>
  );
};
