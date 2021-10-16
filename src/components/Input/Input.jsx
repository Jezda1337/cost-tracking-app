import "./input.style.scss";
const Input = ({ type, placeholder, changeEvent, title }) => {
  return (
    <>
      <label className="input-wrapper" htmlFor="">
        {title}
        <input
          className="input-wrapper__input"
          onChange={changeEvent}
          type={type}
          placeholder={placeholder}
        />
      </label>
    </>
  );
};

export default Input;
