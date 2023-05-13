import { render } from '@testing-library/react';

import ImagePreview from '@components/ImagePreview';

const tempImg = `/assets/img/placeholder.jpg`

describe('ImagePreview component', () => {
  it('should render snapshot', () => {
    const { container } = render(
      <ImagePreview thumbnailURL={tempImg} imageURL={tempImg} height={30} width={30} />,
    );
    expect(container).toMatchSnapshot();
  });
});
