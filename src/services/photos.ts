import { PaginationResult } from '@interfaces/pagination'
import { Photo } from '@interfaces/photo'
import { graphQLClient } from '@libs/graphql'

export const filterAllPhotos = async (q: string, limit: number, page: number): Promise<PaginationResult<Photo>> => {
  const query = `
        query ($options: PageQueryOptions) {
          photos(options: $options) {
            data {
              id
              title
              url
              thumbnailUrl
            }
            meta {
              totalCount
            }
          }
        }
      `
  const variables = {
    options: {
      paginate: {
        page,
        limit
      },
      search: {
        q
      }
    }
  }

  const { photos } = await graphQLClient.request<any>(query, variables)

  return photos
}
