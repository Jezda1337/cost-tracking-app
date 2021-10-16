import { useState } from "react";

const Form = () => {
  return (
    <>
      <form className="form">
        <label className="form__label" htmlFor="">
          <input
            className="form__inputCost"
            type="text"
            placeholder="Enter new cost for this month..."
          />
        </label>

        <button className="form__btn">Add new cost</button>
      </form>
    </>
  );
};

export default Form;
