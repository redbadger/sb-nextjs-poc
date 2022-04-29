import type { NextPage } from 'next';
import 'normalize.css';
import { batch } from 'react-redux';
import { Formik } from 'formik';
import { object, string } from 'yup';

import {
  selectSession,
  setLoginDetails,
  createSession,
} from '../features/session/slice';

import Head from 'next/head';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const userSchema = object({
  name: string().required(),
  surname: string().required(),
  email: string().email().required(),
});

const IndexPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const { name, surname, email, sessionToken } = useAppSelector(selectSession);

  const initialValues = { name, surname, email };

  return (
    <>
      <Head>
        <title>Security Bank | Next.js | Redux | PoC</title>
      </Head>
      <header>
        <h1>Home</h1>
        <nav></nav>
      </header>
      <main>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            batch(() => {
              dispatch(setLoginDetails(values));
              dispatch(createSession(values));
            });
          }}
          validationSchema={userSchema}
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
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                  name="name"
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>
              {errors.name && touched.name && errors.name}

              <div>
                <label htmlFor="surname">Surname:</label>
                <input
                  type="text"
                  id="surname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="surname"
                  value={values.surname}
                />

                {errors.surname && touched.surname && errors.surname}
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>

              {errors.email && touched.email && errors.email}

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
        {Boolean(sessionToken) ? (
          <>
            <h2>Session Token</h2>
            <p>
              <code>{sessionToken}</code>
            </p>
          </>
        ) : null}
      </main>
    </>
  );
};

export default IndexPage;
