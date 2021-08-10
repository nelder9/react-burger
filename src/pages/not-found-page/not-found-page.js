import React from "react";
import { useLocation } from "react-router-dom";

export const NoMatch = () => {
  const location = useLocation();

  return (
    
      <h1>
        Page not found for {location.pathname}
      </h1>
  );
};
