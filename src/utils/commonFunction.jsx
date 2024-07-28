 const handleChange = (fun) => (e) => {
    fun(e.target.value);
  };

  export default handleChange