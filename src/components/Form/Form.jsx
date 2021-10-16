import { useState } from "react";

//* Components:
import Input from "../Input/Input";

import "./form.style.scss";
const Form = () => {
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const handleChange = (e) => {
    setCost(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  return (
    <>
      <form className="form">
        <div className="form__firstBlock">
          <Input
            title="Name of the cost:"
            type="text"
            placeholder="Name of the cost..."
            changeEvent={handleChange}
          />
        </div>
        <div className="form__secBlock">
          <Input title="Day when u pay:" type="date" changeEvent={handleDate} />
          <Input
            title="Enter cost price:"
            type="text"
            placeholder="Enter cost price..."
            changeEvent={handlePrice}
          />
        </div>
        <button className="form__btn">Add new cost</button>
      </form>
    </>
  );
};

export default Form;
