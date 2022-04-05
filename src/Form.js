import React, { useState, useEffect } from "react";
import errorImage from "./images/icon-error.svg";

const Form = () => {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fname) {
      errors.fname = "First Name cannot be empty";
    }
    if (!values.lname) {
      errors.lname = "Last Name cannot be empty";
    }

    if (!values.email) {
      errors.email = "Email cannot be empty";
    } else if (!regex.test(values.email)) {
      errors.email = "Looks like this is not an email";
    }

    if (!values.password) {
      errors.password = "Password cannot be empty";
    }

    return errors;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-input">
        <input
          id={formErrors.fname ? "input-active" : "input"}
          type="text"
          className="first-name"
          placeholder="First Name"
          name="fname"
          value={formValues.fname}
          onChange={handleChange}
        />
        <span>
          <img
            className={formErrors.fname ? "" : "form-input-active"}
            src={errorImage}
            alt="error"
          />
        </span>

        <p className="error-message">{formErrors.fname}</p>
      </div>

      <div className="form-input">
        <input
          id={formErrors.lname ? "input-active" : "input"}
          type="text"
          className="lname"
          placeholder="Last Name"
          name="lname"
          value={formValues.lname}
          onChange={handleChange}
        />
        <span>
          <img
            className={formErrors.lname ? "" : "form-input-active"}
            src={errorImage}
            alt="error"
          />
        </span>

        <p className="error-message">{formErrors.lname}</p>
      </div>

      <div className="form-input">
        <input
          id={formErrors.email ? "input-active" : "input"}
          type="text"
          className="email"
          placeholder={formErrors.email ? "" : "Email Address"}
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <span>
          <img
            className={formErrors.email ? "" : "form-input-active"}
            src={errorImage}
            alt="error"
          />
        </span>

        <p>{formErrors.email}</p>
      </div>

      <div className="form-input">
        <input
          id={formErrors.password ? "input-active" : "input"}
          type="password"
          className="password"
          placeholder="Password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />

        <span>
          <img
            className={formErrors.password ? "" : "form-input-active"}
            src={errorImage}
            alt="error"
          />
        </span>

        <p className="error-message">{formErrors.password}</p>
      </div>

      <button
        className={formErrors.email ? "claim-trial-active" : "claim-trial"}
        type="submit"
      >
        Claim your free trial
      </button>
      <p>
        By clicking the button, you are agreeing to our
        <span className="terms-and-services">
          <a href="#"> Terms and Services</a>
        </span>
      </p>
    </form>
  );
};

export default Form;
