import type { NextPage } from 'next';
import 'normalize.css';
import { useState } from 'react';

import Head from 'next/head';

const IndexPage: NextPage = () => {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <Head>
        <title>Security Bank | Next.js | Redux | PoC</title>
      </Head>
      <header>
        <nav></nav>
      </header>
      <main>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              onChange={handleOnChange}
              name="name"
            />
          </div>
          <div>
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              onChange={handleOnChange}
              name="surname"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default IndexPage;
