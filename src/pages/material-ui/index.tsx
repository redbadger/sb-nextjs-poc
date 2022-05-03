import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import type { NextPage } from 'next';
import styled from 'styled-components';

const mainColor = '#ccc';
const baseSpace = '1.25rem';

const StyledButton = styled(Button)`
  border: 5px solid ${mainColor};
`;

const StyledTextField = styled(TextField)`
  margin-bottom: ${baseSpace};
`;

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

const MaterialUi: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.table(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <StyledTextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <StyledTextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <StyledButton
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </StyledButton>
      </form>
    </div>
  );
};

export default MaterialUi;
