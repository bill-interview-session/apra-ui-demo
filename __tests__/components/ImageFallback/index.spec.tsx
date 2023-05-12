import { render } from '@testing-library/react';

import ImageFallback from '@components/ImagePreview/fallback';

const tempImg = `/assets/img/img-loading.svg`

describe('ImageFallback component', () => {
  it('should render snapshot', () => {
    const { container } = render(
      <ImageFallback src={tempImg} fallback={tempImg} height={30} width={30} />,
    );
    expect(container).toMatchSnapshot();
  });
});

