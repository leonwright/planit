import { Sidebar } from '@planit/shared';
import styled from 'styled-components';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface MenusProps {}

const StyledMenus = styled.div`
  color: pink;
`;

export function Menus(props: MenusProps) {
  return (
    <Sidebar>
      <Head>
        <title>PlanIT - Menus</title>
      </Head>
      <StyledMenus>
        <h1>Welcome to Menus!</h1>
      </StyledMenus>
    </Sidebar>
  );
}

export default Menus;
