import { render } from '@testing-library/react';

import { ActiveLastBreadcrumb } from './breadcrumbs';

describe('Breadcrumbs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActiveLastBreadcrumb />);
    expect(baseElement).toBeTruthy();
  });
});
