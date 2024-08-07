import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    terms: false,
  });

  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(3, 'Name must be more than two characters')
      .max(15, 'Name must not exceed more than 15 characters')
      .matches(/^[A-Za-z\s]+$/, 'Name must not contain numbers or special characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email must contain this@.')
      .required('Email is required'),
    password: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must contain at least one lowercase letter, one uppercase letter, and one number')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords don't match")
      .required('Confirm password is required'),
    dob: Yup.date().required('Date of birth is required'),
    terms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('Terms and conditions must be accepted'),
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form data submitted:', values);
    resetForm();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h4>Register</h4>
            </div>
            <Formik
              initialValues={formData}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, handleSubmit, handleChange, values }) => (
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="fullname" className="form-label">Full Name</label>
                      <Field
                        type="text"
                        className={`form-control ${errors.fullname && touched.fullname ? 'is-invalid' : ''}`}
                        id="fullname"
                        name="fullname"
                        placeholder="Enter your fullname"
                      />
                      {errors.fullname && touched.fullname ? (
                        <div className="invalid-feedback">{errors.fullname}</div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <Field
                        type="email"
                        className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                      {errors.email && touched.email ? (
                        <div className="invalid-feedback">{errors.email}</div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <Field
                        type="password"
                        className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                      />
                      {errors.password && touched.password ? (
                        <div className="invalid-feedback">{errors.password}</div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <Field
                        type="password"
                        className={`form-control ${errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''}`}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                      />
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <div className="invalid-feedback">{errors.confirmPassword}</div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="dob" className="form-label">Date of Birth</label>
                      <Field
                        type="date"
                        className={`form-control ${errors.dob && touched.dob ? 'is-invalid' : ''}`}
                        id="dob"
                        name="dob"
                      />
                      {errors.dob && touched.dob ? (
                        <div className="invalid-feedback">{errors.dob}</div>
                      ) : null}
                    </div>
                    <div className="mb-3 form-check">
                      <Field
                        type="checkbox"
                        className={`form-check-input ${errors.terms && touched.terms ? 'is-invalid' : ''}`}
                        id="terms"
                        name="terms"
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the terms and conditions
                      </label>
                      {errors.terms && touched.terms ? (
                        <div className="invalid-feedback">{errors.terms}</div>
                      ) : null}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                  </form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
