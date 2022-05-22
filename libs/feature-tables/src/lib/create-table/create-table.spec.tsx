import { render } from '@testing-library/react';

import CreateTable from './create-table';

describe('CreateTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateTable />);
    expect(baseElement).toBeTruthy();
  });
});
