import { useUser } from '@auth0/nextjs-auth0';
import { Sidebar } from '@planit/shared';
import Head from 'next/head';
import styled from 'styled-components';

const StyledPage = styled.div``;

export function Index() {
  const { user, isLoading } = useUser();
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <Sidebar>
      <Head>
        <title>PlanIT - Home</title>
      </Head>
      <pre>{user && JSON.stringify(user, null, 2)}</pre>
    </Sidebar>
  );
}

export default Index;
