import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import type { NextPage } from 'next';
import styled from 'styled-components';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const initialValues = {
  email: 'foobar@example.com',
  password: 'foobar',
};

const StyledInput = styled.input`
  margin-bottom: 1.25rem;
  border-radius: 5px;
  border: 1px solid currentColor;
  display: inline-block;
  margin-left: 1rem;
  padding: 0.5rem;

  &.error {
    border: 2px solid red;
  }
`;

const StyledComponent: NextPage = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.table(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <StyledInput
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={` ${
                  errors.email && touched.email && errors.email ? 'error' : ''
                }`}
              />
            </div>

            {errors.email && touched.email && errors.email}

            <div>
              <label htmlFor="password">Password:</label>
              <StyledInput
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={`${
                  errors.password && touched.password && errors.password
                    ? 'error'
                    : ''
                }`}
              />
            </div>

            {errors.password && touched.password && errors.password}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default StyledComponent;
