import React, { useEffect, useState } from "react";
import { MyContext } from "./MyContext";

const apiUrl = "./src/data/pizzas.json";

const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState([]);

  const getData = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();

    setPizza(data)
    
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MyContext.Provider value={{pizza, setPizza}}>
      {children}
    </MyContext.Provider>
  );
};

export default PizzaProvider;
