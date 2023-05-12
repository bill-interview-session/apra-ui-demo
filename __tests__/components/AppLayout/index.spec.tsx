import { render } from '@testing-library/react';

import AppLayout from '@components/AppLayout';

describe('AppLayout component', () => {
  it('should render snapshot', () => {
    const { container } = render(
      <AppLayout>
        <div className="testing" />
      </AppLayout>
    );
    expect(container).toMatchSnapshot();
  });
});
