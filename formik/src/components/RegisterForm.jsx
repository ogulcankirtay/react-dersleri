import React from "react";
import { useFormik } from "formik";
function RegisterForm() {
  const { errors, values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
        term:""
    },
  });

  return (
    <div>
      <form>
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email Giriniz"
            value={values.email}
            onChange={handleChange}
          ></input>
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
        </div>
        <div className="inputDiv"> 
          <div className="checkBoxDiv"><input style={{width:'20px',height:'20px'}} type="checkbox" id="term" value={values.term} onChange={handleChange}  />    
          <label>
            Kullanıcı Sözleşmesini Onaylayın
          </label></div> 
        </div>
        <div>
            <button className="submitButton">Kaydet</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
