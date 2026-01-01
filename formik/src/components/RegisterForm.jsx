import React from "react";
import { useFormik } from "formik";
import { registerFormSchemas } from "../schemas/RegisterFormSchemas";
function RegisterForm() {
  
    const submit=(values,action)=>{
        setTimeout(()=>{
            action.resetForm();
        },2000)
    }

    const { errors, values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: registerFormSchemas,
    onSubmit: submit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email Giriniz"
            value={values.email}
            onChange={handleChange}
          ></input>
          {errors.email && <p className="input-error">{errors.email}</p>}
        </div>
        <div className="inputDiv">
          <label>Yaş</label>
          <input
            type="number"
            id="age"
            placeholder="Yaş Giriniz"
            value={values.age}
            onChange={handleChange}
          ></input>
          {errors.age && <p className="input-error">{errors.age}</p>}
        </div>
        <div className="inputDiv">
          <label>Şifre</label>
          <input
            type="password"
            id="password"
            placeholder="Şifre Giriniz"
            value={values.password}
            onChange={handleChange}
          ></input>
          {errors.password && <p className="input-error">{errors.password}</p>}
        </div>
        <div className="inputDiv">
          <label>Şifre Tekrar</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Şifreinniz Tekrar Giriniz"
            value={values.confirmPassword}
            onChange={handleChange}
          ></input>
          {errors.confirmPassword && (
            <p className="input-error">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="inputDiv">
          <div className="checkBoxDiv">
            <input
              style={{ width: "20px", height: "20px" }}
              type="checkbox"
              id="term"
              value={values.term}
              onChange={handleChange}
            />
            <label>Kullanıcı Sözleşmesini Onaylayın</label>
          </div>
          {errors.term && (
            <p className="input-error">{errors.term}</p>
          )}
        </div>
        <div>
          <button type="submit" className="submitButton">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
