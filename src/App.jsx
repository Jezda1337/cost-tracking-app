import { useState, useEffect } from "react";

//* Components:
import { Card, Form } from "./components";

import "./index.scss";
const App = () => {
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [costs, setCosts] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    setCosts((prevDate) => [
      ...prevDate,
      {
        cost: cost,
        date: date,
        price: price,
      },
    ]);
  };
  useEffect(() => {
    const localData = localStorage.getItem("costs");
    if (!localData) localStorage.setItem("costs", JSON.stringify(costs));
    setCosts(JSON.parse(localData));
  }, []);

  useEffect(() => {
    localStorage.setItem("costs", JSON.stringify(costs));
  }, [costs]);

  return (
    <>
      <header className="header">
        <Form
          setCost={setCost}
          setDate={setDate}
          setPrice={setPrice}
          handleForm={handleForm}
        />
      </header>
      <main className="main">
        <Card costs={costs} />
      </main>
    </>
  );
};

export default App;
