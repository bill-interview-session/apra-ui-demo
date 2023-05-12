import { graphQLClient } from '@libs/graphql';
import { filterAllPhotos } from '@services/photos';

// Mocking GraphQL client
jest.mock('@libs/graphql', () => ({
  graphQLClient: {
    request: jest.fn(),
  },
}));

describe('filterAllPhotos', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return photos data with meta totalCount when called with valid arguments', async () => {
    const mockResponse = {
      photos: {
        data: [
          {
            id: '1',
            title: 'photo 1',
            url: 'http://example.com/photo1.jpg',
            thumbnailUrl: 'http://example.com/photo1_thumb.jpg',
          },
          {
            id: '2',
            title: 'photo 2',
            url: 'http://example.com/photo2.jpg',
            thumbnailUrl: 'http://example.com/photo2_thumb.jpg',
          },
        ],
        meta: {
          totalCount: 2,
        },
      },
    };

    // Mocking GraphQL client response
    (graphQLClient.request as jest.MockedFunction<
      typeof graphQLClient.request
    >).mockResolvedValue(mockResponse);

    const q = 'test';
    const limit = 10;
    const page = 1;

    const result = await filterAllPhotos(q, limit, page);

    expect(graphQLClient.request).toHaveBeenCalledTimes(1);
    expect(graphQLClient.request).toHaveBeenCalledWith(expect.any(String), {
      options: {
        paginate: {
          page,
          limit,
        },
        search: {
          q,
        },
      },
    });
    expect(result).toEqual(mockResponse.photos);
  });

  it('should throw an error when GraphQL client request fails', async () => {
    const error = new Error('GraphQL request failed');

    // Mocking GraphQL client response
    (graphQLClient.request as jest.MockedFunction<
      typeof graphQLClient.request
    >).mockRejectedValue(error);

    const q = 'test';
    const limit = 10;
    const page = 1;

    await expect(filterAllPhotos(q, limit, page)).rejects.toThrow(error);
  });
});
