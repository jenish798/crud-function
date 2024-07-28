 import { InputComp,ButtonComp } from "../components";
 import { Link } from "react-router-dom";
 
 const FormInput = ({ name, age, handleChange, setName, setAge, handleSubmit, updateBtn, homeBtn, placeholderName, placeholderAge,submitBtn }) => {
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
        <ButtonComp onClick={handleSubmit} type="submit">
          {updateBtn}
        </ButtonComp>
  
        <Link to="/">
          <ButtonComp>{homeBtn}</ButtonComp>
        </Link>
      </form>
        );
      };

      export default FormInput