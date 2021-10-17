//* Components:
import Input from "../Input/Input";

import "./form.style.scss";
const Form = ({ setCost, setDate, setPrice, handleForm }) => {
  return (
    <>
      <form className="form">
        <div className="form__firstBlock">
          <Input
            title="Name of the cost:"
            type="text"
            placeholder="Name of the cost..."
            changeEvent={setCost}
          />
        </div>
        <div className="form__secBlock">
          <Input title="Day when u pay:" type="date" changeEvent={setDate} />
          <Input
            title="Enter cost price:"
            type="text"
            placeholder="Enter cost price..."
            changeEvent={setPrice}
          />
        </div>
        <button onClick={handleForm} className="form__btn">
          Add new cost
        </button>
      </form>
    </>
  );
};

export default Form;
