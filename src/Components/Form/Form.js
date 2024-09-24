import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
export default function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    id: 0,
    Name: "",
    Password: "",
    confirmPassword: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    let err = [];
    if (!formData.Name) {
      err.push({ Name: "Name Required" });
    }
    if (!formData.Password || formData.Password.length < 6) {
      err.push({ Password: "Err Password" });
    }

    if (formData.confirmPassword !== formData.Password) {
      err.push({ confirmPassword: " Password != ConfirmPassword" });
    }
    if (err.length === 0) {
      if (formData) {
        formData.id = errors.id++;
        const items = JSON.parse(localStorage.getItem("users") || "[]");

        items.push(formData);
        localStorage.setItem("users", JSON.stringify(items));
        navigate("/users");
        
      }
    }

    for (let i = 0; i < err.length; i++) {
      setErrors((errors) => ({
        ...errors,
        [Object.keys(err[i])[0]]: Object.values(err[i])[0],
      }));
    }
  }
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target["id"]]: e.target.value,
    }));
  };
  return (
    <div className="App min-h-screen min-w-full flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-8  rounded-lg shadow-xl ">
        <div className="txt mb-8">
          <h1 className="text-3xl font-semibold	mb-2">Sign Up</h1>
          <p className="text-sm	text-[#777]">
            Nice to meet you! Enter your details to register.
          </p>
        </div>
        <div className="inpt">
          <label htmlFor="Name">Name:</label>
          <input type="text" id="Name" onChange={handleChange} />
          {errors.Name && <p>{errors.Name}</p>}
        </div>
        <div className="inpt">
          <label htmlFor="Email">Email:</label>
          <input type="email" id="Email" onChange={handleChange} />
        </div>
        <div className="inpt">
          <label htmlFor="Password">Password:</label>
          <input type="password" id="Password" onChange={handleChange} />
          {errors.Password && <p>{errors.Password}</p>}
        </div>
        <div className="inpt">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" onChange={handleChange} />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

        <div className="btns flex items-center justify-center mt-8">
          <button className="text-sm font-medium py-2 px-5 text-white bg-black rounded-lg hover:scale-110 hover:bg-[#777] transition ease-in-out duration-500	">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}
