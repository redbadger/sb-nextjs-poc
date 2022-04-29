import 'normalize.css';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from '../../app/hooks';
import { selectSession } from '../../features/session/slice';
import Head from 'next/head';

const DescriptionItem: React.FC<Record<string, string>> = ({
  property,
  value,
}) => (
  <>
    <dt>{property}: </dt>
    <dd>{value}</dd>
  </>
);

const SessionPage: NextPage = () => {
  const { name, surname, email, sessionToken } = useAppSelector(selectSession);
  const router = useRouter();

  const authorized = Boolean(sessionToken);

  useEffect(() => {
    if (!authorized) {
      router.push('/');
    }
  }, [sessionToken]);

  return (
    <>
      <Head>
        <title>Security Bank | Next.js | Redux | PoC</title>
      </Head>
      <header>
        <h1>Session Page</h1>
        <nav></nav>
      </header>
      <main>
        <dl>
          <DescriptionItem property={'Name'} value={name} />
          <DescriptionItem property={'Surname'} value={surname} />
          <DescriptionItem property={'Email'} value={email} />
        </dl>
      </main>
    </>
  );
};

export default SessionPage;
