import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CreateTableProps {}

const StyledCreateTable = styled.div`
  color: pink;
`;

export function CreateTable(props: CreateTableProps) {
  return (
    <StyledCreateTable>
      <h1>Welcome to CreateTable!</h1>
    </StyledCreateTable>
  );
}

export default CreateTable;
