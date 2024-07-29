import { InputComp, ButtonComp } from "..";
import { Link } from "react-router-dom";

const FormInput = ({
  name,
  age,
  handleChange,
  setName,
  setAge,
  handleSubmit,
  updateBtn,
  homeBtn,
  placeholderName,
  placeholderAge,
  submitBtn,
  createName,
}) => {
  return (
    <form>
      <InputComp
        type="text"
        value={name}
        onChange={handleChange(setName)}
        placeholder={placeholderName}
      />
      <InputComp
        type="text"
        value={age}
        onChange={handleChange(setAge)}
        placeholder={placeholderAge}
      />
      <ButtonComp onClick={handleSubmit} type="submit" name ={createName}/>

      <Link to="/">
        <ButtonComp name = {homeBtn}/>
      </Link>
    </form>
  );
};

export default FormInput;
